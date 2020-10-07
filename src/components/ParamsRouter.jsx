import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import App from './App.jsx'

export default function ParamsRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/:productId" children={<App base={false} />} />
        <Route path="/" children={<App base={true} />}/>
      </Switch>
    </Router>
  );
}
