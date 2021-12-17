// IMPORTING THE CSS FILE FOR APP
import "./App.css"
// IMPORTING THE COLLECTION CARD COMPONENT
import CollectionCard from "./components/CollectionCard"
// IMPORTING THE HEADER COMPONENT
import Header from "./components/Header"
import { useState, useEffect } from "react"
import axios from "axios"

// USING JSX TO COMPOSE THE UI
// COMPONENT 1: HEADER
// COMPONENT 2 : COLLECTION CARD

// NOTE: TRAITS IS AN ARRAY OF OBJECTS
// RECALL: AN OBJECT CONTAINS A LIST OF KEY-VALUE PAIRS WITHIN CURLY BRACKETS

function App() {

  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xA763e041c039fF9487b45fa3c93025EEAC89D787"
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  
  return (
    <div className="app">
      <Header />
      <CollectionCard 
        id={0} 
        name={"Spiderman (Iron Armor)"} 
        traits={[{"value": 7}]} 
        image="https://i.pinimg.com/originals/cc/40/34/cc4034b842a4a33113ba1325632c42a1.jpg" 
      />
    </div>
  )
}

export default App;








