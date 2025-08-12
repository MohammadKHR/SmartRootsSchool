import React, { useEffect } from "react";
import { Shield, Eye, Lock, Users } from "lucide-react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-psyco-black-DEFAULT to-psyco-black-light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-500/20 text-green-400 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center">
              <Shield className="h-3.5 w-3.5 mr-1" />
              Privacy Policy
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-glow mb-6">
            Your <span className="text-green-500">Privacy</span> Matters
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are committed to protecting your privacy and being transparent about how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-invert prose-green max-w-none">
          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white m-0">Information We Collect</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul>
                <li>Subscribe to our newsletter</li>
                <li>Leave comments on our blog posts</li>
                <li>Contact us through our contact form</li>
                <li>Interact with our social media accounts</li>
              </ul>
              <p>We also automatically collect certain information when you visit our website, including:</p>
              <ul>
                <li>Your IP address and browser information</li>
                <li>Pages you visit and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device and operating system information</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white m-0">How We Use Your Information</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our website and services</li>
                <li>Send you newsletters and updates (with your consent)</li>
                <li>Respond to your comments and inquiries</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white m-0">Information Sharing</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
              <ul>
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist us in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with analytics services (Google Analytics, etc.)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white m-0">Cookies and Tracking</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Enable social media features</li>
              </ul>
              <p>You can control cookies through your browser settings, though this may affect site functionality.</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <div className="text-gray-300 space-y-4">
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Unsubscribe from our communications at any time</li>
                <li>Object to certain uses of your information</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <div className="text-gray-300">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us through our contact page.</p>
              <p className="mt-4 text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;