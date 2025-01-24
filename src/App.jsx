import React from "react";
import styles from "./App.module.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Toaster } from "react-hot-toast";
import Header from './components/Header';

function App() {

  return (
    <div className={styles.App}>
      <Toaster position="top-center" />
      <RouterProvider router={router}></RouterProvider>
      <Header />
    </div>
  )
}

export default App
