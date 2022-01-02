// IMPORTING THE REACT LIBRARY
import React from "react"
// IMPORTING THE COLLECTION CARD COMPONENT
import CollectionCard from "./CollectionCard"
// IMPORTING THE CSS FILE FOR PUNK LIST
import "./PunkList.css"

// USING AXIOS, THE DATA IS TAKEN FROM OPENSEA 
// AND STORED IN THE PUNKLISTDATA ARRAY

// PUNKLISTDATA IS THE ONLY PROP FOR THE PUNKLIST COMPONENT

// FOR EACH PUNK IN PUNKLISTDATA, THE DATA WILL
// BE PASSED TO A NEW COLLECTION CARD COMPONENT

const PunkList = ({ punkListData, setSelectedPunk }) => {
    return (
       <div className="punkList">
           { punkListData.map(punk => (
                <div onClick = {() => setSelectedPunk(punk.token_id)}>
                    <CollectionCard 
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url}
                    />
                </div>
           ))}
       </div>
    )
}

export default PunkList





