import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Chatbar from '../../components/chatbar'
import Header from '../../components/Header'
import SideComponents from '../../components/SideComponents'

const Movies = () => {
    const router = useRouter()

    const movieID = router.query.all
    console.log(movieID)
    const [movieDetails, setmovieDetails] = useState<any>([])
    // fetch
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=ed3edb7ce3ae6a7ec3b86089be892cfb&language=en-US`)
            .then(res => {
                setmovieDetails(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [movieID])

    // fetch the movie casT
    const [movieCast, setMovieCast] = useState<any>([])
    console.log(movieDetails, "movieDetails")
    return (
        <div>
            <Head>
                <title>
                    {movieDetails.original_title}
                </title>
            </Head>
            <Header />
            <main className="m-2 grid grid-cols-1 md:grid-cols-5 max-w-7xl md:mx-auto ">
                <div className='hidden md:inline-grid'>
                    <div className="fixed">
                        <SideComponents />
                    </div>
                </div>
                <div className="col-span-3 bg-gray-200 overflow-y-scroll scrollbar-hide">
                    <div className='md:h-[350px] bg-gray-900 border-2 relative'>


                        <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.backdrop_path} alt="" className="h-full w-full object-fill  object-center cursor-pointer" />
                        <span className='rounded-sm text-white mt-2 ml-2 text-xs px-1  bg-red-600 absolute left-1 top-0'>
                            LIVE
                        </span>
                    </div>
                    <div className='m-2 md:m-5 '>
                        <div className='flex items-center gap-3 '>
                            <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.backdrop_path} alt="" className='md:h-16 md:w-16 h-10 w-10  rounded-full object-fill object-center cursor-pointer' />
                            <h1 className='text-xl font-bold '>
                                {movieDetails.original_title}
                            </h1>
                        </div>
                        <div className='m-5  '>
                            <h1 className='text-3xl font-semibold cursor-pointer'>
                                About <span className='text-xl'>
                                    {movieDetails.original_title}
                                </span>
                            </h1>
                            <h1 className=' font-semibold'>
                                Views {movieDetails.popularity} M
                            </h1>
                            <div className='md:flex'>
                                <div className='md:w-[80%]'>
                                    {movieDetails.overview}
                                </div>
                                <div className='md:w-[20%] mt-2'>
                                    Makers:
                                    {
                                        Array.isArray(movieDetails.production_companies) && movieDetails.production_companies.map((company: any) => {
                                            return (

                                                <h1 key={company.id} className='text-sm line-clamp-1 font-semibold cursor-pointer'>
                                                    {'-->'} {company.name}
                                                </h1>

                                            )

                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='hidden md:inline-grid '>
                    <div className='fixed'>
                        <Chatbar />
                    </div>
                </div>
            </main >
        </div >
    )
}

export default Movies