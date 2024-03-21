import Header from "./Components/Header"
import CardsGroup from "./Components/Cards/CardsGroup"
import CardGroupSearch from "./Components/Cards/CardGroupSearch/CardsGroupSearch";
import AEditor from "./Components/Editor/AEditor";

import contentCSharp from "./Content/CSharp/Content"




function App() {
  
  let listAll = [...contentCSharp];

  return (
    <>
    <Header/>
    
    <AEditor
      code ={`Welcome to <Between-Tags!/>

Where I create notes from specifics code languages.
Enjoy! `}
    />

   <CardGroupSearch contentList ={listAll}/>

    <CardsGroup
      title ={"C# Cards"}
      contentList ={contentCSharp}
    />
    
    </>
  )
}

export default App
