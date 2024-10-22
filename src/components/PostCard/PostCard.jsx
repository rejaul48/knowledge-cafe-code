import React, { useState } from 'react'

function PostCard({ card, handleAddToBookmark, handleMarksAsReadTime }) {
    const { post_img, user_img, post_title, user_name, post_date, reading_time, tags } = card

    // Add to bookmark button click to solid Add to bookmark button
    const [isAddToBookmark, setIsAddToBookmark] = useState(false);
    // marks as read button click to change state
    const [isMarksAsRead, setIsMarkAsRead] = useState(false)

    //  Add to bookmark button click to solid Add to bookmark button
    const handleAdToBookmarkButton = () => {
        setIsAddToBookmark(true)
    }

    // click marks as read to change button color that visible to click this button
    const handleMarksAsReadButton = () => {
        setIsMarkAsRead(true)
    }

    return (
        <>

            <div className='main_single_card_section'>

                <div>
                    <div className='post_img'>
                        <img 
                            className='w-full md:h-[230px] lg:h-[360px] rounded-lg'
                            src={post_img} alt={`this is ${post_title} posts cover img`} />
                    </div>

                    <div className='post_info flex justify-between items-center py-3'>

                        <div className='user_part flex gap-3'>

                            <img className='w-[45px]' src={user_img} alt="user img" />
                            <div className="name_and_post_date">
                                <h2 className='text-xl font-semibold'>{user_name}</h2>
                                <p className='text-sm'>{post_date}</p>
                            </div>

                        </div>

                        <div className="marks_as_read">
                            <p className='flex items-center'><span>{reading_time} <span>min</span> </span>
                                <button onClick={() => { handleAddToBookmark(card); handleAdToBookmarkButton() }}>{isAddToBookmark ? (<img className='w-[28px]' src="https://img.icons8.com/?size=24&id=83134&format=png" alt="bookmark button img" />) : (<img className='w-[28px]' src="https://img.icons8.com/?size=256&id=82461&format=png" alt="bookmark solid button" />)}</button>


                            </p>
                        </div>

                    </div>
                    <div className="post_bottom_part mb-4">
                        <h2 className='text-xl  md:text-2xl lg:text-4xl font-semibold'>{post_title}</h2>
                        <div className='flex gap-2 mt-5 pb-3'>
                            {tags.map((tag, ind) => (
                                <p key={ind} className='font-semibold text-sm'>#{tag}</p>
                            ))}
                        </div>

                        <button disabled={isMarksAsRead ? true : false} onClick={() => { handleMarksAsReadTime(reading_time); handleMarksAsReadButton() }} className={`underline font-medium ${isMarksAsRead ? 'text-red-500' : 'text-green-600'}`}>{isMarksAsRead ? "Marks as Read Added" : "Marks as Read"}</button>

                    </div>

                </div>

            </div>

        </>
    )
}

export default PostCard