import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import { Route,Switch} from "react-router-dom";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import SingleProjectPage from "./Pages/SingleProjectPage/SingleProjectPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" >
        <HomePage/>
      </Route>
      <Route exact path="/about" >
        <AboutPage/>
      </Route>
      <Route exact path="/projects" >
        <ProjectsPage/>
      </Route>
      <Route exact path="/projects/:id" >
        <SingleProjectPage/>
      </Route>



    </Switch>
  );
}

export default App;
