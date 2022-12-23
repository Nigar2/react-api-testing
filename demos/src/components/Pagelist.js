import React from "react";

import PageCard from "./Pagecard";
import "./Pagelist.css";

const PageList = ({pageData}) => {
    return (
        <div className='page_list'>
            {pageData.map((data, index) => {
                return (
                    <PageCard
                        key={index}
                        item={index}
                        image={data.image}
                        name={data.name}
                        content={data.content.length>100?
                        data.content.substring(0,100)+'..': data.content}
                    />
                );
            })}
        </div>
    );
};

export default PageList;
