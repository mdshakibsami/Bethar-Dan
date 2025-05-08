import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import BMI from "../pages/BMI";
import DoctorsAndMedicine from "../pages/DoctorsAndMedicine";
import Ambulance from "../pages/Ambulance";
import HealthContents from "../pages/HealthContents";

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
    ],
  },
]);

export default router;
