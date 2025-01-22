import React from "react";
import "./App.modular.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div className="App">
      <Toaster position="top-center" />
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
