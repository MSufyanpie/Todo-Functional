import React from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
import './TaskList.css'
import Todo from "./Todo";
export default function TaskList(props) {
  const isEditing=props.isEditing
  return (
    
    <div>
     
      {props.taskList.map((data, index) => {
        const handleDelete = () => props.DeleteHandler(index);
        const handleMoveup = () => props.MoveUpHandler(index);
        const handleMovedown = () => props.MoveDownHandler(index);
        const handleFirstMoveup = () => props.FirstMoveUpHandler(index);
        const handleLastMovedown = () => props.LastMoveDownHandler(index);
        const handleEdit=()=>props.EditHandler(index);
        
        return (
          
        
          <Card
            key={index}
            style={{
              border: "none ",
              borderRadius: "10px",
              marginLeft: "30%",
              marginRight: "30%",
              marginTop:'4%',
              height: "60%",
              width: "40%",
              display: "flex",
              flexDirection: "column",
            }}
            className="shadow-lg p-3 "
          >
            <div>
              <h5>
                <Badge bg="light">Task Description is:</Badge>{" "}
                {data.TaskDescription}
              </h5>
            </div>
            {index == 0 ? (
              <Container>
                <Button className="edit-btn" variant="success" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button
                  className="delete-btn"
                  variant="danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
                <Button
                  className="moveup-btn"
                  variant="info"
                  onClick={() => handleFirstMoveup(index)}
                >
                  MoveUp
                </Button>
                <Button
                  className="movedown-btn"
                  variant="warning"
                  onClick={() => handleMovedown(index)}
                >
                  MoveDown
                </Button>
              </Container>
            ) : index !== 0 && index !== props.taskList.length - 1 ? (
              <Container>
                <Button className="edit-btn" variant="success" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button
                  className="delete-btn"
                  variant="danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
                <Button
                  className="moveup-btn"
                  variant="info"
                  onClick={() => handleMoveup(index)}
                >
                  MoveUp
                </Button>
                <Button
                  className="movedown-btn"
                  variant="warning"
                  onClick={() => handleMovedown(index)}
                >
                  MoveDown
                </Button>
              </Container>
            ) : (
              <></>
            )}
            {index == props.taskList.length - 1 &&
            props.taskList.length !== 1 ? (
              <Container>
                <Button className="edit-btn" variant="success" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button
                  className="delete-btn"
                  variant="danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
                <Button
                  className="moveup-btn"
                  variant="info"
                  onClick={() => handleMoveup(index)}
                >
                  MoveUp
                </Button>

                <Button
                  className="movedown-btn"
                  variant="warning"
                  onClick={() => {
                    handleLastMovedown(index);
                  }}
                >
                  MoveDown
                </Button>
              </Container>
            ) : (
              <></>
            )}
          </Card>
        );
      })}
      
    </div>
    
    
  );
}
