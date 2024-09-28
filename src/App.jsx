import axios from "axios";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "test01@gmail.com",
    password: "1234",
  });

  const handleSubmit = async function (e) {
    e.preventDefault();
    const loginRes = await axios.post(
      "https://cookies-uj9t.onrender.com/auth/login",
      { email, password },
      { withCredentials: true }
    );

    console.log(loginRes);
  };

  const handleChange = function (e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const { email, password } = formData;

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
