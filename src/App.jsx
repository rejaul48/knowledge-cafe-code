
import React, { useState } from "react"
import Header from "./components/Header/Header"
import Posts from "./components/Posts/Posts"
import Bookmark from "./components/Bookmark/Bookmark"
import Footer from "./components/Footer/Footer"

const App = () => {

  // handle add to bookmark and handle add to bookmark counter
  const [addToBookmark, setAddtoBookmark] = useState([])
  // handle marks as read counting time
  const [marksAsRead, setMarksAsRead] = useState(0)

  // handle add to bookmark and handle add to bookmark counter
  const handleAddToBookmark = (addToBookmarkInfo) => {
    if (addToBookmark.includes(addToBookmarkInfo)) {
      return alert("This items is already exist in add to bookmarks")
    }
    const newAddToBookmarks = [...addToBookmark, addToBookmarkInfo]
    setAddtoBookmark(newAddToBookmarks)
  }
  // handle marks as read counting time
  const handleMarksAsReadTime = (marksReadTime) => {
    const needToReadTime = Number(marksReadTime)
    setMarksAsRead((prev) => prev + needToReadTime)

  }


  return (
    <>


      <Header />

      <div className="
      
    
      md:flex max-w-6xl mx-auto gap-4 mt-6 px-5 xl:px-0">
        <div className="w-full md:w-2/3  ">
          <Posts
            handleAddToBookmark={handleAddToBookmark}
            handleMarksAsReadTime={handleMarksAsReadTime}

          />
        </div>
        <div className="w-full md:w-1/3  mt-12 md:mt-0">
          <Bookmark
            addToBookmark={addToBookmark}
            marksAsRead={marksAsRead}

          />
        </div>

      </div>

      <Footer />

    </>
  )
}

export default App
