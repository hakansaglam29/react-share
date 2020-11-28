
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Signup} from "../pages/Signup";
import {Signin} from "../pages/Signin";
import {Main} from "../pages/Main";
import {Navbar} from "../components/Navbar";
import {StickyFooter} from "../components/Footer";


function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <Route path="/" component={Main} />
      </Switch>
      <StickyFooter />
    </Router>
  );
}

export default AppRouter;