import { Grid2, Typography } from "@mui/material";
import React from "react";
import TodoListItem from "./TodoListItem";
import "./style.css";

// interface ITodoList {
//   todos: ITodoType[];
//   deleteTodo:DeleteFn
//   toggleTodo:ToggleFn
// }
interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
}
//! 3.Weg React.FC definition (FC => FunctionComponent)
const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo, toggleTodo }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <Grid2
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        mt: 1,
      }}
    >
      <Grid2
        size={{ xs: 12, sm: 8, md: 5 }}
        position={"relative"}
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.4rem",
        }}
      >
        <Typography
          className="title"
          color="secondary"
          align="center"
          variant="h4"
        >
          In Progress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Progress Todos!
          </Typography>
        )}
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 8, md: 5 }}
        position={"relative"}
        className="myscrool scrool-completed"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid green",
          borderRadius: "0.4rem",
        }}
      >
        <Typography
          className="title"
          sx={{ color: "green" }}
          align="center"
          variant="h4"
        >
          Completed Todos
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Completed Todos!
          </Typography>
        )}
      </Grid2>
    </Grid2>
  );
};

export default TodoList;
