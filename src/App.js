import "./styles.css";
import { Button } from "reactstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateSurvey from "./components/CreateSurvey";
import TakeSurvey from "./components/TakeSurvey";

function App() {
  return (
    <Router>
      <div className="App">
        <h1> 🐯 Survey Tiger</h1>
        <Switch>
          <Route path="/create/:surveyId">
            <CreateSurvey />
          </Route>
          <Route path="/take">
            <TakeSurvey />
          </Route>
          <Route path="/">
            <Link to="/create/123">
              <Button className="survey-main-btn">Create Survey</Button>
            </Link>
            <Link to="/take">
              <Button className="survey-main-btn">Take Survey</Button>
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
