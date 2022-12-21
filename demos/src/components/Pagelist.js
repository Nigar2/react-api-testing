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
                        image={data.image}
                        name={data.name}
                        content={data.current}
                    />
                );
            })}
        </div>
    );
};

export default PageList;
