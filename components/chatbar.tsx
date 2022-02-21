import { ChatAlt2Icon, UsersIcon } from '@heroicons/react/outline'
import React from 'react'

const Chatbar = () => {
    return (
        <div className='relative h-screen'>
            <div className='flex justify-between border-t-[1px] border-opacity-20 border-b-[1px] h-10 self-center items-center border-black '>
                <button className='hover:bg-gray-200 px-2 rounded-md py-1'>
                    <ChatAlt2Icon className='h-6 w-6 cursor-pointer' />
                </button>
                <h1 className='font-bold  cursor-pointer'>
                    STEAM CHAT
                </h1>
                <button className='hover:bg-gray-200 px-2 rounded-md py-1'>
                    <UsersIcon className='h-5 w-5 cursor-pointer' />
                </button>
            </div>
            <main>

                Your are unable to chat at the moment
            </main>
            <div className="absolute
            flex bottom-0">
                {/* make send message button */}
                <div className='flex justify-between w-full'>
                    <input disabled className='w-full h-10 px-2 rounded-l-md border-2 border-gray-200' placeholder='Type your message here' />
                    <button className='bg-gray-200 px-2 rounded-r-md py-1'>
                        <ChatAlt2Icon className='h-6 w-6 cursor-pointer' />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Chatbar