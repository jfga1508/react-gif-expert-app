import React from "react";
import { GridGifitem } from "./GifGriditem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {loading && 'Cargando...'}
            <ol className="card-grid">
                {images.map( img => {
                    return <GridGifitem key={img.id} {...img} />
                })}
            </ol>
        </div>
    )
}