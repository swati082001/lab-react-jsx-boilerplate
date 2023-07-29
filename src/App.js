import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

 let data = imageData()
 console.log(data)
 


function App() {
  return(
    <div>
    <h1>Kalvium Gallery</h1>
    {data.map((el)=>(
      <div id={el.id}>
        <img src={el.img} alt={el.id} width={"50%"} />
      </div>
    ))}
    
    </div>
  )

}

export default App;





