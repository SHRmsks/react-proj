import "./tailwind.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useState, useMemo, useEffect } from "react";
function LoginPage() {
  const [suggestedName, setSuggestedName] = useState([]);
  const [username, setUsername] = useState("");

  const savedName = useMemo(() => {
    return JSON.stringify(username !== "" ? { name: username } : null);
  }, [username]);

  useEffect(() => {
    console.log(suggestedName);
  }, [suggestedName]);
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
            <Autocomplete
              freeSolo
              options={suggestedName.map((option) => option.name)}
              sx={{ width: "80%", maxWidth: "400px", minWidth: "80px", "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "green" } }}
              onInputChange={(e, newval) => {
                setUsername(newval);
              }}
              onBlur={() => {
                if (username && !suggestedName.includes(username)) {
                  setSuggestedName([{ name: username }, ...suggestedName]);
                }
              }}
              renderInput={(params) => <TextField {...params} label="username" placeholder="type your username" />}
            />
          </div>
          <div className="flex items-center flex-nowrap gap-x-[10px]">
            <label htmlFor="password">Password: </label>
            <TextField sx={{ width: "80%", maxWidth: "400px", minWidth: "80px", "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "green" } }} type="password" variant="outlined" label="password" placeholder="type your password" />
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
