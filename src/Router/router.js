
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Signup, Signin, Main, UserDetail} from "../pages";
import {Navbar, Footer} from "../components";


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
      <Footer />
    </Router>
  );
}

export default AppRouter;