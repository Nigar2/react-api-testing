
import React from 'react'
import "./Pagination.css"

const pagination = ({
    totalPosts,
    postsPage,
    setCurrentPage,
    currentPage}) => {

    let pages = [];
    for (let index = 1; index <= Math.ceil(totalPosts/ postsPage); index++) {
        pages.push(index);
    }

  return (
    <div className='pagination'>
      {
        pages.map((page,index)=>{
            return <button key={index} onClick={()=>setCurrentPage(page)} 
            className={page === currentPage ? 'active' : " "}>
                {page}
            </button>
        })
      }
    </div>
  )
}

export default pagination
