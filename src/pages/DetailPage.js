import React from 'react';

const DetailPage = ({el}) => {
    return (
        <div key={el.id} className="stule mx-3"  >
            <h1 className="stule_btn  text-base"> {el.title}</h1>
        </div>

    );
};

export default DetailPage;