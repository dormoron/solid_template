import { lazy } from "solid-js";
import { Navigate, useRoutes } from "@solidjs/router";
import Home from "@/views/home/Home";
import NotFound from "@/views/error/NotFound";

const router: any = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default useRoutes(router);
