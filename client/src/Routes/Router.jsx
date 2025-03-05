import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Shared/Profile";
import Announcement from "../Pages/Dashboard/Shared/Announcement";
import MakePayments from "../Pages/Dashboard/MemberPages/MakePayments";
import PaymentsHistory from "../Pages/Dashboard/MemberPages/PaymentsHistory";
import CheckOutPage from "../Pages/Dashboard/CheckOutPage";
import ManageUsers from "../Pages/Dashboard/AdminPages/ManageUsers";
import ManageAnnouncements from "../Pages/Dashboard/AdminPages/ManageAnnouncements";
import AllAgreementsRequest from "../Pages/Dashboard/AdminPages/AllAgreementsRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartment",
        element: <Apartment></Apartment>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "announcement",
        element: <Announcement></Announcement>,
      },

      // Member Route
      {
        path: "make-payment",
        element: <MakePayments></MakePayments>,
      },
      {
        path: "payment-history",
        element: <PaymentsHistory></PaymentsHistory>,
      },
      {
        path: "check-out",
        element: <CheckOutPage></CheckOutPage>,
      },

      // Admin Routes
      {
        path: "manage-member",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manage-announcement",
        element: <ManageAnnouncements></ManageAnnouncements>,
      },
      {
        path: "agreement-requests",
        element: <AllAgreementsRequest></AllAgreementsRequest>
      },
    ],
  },
]);

export default router;
