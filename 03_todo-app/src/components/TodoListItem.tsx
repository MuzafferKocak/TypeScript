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
      secondaryAction={
        <IconButton aria-label="comment">
          <DeleteIcon onClick={()=>deleteTodo(todo.id)} />
        </IconButton>
      }
    >
      <ListItemText primary={todo.task} onClick={()=>toggleTodo(todo)} />
    </ListItem>
  );
};

export default TodoListItem;
