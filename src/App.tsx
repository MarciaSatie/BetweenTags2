import Header from "./Components/Header"
import Code from "./Components/Editor/MyComponents"
import MEditor from "./Components/Editor/MEditor"
import AEditor from "./Components/Editor/AEditor"
import CardsGroup from "./Components/Cards/CardsGroup"

import contentCSharp from "./Content/CSharp/Content"




function App() {
  

  return (
    <>
    <Header/>
    <Code/>
    <MEditor/>
    <AEditor/>
    <CardsGroup
 
      title ={"C# Cards"}
      contentList ={contentCSharp}
    />
    
    </>
  )
}

export default App
