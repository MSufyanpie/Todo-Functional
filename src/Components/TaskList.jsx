import React from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
import "./TaskList.css";
import Todo from "./Todo";
export default function TaskList(props) {
  const isEditing = props.isEditing;
  return (
    <div>
      {props.taskList.map((data, index) => {
        const handleDelete = () => props.DeleteHandler(index);
        const handleMoveup = () => props.MoveUpHandler(index);
        const handleMovedown = () => props.MoveDownHandler(index);
        const handleFirstMoveup = () => props.FirstMoveUpHandler(index);
        const handleLastMovedown = () => props.LastMoveDownHandler(index);
        const handleEdit = () => props.EditHandler(index);

        return (
          <div>
            <Card
              key={index}
              style={{
                border: "none ",
                borderRadius: "10px",
                marginLeft: "3%",
                marginRight: "30%",
                marginTop: "10%",
                height: "60%",
                width: "40%",
                display: "flex",
                flexDirection: "column",
                background: "linear-gradient(to right, #ffefba, #ffffff)",
              }}
              className="shadow-lg p-3 "
            >
              <div>
                <h5>
                  <Badge bg="secondary">Task Description:</Badge>
                </h5>
                <h5>{data.TaskDescription}</h5>
              </div>
              {index == 0 ? (
                <Container>
                  <Button
                    className="edit-btn rounded-pill"
                    variant="success"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="delete-btn rounded-pill"
                    variant="danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="moveup-btn btn btn-info rounded-pill"
                    // variant="info"
                    onClick={() => handleFirstMoveup(index)}
                  >
                    MoveUp
                  </Button>
                  <Button
                    className="movedown-btn rounded-pill"
                    variant="warning"
                    onClick={() => handleMovedown(index)}
                  >
                    MoveDown
                  </Button>
                </Container>
              ) : index !== 0 && index !== props.taskList.length - 1 ? (
                <Container>
                  <Button
                    className="edit-btn"
                    variant="success"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="delete-btn rounded-pill"
                    variant="danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="moveup-btn rounded-pill"
                    variant="info"
                    onClick={() => handleMoveup(index)}
                  >
                    MoveUp
                  </Button>
                  <Button
                    className="movedown-btn rounded-pill"
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
                  <Button
                    className="edit-btn rounded-pill"
                    variant="success"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="delete-btn rounded-pill"
                    variant="danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="moveup-btn rounded-pill"
                    variant="info"
                    onClick={() => handleMoveup(index)}
                  >
                    MoveUp
                  </Button>

                  <Button
                    className="movedown-btn rounded-pill"
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
          </div>
        );
      })}
    </div>
  );
}
