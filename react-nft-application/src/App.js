// IMPORTING THE CSS FILE FOR APP
import "./App.css";
// IMPORTING THE COLLECTION CARD COMPONENT
import CollectionCard from "./components/CollectionCard";
// IMPORTING THE HEADER COMPONENT
import Header from "./components/Header";

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
        name={"Spiderman (Iron Armor)"} 
        traits={[{"value": 7}]} 
        image="https://i.pinimg.com/originals/cc/40/34/cc4034b842a4a33113ba1325632c42a1.jpg" 
      />
    </div>
  )
}

export default App;





