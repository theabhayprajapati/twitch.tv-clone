import React from 'react'

const SideComponents = () => {
    let following = false
    return (
        <div className='m-3 border- 2 text-sm font-bold bg-slate-100 h-screen'>
            {
                following && (
                    <div className=''>
                        <h1>
                            FOLLLOWED CHANNELS
                        </h1>

                    </div>
                )
            }
            <div>
                <h1>
                    RECOMMENDED CHANNELS
                </h1>
                <div className='mt-1 flex gap-2 items-center'>
                    <div className='h-6 w-6 rounded-full bg-red-500'>

                    </div>
                    <div className='flex items-center'>
                        <h1>
                            Tarik
                            <p className='text-sm font-normal'>
                                Lorem, ipsum.
                            </p>
                        </h1>
                        <div>
                            <h1>
                                ♥️ 15.6k
                            </h1>
                        </div>

                    </div>
                </div>
                <div className='mt-1 flex gap-2 items-center'>
                    <div className='h-6 w-6 rounded-full bg-red-500'>

                    </div>
                    <div className='flex items-center'>
                        <h1>
                            Tarik
                            <p className='text-sm font-normal'>
                                Lorem, ipsum.
                            </p>
                        </h1>
                        <div>
                            <h1>
                                ♥️ 15.6k
                            </h1>
                        </div>

                    </div>
                </div><div className='mt-1 flex gap-2 items-center'>
                    <div className='h-6 w-6 rounded-full bg-red-500'>

                    </div>
                    <div className='flex items-center'>
                        <h1>
                            Tarik
                            <p className='text-sm font-normal'>
                                Lorem, ipsum.
                            </p>
                        </h1>
                        <div>
                            <h1>
                                ♥️ 15.6k
                            </h1>
                        </div>

                    </div>
                </div><div className='mt-1 flex gap-2 items-center'>
                    <div className='h-6 w-6 rounded-full bg-red-500'>

                    </div>
                    <div className='flex items-center'>
                        <h1>
                            Tarik
                            <p className='text-sm font-normal'>
                                Lorem, ipsum.
                            </p>
                        </h1>
                        <div>
                            <h1>
                                ♥️ 15.6k
                            </h1>
                        </div>

                    </div>
                </div><div className='mt-1 flex gap-2 items-center'>
                    <div className='h-6 w-6 rounded-full bg-red-500'>

                    </div>
                    <div className='flex items-center'>
                        <h1>
                            Tarik
                            <p className='text-sm font-normal'>
                                Lorem, ipsum.
                            </p>
                        </h1>
                        <div>
                            <h1>
                                ♥️ 15.6k
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideComponents