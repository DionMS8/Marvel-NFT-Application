import React from 'react'
import eth from '../assets/eth.png'


// COLLECTION CARD COMPONENT WILL HAVE 4 PROPS
// 1. id
// 2. name
// 3. traits
// 4. image

const CollectionCard = ({ id, name, traits, image }) => {
    return (
        <div className="collectionCard">
            <img src={image} alt=""/>

            <div className="cardDetails"></div>

            <div className="cardName">
                {name} <div className="id"> •#{id}</div>
            </div>

            <div className="priceContainer">
                <img src={eth} className="ethImg" alt=""/>
                <div className="price">{traits[0]?.value}</div>
            </div>

        </div>
    )
}

export default CollectionCard

 

