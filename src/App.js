import React, { createContext, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import AppointmentList from "./Components/Appointment/AppointmentList/AppointmentList";
import Review from "./Components/Appointment/Review/Review";
import Admin from "./Components/Admin/Admin/Admin";
import OrderList from "./Components/Admin/OrderList/OrderList";
import AddService from "./Components/Admin/AddService/AddService";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/Admin/ManageServices/ManageServices";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/appointmentList">
            <AppointmentList />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/manageService">
            <ManageServices />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
