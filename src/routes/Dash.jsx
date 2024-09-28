import axios from "axios";
import React from "react";

function Dash() {
  const handleCookie = async function () {
    const res = await axios.get(
      "https://cookies-uj9t.onrender.com/auth/refresh",
      {
        withCredentials: true,
      }
    );

    console.log(res);
  };
  return (
    <div>
      <button onClick={handleCookie}>get com</button>
    </div>
  );
}

export default Dash;
