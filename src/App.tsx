import Header from "./Components/Header"
import CardsGroup from "./Components/Cards/CardsGroup"
import CardGroupSearch from "./Components/Cards/CardGroupSearch/CardsGroupSearch";
import MEditor from "./Components/Editor/MEditor";


import contentCSharp from "./Content/CSharp/Content"
import contentVSCode from "./Content/VisualCode/Content"
import contentReact from "./Content/React/Content"




function App() {
  
  let listAll = [...contentCSharp,...contentVSCode,...contentReact];

  return (
    <>
    <Header/>
    
    <MEditor

`}
    />

   <CardGroupSearch contentList ={listAll}/>

    <CardsGroup
      title ={"C# Cards"}
      contentList ={contentCSharp}
    />
    
    <CardsGroup
      title ={"React"}
      contentList ={contentReact}
    />

    <CardsGroup
      title ={"VS Code"}
      contentList ={contentVSCode}
    />
    </>
  )
}

export default App
