import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Navbar/Header";
import Home from "./Components/home/Home";
import Hotels from "./Components/hotels/Hotels";
import Admin from "./Components/admin/Admin";
import Contact from "./Components/contact/Contact";
import AdminDashboard from "./Components/admin/AdminDashboard";

import "./scss/style.scss";
import Establishments from "./Components/admin/Establishments";
import Messages from "./Components/admin/Messages";
import Enquiries from "./Components/admin/EnquiriesFetch";
import Logout from "./Components/admin/Logout";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/hotels/:id" exact component={Hotels} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/admin/dashboard" exact component={AdminDashboard} />
        <Route path="/admin/dashboard/enquiries" exact component={Enquiries} />
        <Route
          path="/admin/dashboard/establishments"
          exact
          component={Establishments}
        />
        <Route path="/admin/dashboard/messages" exact component={Messages} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
