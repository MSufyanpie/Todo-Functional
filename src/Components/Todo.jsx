import React from 'react'
import { useForm } from "react-hook-form";
import {Badge,Card,Container,Button } from 'react-bootstrap'

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


export default function Todo() {
    const { register, control, handleSubmit, formState, reset } = useForm({
        mode: "all",
        resolver: yupResolver(schema),
      });
      const { isSubmitSuccessful, isSubmitted } = formState;
  return (
    <div>
    <h2
        className="heading"
        style={{ textAlign: "center", marginTop: "1%", fontWeight: "bolder" }}
      >
        <Badge bg="success">TODO-LIST</Badge>
      </h2>

      <Card
        style={{
          border: "none ",
          borderRadius: "10px",
          marginLeft: "30%",
          marginRight: "30%",
          height: "auto",
          width: "40%",
          overflow: "auto",
          backgroundImage:
            "linear-gradient( 65.9deg,rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4%)",
          display: "flex",
          flexDirection: "column",
        }}
        className="shadow-lg p-3 "
      >
        <Card.Body style={{ display: "flex", flexDirection: "column" }}>
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
            })}
          >
            <label htmlFor="FirstName">Enter Task Description</label>
            <input
              type="text"
              placeholder="Enter Description..."
              id="TaskDescription"
              {...register("TaskDescription")}
            />
            </form>
            <Container>
                <Button>Add Task</Button>
            </Container>
            </Card.Body>
            </Card>
    </div>
  )
}
