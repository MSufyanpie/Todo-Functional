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
          marginTop:'1%',
          backgroundImage:
            "linear-gradient( #b6fbff, #83a4d4)",
          flexDirection: "column",
          
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)', // Adding a subtle shadow
          transition: 'transform 0.2s',
        }}
        className="shadow-lg p-3 "
      >
         <Card.Title
          style={{
            fontSize: '1.5rem',
            
            
          }}
        >
        <h2
          className="heading"
          style={{
            textAlign: "center",
            
            fontWeight: "bolder",
          }}
        >
          <Badge style={{
            boxShadow: '0 0 5px #c20d0d',
          }} bg="danger">TODO-LIST</Badge>
        </h2>
        </Card.Title>
        <Card.Body style={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <label style={{textAlign:'center'}}
             htmlFor="TaskDescription">Enter Task Description</label><br/> */}
            <input
              type="text"
              placeholder="Enter Task Description..."
              id="TaskDescription"
              {...register("TaskDescription")}
            />
            <Container>
              <Button className="addtask-btn rounded-pill" type="submit">
                Add Task
              </Button>
              <Button
                className="reset-btn rounded-pill"
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
