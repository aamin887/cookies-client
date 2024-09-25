import axios from "axios";
import "./App.css";

import React, { useEffect, useState } from "react";

function App() {
  const [startTime, setStartTime] = useState(Date.now());
  const [scrollPosition, setScrollPosition] = useState(0);

  // get the cookies

  // Function to set a cookie on the server
  const setCookie = async () => {
    try {
      await axios.get("http://localhost:3000/set-cookie");
      console.log("Cookie set successfully");
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.screenY);
    };

    window.addEventListener("scroll", handleScroll);

    setCookie();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateServer = async () => {
      try {
        await axios.post("https://cookies-uj9t.onrender.com/update-tracking", {
          timeSpent: Date.now - startTime,
          scrollPosition: scrollPosition,
        });
      } catch (error) {
        console.log(error);
      }
    };

    const intervalId = setInterval(updateServer, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime, scrollPosition]);

  return (
    <div className="App">
      <div>
        <p>Time spent on this site: {startTime}</p>
        <p>Scroll position: {scrollPosition}</p>
      </div>
    </div>
  );
}

export default App;
