import axios from "axios";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [startTime, setStartTime] = useState(Date.now());
  const [scrollPosition, setScrollPosition] = useState(0);

  // get the cookies
  const updateServer = async () => {
    try {
      const res = await axios.post(
        "https://cookies-uj9t.onrender.com/update-tracking",
        {
          timeSpent: Date.now() - startTime,
          scrollPosition: scrollPosition,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to set a cookie on the server
  const setCookie = async () => {
    try {
      await axios.get("https://cookies-uj9t.onrender.com/set-cookie", {
        withCredentials: true,
      });
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

    updateServer();
    setCookie();
  }, []);


  return (
    <div className="App">
      <div>
        <button onClick={updateServer}>set cookies</button>
        <p>Time spent on this site: {startTime}</p>
        <p>Scroll position: {scrollPosition}</p>
      </div>
    </div>
  );
}

export default App;
