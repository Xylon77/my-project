

import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === "") {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    if (password === "") {
      setError("Password required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    console.log("Login submitted", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-slate-950 text-slate-950 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/90 px-8 py-10 shadow-2xl shadow-black/20">
        <h1 className="mb-6 text-3xl font-semibold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-orange-500 px-4 py-3 text-white transition hover:bg-orange-600"
          >
            Login
          </button>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <p className="text-sm text-slate-400 text-center mt-4">
  Don't have an account?{" "}
  <Link to="/signup" className="text-orange-400 hover:underline font-medium">
    Sign up here
  </Link>
</p>

        </form>
      </div>
    </div>
  );
};

export default Login;
