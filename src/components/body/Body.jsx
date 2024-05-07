import React from 'react'
import Card from './Card'
import data from './../../data.json'

const Body = () => {
  return (
    <div>{

        data.map((elem,index) => {
            return <Card key={index} content={elem.content} name={elem.name} />;
        })

        }

     
    </div>
  )
}

export default Body
