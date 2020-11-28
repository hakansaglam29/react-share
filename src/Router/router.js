
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Signup} from "../pages/Signup";
import {Signin} from "../pages/Signin";
import {Main} from "../pages/Main";
import {UserDetail} from "../pages/UserDetail";
import {Navbar} from "../components/Navbar";
import {StickyFooter} from "../components/Footer";


function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/user/:id" component={UserDetail} />
        <Route path="/" component={Main} />
      </Switch>
      <StickyFooter />
    </Router>
  );
}

export default AppRouter;