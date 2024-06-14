import "./tailwind.css";
import TextField from "@mui/material/TextField/index.js";
import Autocomplete from "@mui/material/Autocomplete/index.js";
import { useState } from "react";
import Button from "@mui/material/Button/index.js";

const suggestedName = [{ label: "Haoran" }, { label: "SHRmsks" }];
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const namehandeler = (e) => {
    setUsername(e.target.value);
  };
  const passhandeler = (e) => {
    setPassword(e.target.value);
  };
  const autohandler = (event, newValue) => {
    if (newValue !== null) {
      setUsername(newValue);
    } else {
      setUsername("");
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Username: </label>
        <Autocomplete freeSolo options={suggestedName.map((option) => option.label)} value={username} type="text" label="your username" id="username" onChange={autohandler} renderInput={({ params }) => <TextField {...params} label="your username" onChange={namehandeler} />} />

        <label htmlFor="password">Password: </label>
        <TextField type="password" value={password} variant="outlined" label="your password" onChange={passhandeler} />
        <Button variant="outlined" value="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
