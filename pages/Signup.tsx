import { Link } from 'react-router-dom';
import { useState } from 'react';
import { logConsoleEvent } from '../utils/consoleLogger';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      logConsoleEvent('ACT', 'Validation failed: passwords do not match');
      setStatus('Passwords do not match.');
      return;
    }
    logConsoleEvent('REQ', 'POST /api/auth/register', { name: form.name, email: form.email });
    try {
      const res = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        logConsoleEvent('RES', `HTTP ${res.status} - Registration failed`, { status: res.status });
        setStatus('Registration failed. Please check your information.');
      } else {
        const data = await res.json().catch(() => ({}));
        logConsoleEvent('RES', 'HTTP 201 - User registered successfully', data);
        setStatus('Account created successfully. You can now log in.');
      }
    } catch (err) {
      logConsoleEvent('SYS', 'Network connection refused at http://localhost:3000/signup', String(err));
      setStatus('Could not connect to the server.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-foreground selection:text-background font-sans">
      {/* Top Header */}
      <header className="w-full border-b border-border bg-background">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-sm">
          <Link to="/" className="text-foreground hover:opacity-80 flex items-baseline gap-2">
            <span className="font-serif text-xl font-normal">Null-Room</span>
          </Link>
          <Link to="/" className="text-foreground-secondary hover:text-foreground">
            &larr; Back to home
          </Link>
        </div>
      </header>

      {/* Main Signup Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md border border-border bg-card">
          
          {/* Card Header */}
          <div className="p-6 sm:p-8 pb-0">
            <h1 className="font-serif text-3xl font-normal text-foreground">
              Create an account
            </h1>
            <p className="text-sm text-foreground-secondary mt-1">
              Sign up to start rooms, invite peers, and save your preferences.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleCreate} className="p-6 sm:p-8 flex flex-col gap-4">
            
            {/* Status Notice (strictly monochrome, no red) */}
            {status && (
              <div className="p-3 border border-border bg-secondary/50 text-xs font-mono text-foreground flex items-center justify-between">
                <span>{status}</span>
                <button
                  type="button"
                  onClick={() => setStatus(null)}
                  className="text-muted-foreground hover:text-foreground cursor-pointer ml-2"
                >
                  &times;
                </button>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-foreground-secondary">
                Your name or handle
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Alex Chen"
                className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-border-strong transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-foreground-secondary">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-border-strong transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-xs font-medium text-foreground-secondary">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-border-strong transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirmPassword" className="text-xs font-medium text-foreground-secondary">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-border-strong transition-colors"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="submit"
                className="w-full bg-foreground text-background font-medium text-sm py-2.5 border border-foreground hover:bg-foreground/90 transition-colors cursor-pointer"
              >
                Create account
              </button>
            </div>

            {/* Bottom link */}
            <div className="pt-4 border-t border-border text-xs text-muted-foreground text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-foreground hover:underline font-medium">
                Log in
              </Link>
            </div>

          </form>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border py-4 bg-background">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-muted-foreground">
          <span>Null-Room Registration</span>
          <span>MIT Licensed</span>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
