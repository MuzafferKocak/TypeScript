import { Grid2, Typography } from "@mui/material";
import React from "react";
import TodoListItem from "./TodoListItem";

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
        size={{ xs: 12, sm: 8, md: 6 }}
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "1rem",
        }}
      >
        <Typography>In Progress Todos</Typography>
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
          <Typography color="error">No Progress Todos!</Typography>
        )}
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 8, md: 6 }}
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid green",
          borderRadius: "1rem",
        }}
      >
        <Typography>Completed Todos</Typography>
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
          <Typography color="error">No Completed Todos!</Typography>
        )}
      </Grid2>
    </Grid2>
  );
};

export default TodoList;
