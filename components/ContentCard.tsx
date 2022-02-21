import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
interface Props {
    item: {
        backdrop_path: string,
        poster_path: string,
        title: string,
        vote_average: number,
        overview: string,
        popularity: number,
        id: any,
    },
    type?: "movie" | "tv" | "All",
    background?: string | 'red',

}

const ContentCard = ({ item, background, type }: Props) => {
    const router = useRouter()
    return (
        <div className='min-w-[300px] md:h-[230px]  h-[260px]relative shadow-md'>
            <div className='relative'>
                <img onClick={() => router.push({
                    pathname: type + "/" + item.id,
                    query: {
                        id: item.id,
                        type: type

                    }

                })} src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} alt="" className={`hover:border-l-8  hover:border-b-8 hover:border-red-500 cursor-pointer`} />
                <span className='rounded-sm text-white mt-2 ml-2 text-xs px-1  bg-red-600 absolute left-1 top-0'>
                    LIVE
                </span>
                <span className='rounded-sm text-white mb-2 ml-2 text-xs px-1  bg-gray-900 absolute left-1 bottom-0 '>
                    {(item.popularity).toString().slice(0, 3)}K viewers
                </span>
            </div>
            <div className='mt-2 flex'>
                <div className="w-[10%]">
                    <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt="" className='h-8 rounded-full w-8 object-fill cursor-pointer' />
                </div>
                <div className="w-[90%] ml-2">
                    <h1 className="text-sm font-semibold line-clamp-1 cursor-pointer">
                        {item.title}
                    </h1>
                    <h1 className='text-sm cursor-pointer'>
                        {(item.overview).slice(0, 10)}
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default ContentCard