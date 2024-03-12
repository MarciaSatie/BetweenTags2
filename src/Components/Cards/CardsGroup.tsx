import CardSingleStructure from "./CardSingleStructure"

export default function CardsGroup(props:any) {
  return (
    <>
        <div className= "shadow-lg p-4 mt-4 mb-4 rounded-3xl overflow-auto max-h-[350px] text-left">
            <div className='flex gap-x-4 '>
              {props.icon}
              <h1 className=' text-bt-p text-3xl font-header ml-5'>{props.title}</h1>
            </div>
            <div>
              <CardSingleStructure
              logo = {props.icon}
              title ={"I like onigiri"}
              cardDate = {"12-03-2024"}
              text ={"bla bla bla bla"}

              />
            </div>

            
        </div>

    </>

  )
}
