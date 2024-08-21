import React from 'react'

const Home = () => {
  return (
    <div className="home-container bg-gray-50 min-h-screen flex flex-col">

      <section className="hero bg-blue-500 text-white py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-xl mb-6">Your solution for X, Y, and Z.</p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-200 transition">Get Started</button>
      </section>


      <section className="features py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="feature-item bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p>Explanation of feature 1.</p>
          </div>
          <div className="feature-item bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p>Explanation of feature 2.</p>
          </div>

        </div>
      </section>


      <section className="testimonials bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="testimonial bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 text-center">
            <p className="text-lg mb-4">"This app changed my life!"</p>
            <p className="text-sm text-gray-600">- Happy User</p>
          </div>
        </div>
      </section>


      <section className="about-us py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <p className="text-lg text-center">We are a team dedicated to providing the best service.</p>
      </section>


      <section className="recent-updates bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Updates</h2>
        <p className="text-lg text-center">Check out our latest blog posts and announcements.</p>
      </section>


      <footer className="bg-gray-800 text-white py-4 px-4 text-center">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        <nav className="mt-2">
          <a href="/privacy" className="text-blue-300 hover:underline mx-2">Privacy Policy</a>
          <a href="/terms" className="text-blue-300 hover:underline mx-2">Terms of Service</a>
        </nav>
      </footer>
    </div>
  )
}

export default Home
