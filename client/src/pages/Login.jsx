import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Login = () => {
  const [form, setform] = useState({
    email : "",
    password : ""
  })

  const handleChange = (e)=>{
    setform({...form, [e.target.name] : e.target.value });
  }

  const handleSubmit = () => {
    
  }
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-foreground selection:text-background font-sans">
      <header className="w-full border-b border-border bg-background">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-sm">
          <Link
            to="/"
            className="text-foreground hover:opacity-80 flex items-baseline gap-2"
          >
            <span className="font-serif text-xl font-normal">Null-Room</span>
          </Link>
          <Link
            to="/"
            className="text-foreground-secondary hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md border border-border bg-card">
          <div className="p-6 sm:p-8 pb-0">
            <h1 className="font-serif text-3xl font-normal text-foreground">
              Log in to your account
            </h1>
            <p className="text-sm text-foreground-secondary mt-1">
              Enter your credentials to manage your rooms and invite links.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-4">
            <div className="p-3 border border-border bg-secondary/50 text-xs font-mono text-foreground flex items-center justify-between">
              <span>status</span>
              <button className="text-muted-foreground hover:text-foreground cursor-pointer ml-2"></button>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-foreground-secondary"
              >
                Email address
              </label>
              <input value= {form.email} placeholder="name@exmaple.com" 
              onChange={handleChange}
              name='email'
              type="email"
              required 
              
              className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-border-strong transition-colors" />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-foreground-secondary"
                >
                  Password
                </label>
                <a
                  href="#forgot"
                  className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
                >
                  Forgot password?
                </a>
              </div>

              <input value= {form.password} placeholder="••••••••" 
              onChange={handleChange}
              name="password"
              type="password"
              required
              className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-border-strong transition-colors" />
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <button type="submit" className="w-full bg-foreground text-background font-medium text-sm py-2.5 border border-foreground hover:bg-foreground/90 transition-colors cursor-pointer">
                Log in
              </button>

              <Link to="/room/demo" className="w-full">
                <button className="w-full border border-border bg-background text-foreground text-sm font-medium py-2 hover:bg-secondary transition-colors cursor-pointer">
                  Continue as guest
                </button>
              </Link>
            </div>

            <div className="pt-4 border-t border-border text-xs text-muted-foreground text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-foreground hover:underline font-medium"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </main>

      <footer className="w-full border-t border-border py-4 bg-background">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-muted-foreground">
          <span>Null-Room Authentication</span>
          <span>MIT Licensed</span>
        </div>
      </footer>
    </div>
  );
};

export default Login;
