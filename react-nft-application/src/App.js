// IMPORTING THE CSS FILE FOR APP
import "./App.css";
// IMPORTING THE COLLECTION CARD COMPONENT
import CollectionCard from "./components/CollectionCard";
// IMPORTING THE HEADER COMPONENT
import Header from "./components/Header"

// USING JSX TO COMPOSE THE UI
// COMPONENT 1: HEADER
// COMPONENT 2 : COLLECTION CARD


// NOTE: TRAITS IS AN ARRAY OF OBJECTS
// RECALL: AN OBJECT CONTAINS A LIST OF KEY-VALUE PAIRS WITHIN CURLY BRACKETS

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard 
        id={0} 
        name={"Ultra Instinct Goku"} 
        traits={[{"value": 7}]} 
        image="C:\Users\Bryanna Orie\Desktop\React NFT Application\react-nft-application\src\assets\anime\Ultra Instinct.jpg" 
      />
    </div>
  )
}

export default App;




