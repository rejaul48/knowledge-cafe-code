import React from 'react'

const Header = () => {
    return (
        <>

            <div className='max-w-6xl mx-auto flex justify-between items-center pt-3 px-5 xl:px-0'>
                <div className='website-name text-3xl font-bold' >Knowledge Cafe</div>
                <div className='user-img'>
                    <img
                        className='w-[45px] h-[48px]'
                        src={'https://i.ibb.co.com/gF0csVG/profile.png'} alt="user img" />
                </div>
            </div>

            <hr className='max-w-6xl mx-auto mt-2' />

        </>
    )
}

export default Header