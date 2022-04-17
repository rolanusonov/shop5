import React from 'react';

const DetailPage = ({el}) => {
    return (
        <div key={el.id} className="stule mx-3" style={{
            width:"75px",
            height:"40px"
        }}>
            <h1 className="stule_btn my-1 text-base"> {el.title}</h1>
        </div>

    );
};

export default DetailPage;