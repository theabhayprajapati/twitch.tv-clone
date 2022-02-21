import React, { useState, useEffect } from 'react'
import SideComponents from '../components/SideComponents'
import Header from '../components/Header';
import ContentCard from '../components/ContentCard';
import Categories from '../components/categories';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
const Category = () => {
    const router = useRouter()
    // get object form router
    console.log(router.query)
    const genereType = router.query.type || "Action"
    // fetch movies based on genere
    // fetch tv shows based on genere

    const [genereShows, setgenereShows] = useState<any>([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ed3edb7ce3ae6a7ec3b86089be892cfb&with_genres=${genereType}`)
            .then(res => {
                setgenereShows(res.data.results)
            }).catch(err => {
                console.log(err)
            })
    }, [genereType])
    console.log(genereShows);

    return (
        <div>
            <Header />
            <Head>
                <title>
                    {genereType}
                </title>
                <link rel="shortcut icon" href="/TwitchGlitchPurple.png" />

            </Head>
            <div className='max-w-7xl mx-auto grid  md:grid-cols-5 grid-cols-1'>
                <div className='hidden md:inline-grid'>
                    <div className="fixed">
                        <SideComponents />
                    </div>
                </div>
                <div className='col-span-4 mt-5 p-3'>

                    <div>
                        <h1 className='text-4xl font-semibold '>
                            Browse
                        </h1>
                        <h1 className='text-4xl font-semibold '>
                            {
                                genereType
                            }
                        </h1>
                    </div>
                    <Categories />
                    <main>
                        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 '>
                            {Array.isArray(genereShows) && genereShows.map(item => {
                                return (
                                    <div key={item.id} className='mt-4'>
                                        <ContentCard item={item} />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default Category