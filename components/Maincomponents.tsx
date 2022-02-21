import React from 'react'
import ContentPart from './ContentPart'
import SideComponents from './SideComponents'

const Maincomponents = () => {
    return (
        <div className='m-2 grid grid-cols-1 md:grid-cols-5 max-w-7xl md:mx-auto'>
            <div className="hidden md:inline-grid md:col-span-1">
                <div className="fixed">
                    <SideComponents />
                </div>
            </div>
            <div className="md:col-span-4" >
                <ContentPart />
            </div>

        </div>
    )
}

export default Maincomponents