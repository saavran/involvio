import React from 'react'
import "./show-info.css"

export default function ShowInfo(props) {

    const renderButton = () => {
        console.log(props.addedToFavorites)
        if (props.favorite) {
            return <button className="remove" onClick={() => props.removeFromFavorite(props.index)}>Remove from Favorites</button>
        } else {
            return <button onClick={() => props.addToFavorite(showData)}>Add to Favorites</button>
        }
    }
    const { showData } = props
    return (
        <div className="show-info-wrappers">
            <div className="show-info-box">
                <img src={showData && showData.image && showData.image.medium} alt="Show Cover" />
                {renderButton()}
            </div>
            <div className="title">
                <h4>
                    {showData && showData.name}
                </h4>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" /></svg>
                    {showData && showData.rating.average}
                </span>
            </div>
            {showData && showData.genres.map(genre => (
                <div key={genre} className="show-genre">{genre}</div>
            ))}
        </div>

    )
}
