import React from 'react'
import { DotsVerticalIcon, SearchIcon } from '@heroicons/react/solid'
import { AnnotationIcon, CollectionIcon, UserIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Image from 'next/image'

const HeaderComponent = () => {
  const router = useRouter()
  const session = true
  return (
    <header className="h-12 border-2 bg-twich-light px-3 z-50 shadow-md sticky top-0 bg-slate-100 max-w-7xl mx-auto">
      <div className='grid grid-cols-7 md:grid-cols-5 items-center justify-items-center h-full' >




        <div className='justify-self-start col-span-2 md:col-span-1 w-full '>
          {/* //image; text; vertical dots */}
          <div className='flex space-x-4 items-center'>
            <Image height={'28px'} width={'28px'} src='/TwitchGlitchPurple.png' alt='Twitch Logo' className='h-7 cursor-pointer' onClick={() => router.push("/")} />
            <h1 className='text-sm font-bold hidden md:inline-flex cursor-pointer' onClick={() => router.push("/categories")}>Browse</h1>
            {/* add a collection icon */}
            <CollectionIcon className='h-6 text-twich-black md:hidden cursor-pointer' onClick={() => router.push("/categories")} />
            <DotsVerticalIcon className='h-6 text-twich-black hidden md:inline-flex' />
          </div>
        </div>


        <div className='col-span-3 justify-self-end md:hidden'>
          <button className='bg-purple-500 px-2 py-1  rounded-md'>
            Open in App
          </button>
        </div>

        {/* add search icons and vertical docts icons */}
        <div className='col-span-2 md:col-span-1 justify-self-center  md:hidden'>
          <div className='flex space-x-2 items-center'>
            <SearchIcon className='h-6 text-twich-black' />
            <DotsVerticalIcon className='h-6 text-twich-black' />
          </div>
        </div>


        {/* <div className='justify-self-center col-span-3 border-2 rounded-l-md hidden md:inline-grid bg-slate-200'>
          <div className='flex rounded-l-md w-full h-full items-center roundmd '>
            <input type="text" placeholder='Search' className='outline-none placeholder:h-8  px-2 h-full py-1 bg-white' />
            <SearchIcon className='h-7 text-twich-black px-2  border-l-2 bg-white py-1' />
          </div>
        </div> */}

        <div className='col-span-3 md:flex bg-[#F2F2F2] justify-self-center rounded-md w-64 justify-between border-2 hidden  '>
          <input type="search" name="" placeholder="Search" className='hover:ring-1 ring-gray-400 rounded-l-md focus:bg-white m-0 focus:ring-purple-600 outline-none   px-2 text-sm w-[85%] bg-[#E5E5E5]' id="" />
          <SearchIcon className='h-8  p-1 w-[15%] hover:bg-slate-200 cursor-not-allowe rounded-r-md' />
        </div>

        <div className='justify-self-end hidden md:inline-grid'>
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

export default HeaderComponent