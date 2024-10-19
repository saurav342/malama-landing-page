import React from 'react';
import { Zap, MapPin, PhoneCall, Mail, Twitter, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <header className="bg-white bg-opacity-90 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="text-blue-600 w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Malama</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-blue-600">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Eco-Friendly Rides in Bengaluru</h2>
          <p className="text-xl text-white mb-8">Experience the future of transportation with Malama's electric cab service</p>
          <a href="#book" className="bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300">Book a Ride</a>
        </section>

        <section id="about" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">About Malama</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Electric Car" className="rounded-lg shadow-md" />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Malama is Bengaluru's premier electric cab service, committed to providing eco-friendly transportation solutions. Our fleet of state-of-the-art electric vehicles offers a comfortable, quiet, and emission-free ride through the bustling streets of Bengaluru.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By choosing Malama, you're not just getting from point A to B; you're contributing to a cleaner, greener future for our city. Join us in our mission to reduce carbon emissions and make Bengaluru a more sustainable place to live.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-blue-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">City Rides</h3>
                <p className="text-gray-600">Efficient and comfortable rides within Bengaluru city limits.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Airport Transfers</h3>
                <p className="text-gray-600">Reliable and punctual airport pick-ups and drop-offs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Corporate Packages</h3>
                <p className="text-gray-600">Customized solutions for businesses and their employees.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="careers" className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Careers at Malama</h2>
            <p className="text-xl text-gray-600 mb-8">Join our team and be part of the green revolution!</p>
            <div className="bg-yellow-100 p-8 rounded-lg shadow-md inline-block">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Coming Soon</h3>
              <p className="text-gray-700">We're gearing up to expand our team. Check back soon for exciting opportunities!</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded text-gray-800" />
                  <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded text-gray-800" />
                  <textarea placeholder="Your Message" rows={4} className="w-full p-2 border border-gray-300 rounded text-gray-800"></textarea>
                  <button type="submit" className="bg-yellow-400 text-blue-800 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition duration-300">Send Message</button>
                </form>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-yellow-400 w-6 h-6 mr-2" />
                    <span>123 Blue Street, Bengaluru, Karnataka 560001</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneCall className="text-yellow-400 w-6 h-6 mr-2" />
                    <span>+91 80 1234 5678</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-yellow-400 w-6 h-6 mr-2" />
                    <span>info@malamacabs.com</span>
                  </div>
                  <div className="flex items-center mt-6">
                    <a href="https://twitter.com/malamacabs" target="_blank" rel="noopener noreferrer" className="mr-4">
                      <Twitter className="text-yellow-400 w-6 h-6 hover:text-yellow-300 transition duration-300" />
                    </a>
                    <a href="https://wa.me/918012345678" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="text-yellow-400 w-6 h-6 hover:text-yellow-300 transition duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Malama. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;