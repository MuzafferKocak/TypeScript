import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save"
import React from "react";

const AddTodoComp = () => {
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
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
        endIcon={<SaveIcon/>}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodoComp;
