import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';

const CreatTas = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }  
    
    const handleSave = (e) => {
            e.preventDefault()
            let taskObj = {}
            taskObj["Name"] = taskName
            taskObj["Description"] = description
            save(taskObj)
    
        }
    return (
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Créer tâche</ModalHeader>
        <ModalBody>
        <Form>
         <div className="form-group">
            <label>Nom Du Tache</label>
 
            <input type="text" className="form-control" value={taskName} onChange ={handleChange} name= "taskName"/>
              
           </div>
           <div className="form-group">
 
            <label> Descreption</label>
            <textarea rows= "5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>

          </div>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
          Créer
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
          Annuler
          </Button>
        </ModalFooter>
      </Modal>
    );
};

export default CreatTas;