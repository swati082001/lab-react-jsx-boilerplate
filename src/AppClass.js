import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  
  render(){
    const { data } = this.props;
    console.log(data,"data")
    return(
      <div>
        <h1>Kalvium Gallery</h1>
        {data.map((el)=>(
          <div key={el.id}>
            <img src={el.img} alt={el.id}  width={"50%"}/>
            </div>
        ))}
      </div>
    )
  }


  // code here
}
