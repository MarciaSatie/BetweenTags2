import Header from "./Components/Header"
import Code from "./Components/Editor/MyComponents"
import MEditor from "./Components/Editor/MEditor"
import AEditor from "./Components/Editor/AEditor"
import CardsGroup from "./Components/Cards/CardsGroup"

function App() {
 

  return (
    <>
    <Header/>
    <Code/>
    <MEditor/>
    <AEditor/>
    <CardsGroup
      icon ={"imagine a icon"}
    />
    </>
  )
}

export default App
