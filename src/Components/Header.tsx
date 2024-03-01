import logo from "../assets/logo/logo.png"

export default function Header() {
  return (
    <>
    <div className = "bg-black text-bt-p flex items-center p-5 h-28" >
        <img src ={logo} className="w-20"/>    
       <h1 className="text-5xl font-header ml-5"> &#60; Between-Tags &#62;</h1>
       
    </div>
    <div className="bg-bt-p p-0.5"></div>
    </>    
  )
}
