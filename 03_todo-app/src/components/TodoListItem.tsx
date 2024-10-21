import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";

// interface ITodoListItem {
//   todo: ITodoType
//   deleteTodo: DeleteFn
//   toggleTodo: ToggleFn
// }
interface ITodoListItem extends ITodoListFn {
  todo: ITodoType;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <ListItem
      disableGutters 
      sx={{padding: "0.5rem", cursor: "pointer"}}
      secondaryAction={
        <IconButton aria-label="comment">
          <DeleteIcon sx={{"&:hover":{color: "red"}}} onClick={()=>deleteTodo(todo.id)} />
        </IconButton>
      }
    >
      <ListItemText sx={{wordWrap: "break-word"}} primary={todo.task} onClick={()=>toggleTodo(todo)} />
    </ListItem>
  );
};

export default TodoListItem;
