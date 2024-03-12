import React from 'react'

export default function CardSingleStructure(props:any) {
  return (
    <div>
        {props.logo}
        <h2>{props.title}</h2>
        <div>
            <h5>{props.cardDate}</h5>
        </div>
        <div>
            {props.text}
        </div>
    </div>
  )
}
