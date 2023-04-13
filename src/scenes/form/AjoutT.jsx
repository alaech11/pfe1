import { Button } from '@mui/material';
import React, { useEffect ,useState } from 'react';
import Header from "../../components/Header";
import '../../App.css';
import CreatTas from '../../components/modals/CreatTas';
import CardTas from '../../components/CardTas';
import { MyProSidebarProviderU } from "../global/SidebarContextU";

const AjoutT = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [taskList, setTaskList] = useState([])
    
  useEffect(() => {
      let arr = localStorage.getItem("taskList")
     
      if(arr){
          let obj = JSON.parse(arr)
          setTaskList(obj)
      }
  }, [])


  const deleteTask = (index) => {
      let tempList = taskList
      tempList.splice(index, 1)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
  }

  const updateListArray = (obj, index) => {
      let tempList = taskList
      tempList[index] = obj
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
  }

  const saveTask = (taskObj) => {
      let tempList = taskList
      tempList.push(taskObj)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(taskList)
      setModal(false)
  }


  return (
  <>
<MyProSidebarProviderU>
    <div className='header' >
      <Header title="Todo list" subtitle="liste de choses à faire" />
     <Button color="secondary" variant="contained" onClick = {() => setModal(true)}> créer tâche</Button>    
    
    
    <div className='task-container'>
    {taskList && taskList.map((obj , index) => <CardTas taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
    
    </div></div> 
    <CreatTas toggle={toggle} modal= {modal} save = {saveTask} />
   </MyProSidebarProviderU>   </>
 
  );
};
 
export default AjoutT;