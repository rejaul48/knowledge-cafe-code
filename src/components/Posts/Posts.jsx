import React, { useEffect, useState } from 'react'
import PostCard from '../PostCard/PostCard'

const Posts = ({ handleAddToBookmark,handleMarksAsReadTime }) => {

    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        const handleAllPosts = async () => {
            try {
                const res = await fetch('Data.json')
                const data = await res.json()
                setAllPosts(data);
            } catch (err) {
                console.log("something went wrong!", err)
            }
        }

        handleAllPosts()
    }, [])


    return (
        <>

            {
                allPosts.map((card, ind) => (
                    <PostCard
                        key={ind}
                        card={card}
                        handleAddToBookmark={handleAddToBookmark}
                        handleMarksAsReadTime={handleMarksAsReadTime}

                    />
                ))
            }

        </>
    )
}
export default Posts