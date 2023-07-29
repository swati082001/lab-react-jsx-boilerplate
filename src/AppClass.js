import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render(){
    return(
      <div>
        <h1>Kalvium Gallery</h1>
        {this.imageData().map((el)=>(
          <div key={el.id}>
            <img src={el.img} alt={el.id}  width={"50%"}/>
            </div>
        ))}
      </div>
    )
  }


  // code here
}
