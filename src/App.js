import React from 'react'
import Styles from "./App.css"

const App = (data) => {
  console.log(data.data)
  return (
    <div className={Styles.heading}>
      <h1>Kalvium Gallery</h1>
      {data?.data.map((el)=>(
        <div className={Styles.image} key={el.id}>
          <img src={el.img} alt={el.id} width={"50%"}/>
          </div>
      ))}
    </div>
  )
}

export default App