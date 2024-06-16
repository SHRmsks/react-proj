import "./tailwind.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useState, useEffect, useRef } from "react";
function LoginPage() {
  const suggestedName = [{ label: "Haoran" }, { label: "SHRmsks" }];
  // const [username, setUsername] = useState(suggestedName);
  // useEffect(() => {
  //   const savedName = JSON.stringfy();
  // }, [username]);

  return (
    <div>
      <form>
        <div
          className="grid max-grid-cols-1 gap-y-[4vh] 2xl:max-w-[30vw] xl:max-w-[35vw] lg:max-w-[40vw] 
        md:max-w-[40vw] sm: max-w-[50vw] min-w-[10vw]"
        >
          <h1 className="text-center">Please Login First</h1>
          <div className="flex items-center flex-nowrap gap-x-[10px]">
            <label htmlFor="username">Username: </label>
            <Autocomplete freeSolo options={suggestedName.map((option) => option.label)} sx={{ width: "100%", maxWidth: "400px", minWidth: "80px", "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "green" } }} renderInput={(params) => <TextField {...params} label="username" placeholder="type your username" />} />
          </div>
          <div className="flex items-center flex-nowrap gap-x-[10px]">
            <label htmlFor="password">Password: </label>
            <TextField sx={{ width: "100%", maxWidth: "400px", minWidth: "80px", "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "green" } }} type="password" variant="outlined" label="password" placeholder="type your password" />
          </div>
          <div className="flex justify-center">
            <Button sx={{ width: "80px", maxWidth: "20%" }} variant="outlined" value="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
