import React from "react";
import Header from "./Header";
import Week from "./Week";
import Reminders from "./Reminders";
import Footer from "./Footer";
import "../style.css"; // Importing styles

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Week />
        <Reminders />
      </div>
      <Footer />
    </div>
  );
};

export default App;
