import Header from "./Components/Header"
import CardsGroup from "./Components/Cards/CardsGroup"
import CardGroupSearch from "./Components/Cards/CardGroupSearch/CardsGroupSearch";

import contentCSharp from "./Content/CSharp/Content"




function App() {
  
  let listAll = [...contentCSharp];

  return (
    <>
    <Header/>
   <CardGroupSearch contentList ={listAll}/>

    <CardsGroup
 
      title ={"C# Cards"}
      contentList ={contentCSharp}
    />
    
    </>
  )
}

export default App
