import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Badge, Button, Card, Container } from "react-bootstrap";
import "./Todo.css";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TaskList from "./TaskList";
import EditForm from "./EditForm";

const schema = yup
  .object()
  .shape({
    TaskDescription: yup.string().required(),
  })
  .required();
export default function Todo() {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const { isSubmitSuccessful, isSubmitted, isDirty } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const [taskList, setTaskList] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    const updatedList = [data, ...taskList];
    setTaskList(updatedList);
  };
  const DeleteHandler = (index) => {
    setTaskList(taskList.filter((task, i) => i !== index));
  };
  const MoveUpHandler = (index) => {
    const updatedTaskList = [...taskList];
    const temp = updatedTaskList[index];
    updatedTaskList[index] = updatedTaskList[index - 1];
    updatedTaskList[index - 1] = temp;
    setTaskList(updatedTaskList);
  };
  const MoveDownHandler = (index) => {
    const updatedTaskList = [...taskList];
    const temp = updatedTaskList[index];
    updatedTaskList[index] = updatedTaskList[index + 1];
    updatedTaskList[index + 1] = temp;
    setTaskList(updatedTaskList);
  };
  const FirstMoveUpHandler = (index) => {
    const updatedTaskList = [...taskList];
    const temp = updatedTaskList[index];
    updatedTaskList.shift(temp);
    updatedTaskList.push(temp);
    setTaskList(updatedTaskList);
  };
  const LastMoveDownHandler = (index) => {
    const updatedTaskList = [...taskList];
    const temp = updatedTaskList[index];
    updatedTaskList.pop(temp);
    updatedTaskList.unshift(temp);
    setTaskList(updatedTaskList);
  };
  const[tasktoEdit,settasktoEdit]=useState("")
  const[editedTaskIndex,seteditedTaskIndex]=useState("")
  const[isEditing,setisEditing]=useState(false)

  const EditHandler=(index)=>{
    const listtoEdit=[...taskList]
    const tasktoEdit=listtoEdit[index]
    settasktoEdit(tasktoEdit)
    seteditedTaskIndex(index)
    console.log(tasktoEdit)
    setisEditing(true)
  }
  const HandleChange=(event)=>{
    const value=event.target.value;
  console.log(value)
    settasktoEdit((prevTask)=>({
     ...prevTask,
     TaskDescription:value
    }))
}
const SaveHandler=(updatedTask)=>{
    const index=editedTaskIndex
      const updatedTaskList = [...taskList];
      updatedTaskList[index] = updatedTask;

      setTaskList(updatedTaskList)
      setisEditing(false)
      settasktoEdit("")
      console.log(taskList)
      console.log(updatedTask)
      console.log(tasktoEdit)

  
}
const CancelHandler=()=>{
  setisEditing(false)
}

  return (
    <div>
      {isEditing?(<>
      <EditForm
      tasktoEdit={tasktoEdit}
      SaveHandler={SaveHandler}
      CancelHandler={CancelHandler}
      HandleChange={HandleChange}
      ></EditForm>
      </>):(<>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="TaskDescription">Enter Task Description</label>
            <input
              type="text"
              placeholder="Enter Description..."
              id="TaskDescription"
              {...register("TaskDescription")}
            />
            <Container>
              <Button className="addtask-btn" type="submit">
                Add Task
              </Button>
              <Button
                className="reset-btn"
                variant="dark"
                type="button"
                onClick={() => reset()}
              >
                Reset
              </Button>
            </Container>
          </form>

          {isSubmitted && isSubmitSuccessful == false ? (
            <p>Form is invalid</p>
          ) : (
            <></>
          )}
        </Card.Body>
      </Card>
      </>)}
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        DeleteHandler={DeleteHandler}
        MoveUpHandler={MoveUpHandler}
        MoveDownHandler={MoveDownHandler}
        FirstMoveUpHandler={FirstMoveUpHandler}
        LastMoveDownHandler={LastMoveDownHandler}
        EditHandler={EditHandler}
        isEditing={isEditing}
        tasktoEdit={tasktoEdit}
      />
    </div>
  );
}
