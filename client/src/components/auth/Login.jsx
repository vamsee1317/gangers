import React from 'react';

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FF9933] via-white to-[#138808]">
      <div className="backdrop-blur-md bg-white/20 border border-black shadow-xl shadow-black/20 rounded-2xl p-8 max-w-md w-full text-white">
        <div className="flex flex-col items-center">
          <img
            className="w-12 h-12 mb-4"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          <h1 className="text-2xl font-bold mb-2 text-black">Gangers Login Page</h1>
          <p className="text-sm text-black/80 mb-6">Sign in to your account</p>
        </div>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-white/30 text-black placeholder-black/70 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-white/30 text-black placeholder-black/70 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm text-black/80">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="accent-black" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="hover:underline text-black">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-black hover:bg-black/90 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign in
          </button>
          <p className="text-center text-sm text-black/80">
            Don’t have an account yet?{' '}
            <a href="#" className="text-black font-medium hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
