
import React from 'react'
import BookmarkInfo from '../BookmarkInfo/BookmarkInfo'

const Bookmark = ({ addToBookmark, marksAsRead }) => {

    return (
        <>
            <div>
                <div className='spent_time border-2 border-gray-600 p-3 text-center rounded-lg bg-gray-100'>
                    <h2 className='md:text-[15px] lg:text-xl font-semibold text-green-950'>Spent time on Read: <span className='px-2'>{marksAsRead}</span> min</h2>
                </div>

                <div className='bookMark_section mt-5 bg-gray-300 bg-opacity-50 p-5 rounded-md'>

                    <h2 className='md:text-[18px] lg:text-xl font-bold'>Bookmarked Blogs: <span className='pl-1 md:text-xl lg:text-2xl'>{addToBookmark.length}</span></h2>

                    {/* add to bookmark into 2 */}


                    {
                        addToBookmark.map((bookmarkCard, ind) => (
                            <BookmarkInfo
                                key={ind}

                                bookmarkCard={bookmarkCard}

                            />
                        ))
                    }


                    {/* <BookmarkInfo /> */}


                </div>

            </div>

        </>
    )
}

export default Bookmark