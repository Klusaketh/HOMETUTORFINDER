// Landing.jsx
// React functional component using Tailwind CSS
// Assumes Tailwind is configured in the project.
// Drop this file into src/pages or src/components and import where needed.

import React from "react";
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0891b2] via-[#06b6d4] to-[#0e7490] text-white">
      {/* NAVBAR */}
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-sm bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            {/* simple logo mark */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M3 12c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 12c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            </svg>
          </div>
          <span className="font-bold text-lg">HomeTutor</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="hover:text-white/80 transition-colors text-sm">Home</a>
          <a href="/courses" className="hover:text-white/80 transition-colors text-sm">Courses</a>
          <a href="/teachers" className="hover:text-white/80 transition-colors text-sm">Teachers Panel</a>
          <a href="/about" className="hover:text-white/80 transition-colors text-sm">About Us</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="/login" className="bg-white text-cyan-600 px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">Login</a>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text + CTAs */}
          <section className="pt-12">
            <p className="text-xs uppercase tracking-widest text-white/70 font-semibold">Premium Online Learning</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
              Learn With Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Expert Tutors</span>!
            </h1>
            <p className="mt-6 max-w-xl text-white/85 text-lg leading-relaxed">
              Connect with experienced tutors, schedule live tuition slots, and learn at your own pace. Our intelligent matching system ensures the perfect fit for your learning goals.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="/get-started"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-7 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all"
              >
                Learn More
              </a>
              <a
                href="/get-tuition"
                className="inline-flex items-center gap-2 border-2 border-white/40 px-7 py-3 rounded-full text-white font-semibold hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Get Tuition
              </a>
            </div>

            {/* small slider dots */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="w-2 h-2 rounded-full bg-white/50" />
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="text-sm text-white/75 font-medium">Trusted by 50k+ learners worldwide</div>
            </div>

            {/* Key benefits row */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <div className="text-xs text-white/70 font-medium">Verified Tutors</div>
                <div className="font-bold text-sm mt-1">Background Checked</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <div className="text-xs text-white/70 font-medium">Flexible</div>
                <div className="font-bold text-sm mt-1">Anytime Schedule</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <div className="text-xs text-white/70 font-medium">Secure</div>
                <div className="font-bold text-sm mt-1">Safe Booking</div>
              </div>
            </div>
          </section>

          {/* Right: Illustration card */}
          <section className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* illustration placeholder - vector composition */}
              <div className="flex items-center gap-6">
                <div className="w-2/5">
                  <div className="w-full h-40 rounded-2xl bg-white/15 flex items-center justify-center">
                    {/* student avatar / laptop */}
                    <svg viewBox="0 0 120 80" className="w-28 h-20">
                      <rect rx="10" width="120" height="80" fill="white" opacity="0.1" />
                      <rect x="10" y="10" width="100" height="25" rx="4" fill="white" opacity="0.12" />
                      <circle cx="30" cy="55" r="10" fill="white" opacity="0.1" />
                      <rect x="45" y="45" width="60" height="15" rx="4" fill="white" opacity="0.08" />
                    </svg>
                  </div>
                </div>

                <div className="w-3/5">
                  <div className="text-xs text-white/70 font-semibold uppercase tracking-wider">Live Class</div>
                  <div className="mt-2 font-bold text-xl">Maths with Expert Tutor</div>
                  <div className="mt-3 text-white/80 text-sm leading-relaxed">
                    Secure live sessions with small batches, recorded replays for practice.
                  </div>

                  <div className="mt-4 flex gap-3">
                    <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">Live • 60 mins</div>
                    <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">₹250/hour</div>
                  </div>

                </div>
              </div>

              {/* small stats bar */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="bg-white/10 p-4 rounded-xl text-center border border-white/10">
                  <div className="text-xs text-white/70 font-medium">Students</div>
                  <div className="font-bold text-2xl mt-1">50k+</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl text-center border border-white/10">
                  <div className="text-xs text-white/70 font-medium">Sessions</div>
                  <div className="font-bold text-2xl mt-1">180k+</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl text-center border border-white/10">
                  <div className="text-xs text-white/70 font-medium">Rating</div>
                  <div className="font-bold text-2xl mt-1">4.9/5</div>
                </div>
              </div>
            </div>

            {/* Decorative shape */}
            <div className="absolute -right-8 top-6 w-48 h-48 rounded-2xl bg-white/5 border border-white/10 rotate-6" />
          </section>
        </div>
      </main>

      {/* WAVE DIVIDER (white) */}
      <div className="-mt-6">
        <svg viewBox="0 0 1440 120" className="w-full block" preserveAspectRatio="none">
          <path d="M0,32 C360,160 1080,0 1440,96 L1440 120 L0 120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* FEATURES (white background section) */}
      <section className="bg-white text-slate-800 pb-20">
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Expertly matched tutors, flexible scheduling, and a transparent booking process that puts both students and tutors in control.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Matching", text: "AI-powered tutor matching based on your learning style and goals." },
              { title: "Live Sessions", text: "One-to-one or small group sessions with interactive tools and chat." },
              { title: "Recorded Classes", text: "Access all sessions anytime to review, practice and prepare." },
              { title: "Progress Tracking", text: "Detailed analytics to monitor progress and identify improvement areas." }
            ].map((f, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-cyan-100">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500 text-white mb-4">
                  {/* icon */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 19h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <h3 className="text-2xl font-bold">Ready to start learning?</h3>
              <p className="mt-2 text-white/90">Join thousands of students and find your perfect tutor today.</p>
            </div>
            <div className="flex gap-4">
              <a href="/register" className="px-6 py-3 rounded-full bg-white text-cyan-600 font-bold shadow-md hover:shadow-lg transition-shadow whitespace-nowrap">Get Started</a>
              <a href="/contact" className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors whitespace-nowrap">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="font-bold text-white">HomeTutor</div>
              <div className="text-xs text-gray-500">© {new Date().getFullYear()} HomeTutor. All rights reserved.</div>
            </div>
          </div>

          <div className="text-sm text-gray-500">Made with ❤️ • Privacy • Terms</div>
        </div>
      </footer>
    </div>
  );
}
