import { Box, VStack} from "@chakra-ui/layout";
import Navbar from './components/Navbar'
import About from "./components/About";
import Skill from "./components/Skill"
import Profile from "./components/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Box
        w="100%"
        h="6px"
        bgGradient="linear(to-r, #6ab589, #f9f9f9,#dfb795)"
      />
      <VStack p={5}>
      <Navbar/>
      
      <Switch>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/skill">
            <Skill />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
    </VStack>
    </Router>
  );
}

export default App;
