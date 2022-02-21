import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SideComponents = () => {
    let following = false

    // fetching trending person, firstmake usestate then user useeffect
    const [trendingperson, settrendingperson] = useState<any>([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/person/day?api_key=ed3edb7ce3ae6a7ec3b86089be892cfb')
            .then(res => res.json())
            .then(data => {
                settrendingperson(data.results)
            })
    }, [])

    console.log(trendingperson)

    return (
        <div className='p-3 border- 2 text-sm font-bold bg-slate-100 h-full overscroll-auto'>
            {
                following && (
                    <div className=''>
                        <h1>
                            FOLLLOWED CHANNELS
                        </h1>

                    </div>
                )
            }
            <div className=''>
                <h1>
                    RECOMMENDED CHANNELS
                </h1>
                <div className='mt-1 overflow-y-scroll overscroll-x-none flex-col  items-center scrollbar-hide h-[520px] '>
                    {
                        Array.isArray(trendingperson) && trendingperson.slice(0, 10).map((person: any) => {
                            return (<div key={person.id} className='w-full flex font-medium  justify-between'>
                                <div className="w-[30%]">
                                    <Image height={" 32px"} width={" 32px"} src={"https://image.tmdb.org/t/p/w500" + person.profile_path} className='h-8 w-8 rounded-full' alt="" />
                                </div>
                                <div className='text-left w-[50%]'>
                                    <h1 className='text-sm '>
                                        {(person.name).split(' ')[0]}
                                    </h1>
                                    <h1 className='text-xs text-gray-500'>
                                        {person.known_for_department}
                                    </h1>
                                    {/* followings */}

                                </div>
                                <h1 className='text-xs w-[20%]'>
                                    ♥️{Number(person.popularity).toFixed(1)}K
                                </h1>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SideComponents