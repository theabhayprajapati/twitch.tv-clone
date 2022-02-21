import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Categories = () => {
    const router = useRouter()
    const [categories, setCategories] = useState<any>([])
    const colors = [
        '#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE', '#A52A2A', '#D2691E', '#FF7F50', '#6495ED', '#FFF8DC', '#DC143C', '#00FFFF', '#00008B', '#008B8B', '#B8860B',

        // add 30 more colors
        '#FF1493', '#FF4500'

    ]
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ed3edb7ce3ae6a7ec3b86089be892cfb&language=en-US')
            .then(res => {
                setCategories(res.data.genres)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className='flex overflow-x-auto gap-3 items-center  overscroll-y-none h-[100px] md:scrollbar-hide'>

            {
                Array.isArray(categories) && categories.map((item: any, index: number) => {
                    return (
                        <div key={index} onClick={() => router.push({
                            pathname: '/categories',
                            query: {
                                id: item.id,
                                type: item.name
                            }
                        })} style={{ backgroundColor: colors[index] }} className={`min-w-[150px]  w-[160px] h-[60px] overflow-y-hidden  rounded-md relative shadow-lg items-center grid place-items-center  scrollbar-hide cursor-pointer`}>
                            <h1 className='absolute m-2 text-xl  font-semibold   scrollbar-hide '>
                                {item.name}
                            </h1>
                            <h1>

                            </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Categories