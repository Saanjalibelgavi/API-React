import React, { useState } from "react";

const Signup: React.FC = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirm, setConfirm] = useState("");
const [agree, setAgree] = useState(true);
const [error, setError] = useState("");

function handleSubmit(e: React.FormEvent) {
e.preventDefault();
setError("");

text
if (!name || !email || !username || !password || !confirm) {
  setError("Please fill all fields.");
  return;
}
if (password !== confirm) {
  setError("Passwords do not match.");
  return;
}
if (!agree) {
  setError("Please agree to the Terms and Privacy Policy.");
  return;
}

// Demo: mark as authenticated and go to products
localStorage.setItem("auth", "true");
window.location.href = "/products";
}

return (
<div className="min-h-screen flex items-center justify-center bg-[var(--brand-bg)] px-4">
<div className="card w-full max-w-xl">
<div className="card-body">
{/* Heading */}
<h2 className="text-3xl font-bold text-center mb-6" style={{ color: "var(--brand-primary)" }}>
Sign up
</h2>
<p className="text-center mb-8" style={{ color: "var(--brand-muted)" }}>
Enter your details to continue
</p>

text
      {/* Form */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            placeholder="Name Surname"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="email@email.com"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="label">Username</label>
          <input
            type="text"
            placeholder="Create your username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="label">Create your password</label>
          <input
            type="password"
            placeholder="- - - - - - - - "
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="label">Repeat your password</label>
          <input
            type="password"
            placeholder="- - - - - - - - "
            className="input"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <label className="mt-2 flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border"
            style={{ accentColor: "var(--brand-accent)" }}
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span className="text-sm" style={{ color: "var(--brand-muted)" }}>
            I agree with Terms and Conditions and Privacy Policy
          </span>
        </label>

        {error && <p className="text-sm error-text">{error}</p>}

        <button type="submit" className="btn btn-primary w-full h-11">
          Sign up
        </button>
      </form>

      <p className="text-center text-sm mt-6" style={{ color: "var(--brand-muted)" }}>
        You already have an account?{" "}
        <a href="/login" className="link font-semibold">
          Log in
        </a>
      </p>
    </div>
  </div>
</div>
);
};

export default Signup;