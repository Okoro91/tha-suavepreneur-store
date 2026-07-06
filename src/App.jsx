import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
