export default function Login() {
return (
<div className="min-h-screen flex items-center justify-center bg-[var(--brand-bg)] px-4">
<div className="card w-full max-w-md">
<div className="card-body">
<h2 className="text-3xl font-bold text-center mb-6 text-[var(--brand-primary)]">
Log in
</h2>
<p className="text-center text-[var(--brand-muted)] mb-8">
Enter your details to continue
</p>

text
      <form className="space-y-5">
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="email@email.com"
            className="input"
          />
        </div>

        <div>
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="- - - - - - - - "
            className="input"
          />
        </div>

        <div className="mt-6 flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <p className="text-sm text-[var(--brand-muted)]">
            I agree with Terms and Conditions and Privacy Policy
          </p>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Log in
        </button>
      </form>

      <p className="text-center text-sm text-[var(--brand-muted)] mt-6">
        Don’t have an account?{" "}
        <a href="/signup" className="link font-semibold">
          Sign up
        </a>
      </p>
    </div>
  </div>
</div>
);
}