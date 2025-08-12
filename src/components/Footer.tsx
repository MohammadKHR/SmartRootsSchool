
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Twitter, MessageSquare, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-green-500">
                <Code size={24} />
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
                SmartRoots
              </h2>
            </div>
            <p className="text-gray-300 max-w-md">
              Your trusted resource for health, growth, parenting, productivity, and lifestyle content. Practical insights for better living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/categories" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/trading" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Trading
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Categories
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Health & Wellness</li>
              <li className="text-gray-300">Personal Growth</li>
              <li className="text-gray-300">Parenting</li>
              <li className="text-gray-300">Productivity</li>
              <li className="text-gray-300">Lifestyle</li>
              <li className="text-gray-300">Trading Education</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SmartRoots. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <NavLink to="/privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
