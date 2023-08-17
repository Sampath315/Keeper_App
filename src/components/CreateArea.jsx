import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  var [a,seta]=useState({
    title:"",content:""
  });
  var [tru,settru]=useState(false);
  function isro(){
    settru(true);
  }
  function asetter(e){
    var {name,value}=e.target;
    seta((d)=>{
      return {
        ...d,[name]:value
      }
    });  
  }
  function addbutton(e){
    props.onAdd(a);
    seta(d=> { return{
      title:"",content:""};
    });
    e.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        {tru&&<input name="title" value={a.title} placeholder="Title" onChange={asetter}/>}
        <textarea name="content" value={a.content} onChange={asetter} placeholder="Take a note..." 
        onClick={settru} rows={tru?"3":"1"} />
        <Zoom in={tru}> 
        <Fab onClick={addbutton}  >
            <AddIcon />
          </Fab>
          </Zoom>
         
      </form>
    </div>
  );
}

export default CreateArea;
