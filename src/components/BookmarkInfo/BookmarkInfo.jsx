import React from 'react'

const BookmarkInfo = ({ bookmarkCard }) => {

    const { post_title, user_name, reading_time } = bookmarkCard

    return (
        <>

            <div className='adding_bookmark_info bg-gray-400 bg-opacity-35 mt-4 px-4 py-2 rounded-lg'>

                <p className='my-2 font-semibold text-[13px] md:text-[10px] lg:text-[16px]'>{post_title}</p>
                <div className='flex justify-between items-center mt-2 pb-2'>
                    <h2 className='text-sm md:text-[9px] lg:text-[14px] font-light'>{user_name}</h2>
                    <p className='text-sm md:text-[9px] lg:text-[14px] font-light'><span>{reading_time}</span>min</p>
                </div>

            </div>

        </>
    )
}

export default BookmarkInfo