import React from "react";

export const GridGifitem = ({ id, title, url }) => {

    return (
        <div className="card animate__animated animate__bounce">
            <p className="p">{title}</p>
            <img src={url} />
        </div>
    )
}