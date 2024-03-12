import Header from "./Components/Header"
import Code from "./Components/Editor/MyComponents"
import MEditor from "./Components/Editor/MEditor"
import AEditor from "./Components/Editor/AEditor"
import CardsGroup from "./Components/Cards/CardsGroup"




function App() {
  
//importing logo:
const logo_csharp = <img src="https://firebasestorage.googleapis.com/v0/b/between-tags.appspot.com/o/logo%2Flogo_CSharp.png?alt=media&token=9c458fa4-2a06-47df-8865-8d4f3d6043b7"/>;


  return (
    <>
    <Header/>
    <Code/>
    <MEditor/>
    <AEditor/>
    <CardsGroup
      icon ={logo_csharp}
      title ={"C# Cards"}
    />
    
    </>
  )
}

export default App
