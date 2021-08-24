import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ProtectedRoute from "./Components/routes/ProtectedRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./Components/Navbar/Header";
import Home from "./Components/home/Home";
import Hotels from "./Components/hotels/Hotels";
import Contact from "./Components/contact/Contact";
import "./scss/style.scss";
import Logout from "./Components/auth/Logout";
import AllHotels from "./Components/hotels/AllHotels";

// Admin
import Admin from "./Components/admin/Admin";
import AdminDashboard from "./Components/admin/AdminDashboard";
import Messages from "./Components/admin/messages/Messages";
import MessagesDetails from "./Components/admin/messages/MessageDetail";
import Enquiries from "./Components/admin/enquiries/EnquiriesFetch";
import EnquiriesDetails from "./Components/admin/enquiries/EnquiryDetail";
import Establishments from "./Components/admin/hotels/Establishments";
import AdminEstablishments from "./Components/admin/hotels/AdminHotels";
import EstablishmentsPatch from "./Components/admin/hotels/EstablishmentsPatch";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/allhotels" exact component={AllHotels} />
          <Route path="/hotels" exact component={Hotels} />
          <Route path="/hotels/:id" exact component={Hotels} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/logout" exact component={Logout} />
          <ProtectedRoute
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />
          <ProtectedRoute
            path="/admin/dashboard/enquiries"
            exact
            component={Enquiries}
          />
          <ProtectedRoute
            path="/admin/dashboard/enquiries/detail"
            exact
            component={EnquiriesDetails}
          />
          <ProtectedRoute
            path="/admin/dashboard/enquiries/detail/:id"
            exact
            component={EnquiriesDetails}
          />
          <ProtectedRoute
            path="/admin/dashboard/establishments/new"
            exact
            component={Establishments}
          />
          <ProtectedRoute
            path="/admin/dashboard/establishments/update"
            exact
            component={AdminEstablishments}
          />
          <ProtectedRoute
            path="/admin/dashboard/establishments/patch/edit/:id"
            exact
            component={EstablishmentsPatch}
          />
          <ProtectedRoute
            path="/admin/dashboard/messages"
            exact
            component={Messages}
          />
          <ProtectedRoute
            path="/admin/dashboard/messages/detail"
            exact
            component={MessagesDetails}
          />
          <ProtectedRoute
            path="/admin/dashboard/messages/detail/:id"
            exact
            component={MessagesDetails}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/holidaze" exact component={Home} />
          <Redirect to="/holidaze" />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
