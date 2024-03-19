import CardSingleStructure from "./CardSingleStructure"

export default function CardsGroup(props:any) {

  const content = [...props.contentList];


  return (
    <>
        <div className= "shadow-lg p-4 mt-4 mb-4 rounded-3xl overflow-auto max-h-[350px] text-left ">
            <div className='flex gap-x-4 '>
              {props.icon}
              <h1 className=' text-bt-p text-3xl font-header ml-5'>{props.title}</h1>
            </div>
            <div className="inline-grid grid-cols-7 gap-4   ">

            {content.map((item) => (
              <CardSingleStructure
                logo={item.logo}
                key={item.key}
                title={item.title}
                cardDate={item.date}
                text={item.cardContent}
              />
            ))}
            </div>

            
        </div>

    </>

  )
}
