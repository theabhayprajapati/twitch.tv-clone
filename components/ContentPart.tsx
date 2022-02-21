import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Categories from './categories'
import ContentCard from './ContentCard'

const ContentPart = () => {

l
    const router = useRouter()

    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ed3edb7ce3ae6a7ec3b86089be892cfb&language=en-US&page=1')
            .then(res => {
                setData(res.data.results)
                setLoading(false)

            }).catch(err => {
                console.log(err)
            })
    }, [])

    const borderColor = ["green", "blue", "red", "yellow", "purple"]
    // get random item from borderColor array

    // fetching categories for movies list


    // fetch trending movies
    const [trending, setTrending] = useState<any>([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=ed3edb7ce3ae6a7ec3b86089be892cfb')
            .then(res => {
                setTrending(res.data.results)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    // fetching trending tv shows
    const [trendingTv, setTrendingTv] = useState<any>([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=ed3edb7ce3ae6a7ec3b86089be892cfb')
            .then(res => {
                setTrendingTv(res.data.results)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    // make a array of 19 unique colors
    // add two more color to the array



    console.log(Array.isArray(data))
    console.log(data)
    console.log("https://image.tmdb.org/t/p/w500" + data.backdrop_path)
    return (
        <div>
            <h1 className="text-3xl font-bold">
                Welcome to Twitch!
            </h1>

            <div>
                <h1 className='font-semibold'>
                    <span className='text-purple-700'>
                        Live</span> channels we think you&apos;ll like
                </h1>
                <div className='flex overflow-x-auto gap-3 min-h-[240px] overflow-y-hidden md:scrollbar-hide scroll-smooth'>
                    {
                        Array.isArray(data) && data.map(item => {
                            return (
                                <ContentCard key={item.id} item={item} type={"All"} />
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <h1>
                    <span className='text-purple-700 font-semibold'>
                        Categories
                    </span> we think you&apos;ll like
                </h1>
                <Categories />
            </div>
            <div>
                <h1 className='font-semibold'>
                    Celebrate <span className='text-purple-700'>
                        trending</span> brillance
                </h1>
                <div className='flex overflow-x-auto gap-3 md:scrollbar-hide h-[240px]'>
                    {
                        Array.isArray(trending) && trending.map((item: any) => {
                            return (
                                <ContentCard key={item.id} item={item} type="movie" />
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className='font-semibold '>
                        Recommended <span className='text-purple-700'>
                            TV Shows</span>  channels
                    </h1>
                    <div className='flex overflow-x-auto gap-3 md:scrollbar-hide h-[240px]'>

                        {
                            Array.isArray(trendingTv) && trendingTv.map((item: any) => {
                                return (
                                    <ContentCard key={item.id} item={item} background="purple" type='tv' />
                                )
                            })

                        }
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ContentPart