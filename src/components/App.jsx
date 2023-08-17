import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [arr,setarr]=useState([]);
  function addClick(note){
    return setarr([...arr,note]);
  }
  function del(id){
    setarr(arr.filter((d,ind)=>{return ind!==id;}));
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addClick}/>
      {arr.map((tem,ind)=>(
        <Note key={ind} id={ind} del={del} title={tem.title} content={tem.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
