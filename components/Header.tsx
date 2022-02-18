import React from 'react'
import { DotsVerticalIcon, SearchIcon } from '@heroicons/react/solid'
import { AnnotationIcon, UserIcon } from '@heroicons/react/outline'

const Header = () => {
  const session = true
  return (
    <header className="h-12 border-2 bg-twich-light px-3 z-50 shadow-md sticky top-0 bg-slate-100 max-w-7xl mx-auto">
      <div className='grid grid-cols-5 items-center justify-items-center h-full' >
        <div className='justify-self-start  w-full '>
          {/* //image; text; vertical dots */}
          <div className='flex space-x-4 items-center'>
            <img src='/TwitchGlitchPurple.png' alt='Twitch Logo' className='h-7' />
            <h1 className='text-sm font-bold '>Browse</h1>
            <DotsVerticalIcon className='h-6 text-twich-black' />
          </div>
        </div>
        <div className='justify-self-center col-span-3 border-2 rounded-md'>
          <div className='flex rounded-md w-full h-8 items-center '>
            <input type="text" placeholder='Search' className='outline-none placeholder:h-8  px-2' />
            <SearchIcon className='h-6 text-twich-black px-2  border-l-2 bg-slate-200 ' />
          </div>
        </div>
        <div className='justify-self-end '>
          {
            session ? (
              <div className='flex space-x-4'>
                <button className='bg-slate-200 text-gray-800 px-2 font-bold text-sm rounded-sm hover:bg-opacity-90'>Login</button>
                <button className='bg-purple-400 text-gray-800 px-2 font-bold text-sm rounded-sm hover:bg-opacity-90'>SignUp</button>
                <button className='bg-slate-100 text-gray-800 px-2 font-bold text-sm rounded-sm hover:bg-opacity-90'>
                  <UserIcon className='h-7 py-2' />
                </button>

              </div>
            ) : (
              <div>
                aslkdfj
              </div>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header