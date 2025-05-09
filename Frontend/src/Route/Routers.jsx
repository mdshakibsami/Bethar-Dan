import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import BMI from "../pages/BMI";
import DoctorsAndMedicine from "../pages/DoctorsAndMedicine";
import Ambulance from "../pages/Ambulance";
import HealthContents from "../pages/HealthContents";
import { Login } from "../components/Auth/Login";
import { Registration } from "../components/Auth/Registration";
import DoctorAdmin from "../pages/DoctorAdmin";
import DispensaryAdmin from "../pages/DispensaryAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/bmi",
        Component: BMI,
      },
      {
        path: "/doctor",
        Component: DoctorsAndMedicine,
      },
      {
        path: "/ambulance",
        Component: Ambulance,
      },
      {
        path: "/healthTips",
        Component: HealthContents,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Registration,

      },
      {
        path: "/doctorAdmin",
        Component: DoctorAdmin,

      },
      {
        path: "/dispensaryAdmin",
        Component: DispensaryAdmin,
      }
    ],
  },
]);

export default router;
