import React from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
export default function TaskList(props) {
    //  const DeleteHandler=(index)=>{
        
    //     props.setTaskList(props.taskList.filter((task,i)=>{
    //         i!==index
    //         }))
    //  }
    
  return (
    <div>
      {props.taskList.map((data, index) => {
        return (
          <Card
          key={index}
            style={{
              border: "none ",
              borderRadius: "10px",
              marginLeft: "30%",
              marginRight: "30%",
              height: "60%",
              width: "60%",
              display: "flex",
              flexDirection: "column",
            }}
            className="shadow-lg p-3 "
          >
            <div>
              <h5><Badge bg="danger">Task Description is:</Badge> {data.TaskDescription}</h5>
              <Button variant="success">Edit</Button>
              <Button variant="danger" onClick={props.DeleteHandler}>Delete</Button>
              <Button variant="info" onClick=  {props.MoveUpHandler}>MoveUp</Button>
              <Button variant="warning">MoveDown</Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
