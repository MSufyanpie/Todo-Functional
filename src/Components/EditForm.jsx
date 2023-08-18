import React from 'react'
import { Card,Container,Button,Badge } from 'react-bootstrap'
import './EditForm.css'


export default function EditForm(props) {
 
    const tasktoEdit=props.tasktoEdit
    // const savehandler=()=>props.SaveHandler()
    // const cancelhandler=()=>props.CancelHandler()

   
  return (

    <div>
        <Card
        style={{
          border: "none ",
          borderRadius: "10px",
          marginLeft: "30%",
          marginRight: "30%",
          height: "60%",
          width: "40%",

          backgroundImage:
            "linear-gradient( 65.9deg,rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4%)",
          display: "flex",
          flexDirection: "column",
        }}
        className="shadow-lg p-3 "
      >
        <h2
          className="heading"
          style={{
            textAlign: "center",
            marginTop: "0.5%",
            fontWeight: "bolder",
          }}
        >
          <Badge bg="dark">TODO-LIST</Badge>
        </h2>
        
        <Card.Body style={{ display: "flex", flexDirection: "column" }}>
          <form >
            <label htmlFor="TaskDescription">Edit Task Description</label>
            <input
              type="text"
              placeholder="Enter Description..."
              id="TaskDescription"
              defaultValue={tasktoEdit.TaskDescription}
              
              onChange={props.HandleChange}
            />
            <Container>
              <Button className='save-btn' variant='success' type='button' onClick={()=>props.SaveHandler(tasktoEdit)}  >
                Save
              </Button>
              <Button
                className='cancel-btn'
                variant="danger"
                type="button"
                onClick={() =>props.CancelHandler()}
              >
                Cancel
              </Button>
            </Container>
          </form>
          </Card.Body>
          </Card>
          </div>
  )
}



