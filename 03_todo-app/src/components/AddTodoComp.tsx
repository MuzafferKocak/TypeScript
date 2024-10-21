import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";

//! 1.Weg
// const AddTodoComp = ({addTodo}:{addTodo:(task:string)=>Promise<void>}) => {
//   const [task, setTask] = useState(""); //* Type Inference

//   const handleClick = () => {
//     console.log(task);
//     addTodo(task)
//     setTask("");
//   };

//   return (
//     <Box
//       sx={{
//         display: { xs: "block", sm: "flex" },
//         justifyContent: { xs: "flex-start", sm: "center" },
//         m: { xs: "120px", sm: "80px" },
//       }}
//     >
//       <TextField
//         id="outlined-basic"
//         label="New Todo"
//         color="success"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
//         variant="outlined"
//       />
//       <Button
//         variant="contained"
//         color="success"
//         sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
//         endIcon={<SaveIcon />}
//         onClick={handleClick}
//         disabled={!task.trim()}
//       >
//         Save Todo
//       </Button>
//     </Box>
//   );
// };

//! 2.Weg
interface IAddTodoComp {
  // addTodo:(task:string)=>Promise<void>
  addTodo: AddFn;
}
const AddTodoComp = ({ addTodo }: IAddTodoComp) => {
  const [task, setTask] = useState(""); //* Type Inference

  const handleClick = () => {
    console.log(task);
    addTodo(task);
    setTask("");
  };

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: "120px", sm: "80px" },
      }}
    >
      <TextField
        id="outlined-basic"
        label="New Todo"
        color="success"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
        endIcon={<SaveIcon />}
        onClick={handleClick}
        disabled={!task.trim()}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodoComp;
