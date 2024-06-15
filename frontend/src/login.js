import "./tailwind.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";


function LoginPage() {

const suggestedName = [{ label: "Haoran" }, { label: "SHRmsks" }];
  return (
    <div>
      <form>
        <div className="grid max-grid-cols-1 gap-y-[1vh]  2xl:max-w-[40%] xl:max-w-[50%] lg:max-w-[60%]">
        <div className="flex items-center flex-nowrap gap-x-[10px]">
        <label htmlFor="username">Username: </label>
        <Autocomplete freeSolo options={suggestedName.map((option) => option.label)}
          sx={{width: '20%', maxWidth:'400px', minWidth:"80px",
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{borderColor: "green"}}}
  
        
        
        
        renderInput={(params) => <TextField {...params} label="Your username" />}
 /></div>
   <div className="flex items-center flex-nowrap gap-x-[10px]">
        <label htmlFor="password">Password: </label>
        <TextField type="password" variant="outlined" label="your password" />
</div>
        <Button sx={{width:'80px', maxWidth:'20%'}} variant="outlined" value="submit">
          Submit
        </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
