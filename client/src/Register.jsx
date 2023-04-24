import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <div className="w-64 mx-auto mb-12">
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className=" block  w-full rounded-sm p-2 mb-2 boarder"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="password"
          className=" block  w-full rounded-sm p-2 mb-2 boarder"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          Регистрация
        </button>
      </div>
    </div>
  );
}

export default Register;
