import React from 'react'

const CollectionCard = (id, name, traits, image) => {
    return (
        <div className="collectionCard">
            <img src={image} alt=""/>
            <div className="cardDetails">

            </div>
            <div className="cardName">
                {name} <div className="id"> •#{id}</div>
            </div>
            <div className="priceContainer">
                <img src={ethImg} className="ethImg" alt=""/>
                <div className="price"></div>
            </div>
        </div>
    )
}

export default CollectionCard







