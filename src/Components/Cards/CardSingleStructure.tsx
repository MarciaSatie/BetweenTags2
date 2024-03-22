import { useState } from "react";
import Modal from 'react-modal';





export default function CardSingleStructure(props:any) {

const [isOpen,setIsOpen] = useState(false);
  return (
  <>
  <div className="relative">
      {/*Modal*/}
      <Modal isOpen={isOpen} onRequestClose ={()=> setIsOpen(false)}>
      <div className="z-50" >
            {props.logo}
        
            <h2 className=' text-bt-p text-2xl font-header mt-4'>{props.title}</h2>
            <div className='mt-4 font-semibold'>
                <p>{props.cardDate}</p>
            </div>
            <div className='mt-3'>
                {props.text}
            </div>
          </div>
      </Modal>


      <div className='z-0 border-4 rounded-lg p-4 '>
          <div onClick={()=> setIsOpen(true)}>
            {props.logo}
            <h2 className=' text-bt-p text-2xl font-header mt-4'>{props.title}</h2>
          </div>

        {/* //Date */}
          <div className='mt-4 font-semibold text-xs'>
                <h5>{props.cardDate}</h5>
            </div>
            
          {/* //Content */}
          <div className='mt-4'>
                {props.text}
            </div>
      </div>
    </div>
    </>
  )
}
