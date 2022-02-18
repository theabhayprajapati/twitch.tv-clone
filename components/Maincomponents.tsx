import React from 'react'
import ContentPart from './ContentPart'
import SideComponents from './SideComponents'

const Maincomponents = () => {
    return (
        <div className='m-2 grid grid-cols-1 md:grid-cols-6 max-w-7xl md:mx-auto'>
            <div className="hidden md:inline-grid">
                <SideComponents />
            </div>
            <div className="md:col-span-5" >
                <ContentPart />
            </div>

        </div>
    )
}

export default Maincomponents