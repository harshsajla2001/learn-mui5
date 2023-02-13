import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/system";
import Add from "./components/Add";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";
import axios from "axios";

function App() {
  const [searchDrink, setSearchdrink] = useState([])
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const getDrinksBySearch = (search) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${search}`)
      .then(res => {
        setSearchdrink(res.data.drinks);
      })
      .catch(error => console.log(error));
  }
 
 




  return ( 
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} getDrinksBySearch={getDrinksBySearch} setSearchdrink={setSearchdrink} searchDrink={searchDrink}/>
          <Feed searchDrink={searchDrink}/>
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
