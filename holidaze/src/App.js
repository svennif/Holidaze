import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Navbar/Header";
import Home from "./Components/home/Home";
import Admin from "./Components/admin/Admin";
import Contact from "./Components/contact/Contact";

import "./scss/style.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
