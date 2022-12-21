import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import PageList from "./components/Pagelist";

const App = () => {
  const [pageData, setpageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPage] = useState(15);

  useEffect( () => {
    const loadPost= async()=>{
      
      const res = await axios.get(
        "https://west.planetgeo.az/api/blogs"
        )
        .then(res=>{
          return res.data
        })
        setpageData(res.data);
    }
    loadPost();
  }, []);

  const lastPostIndex = currentPage + postsPage;
  const firstPostIndex = lastPostIndex - postsPage;
  const currentPosts = pageData.slice(firstPostIndex, lastPostIndex).reverse();

  return (
    <div className="app">
      <h2>Welcome</h2>
      <PageList pageData={currentPosts} />
      <Pagination
        totalPosts={pageData.length}
        postsPage={postsPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
