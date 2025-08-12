import React, { useEffect } from "react";
import { FileText, AlertTriangle, Scale, Globe } from "lucide-react";

const Terms = () => {
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
              <FileText className="h-3.5 w-3.5 mr-1" />
              Terms of Service
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-glow mb-6">
            Terms of <span className="text-green-500">Service</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using SmartRoots. By accessing our website, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-invert prose-green max-w-none">
          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white m-0">Acceptance of Terms</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>By accessing and using SmartRoots, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use the service.</p>
              <p>If you do not agree to abide by the above, please do not use this service.</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white m-0">Use License</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Permission is granted to temporarily download one copy of the materials on SmartRoots for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white m-0">Disclaimer</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>The materials on SmartRoots are provided on an 'as is' basis. SmartRoots makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              <p>Further, SmartRoots does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white m-0">Limitations</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>In no event shall SmartRoots or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SmartRoots, even if SmartRoots or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              <p>Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">User Content</h2>
            <div className="text-gray-300 space-y-4">
              <p>Users may post comments and other content on our website. By posting content, you grant SmartRoots a non-exclusive, royalty-free license to use, reproduce, and display such content.</p>
              <p>You are responsible for the content you post and agree not to post content that:</p>
              <ul>
                <li>Is unlawful, harmful, or offensive</li>
                <li>Infringes on intellectual property rights</li>
                <li>Contains spam or promotional material</li>
                <li>Is false or misleading</li>
              </ul>
              <p>We reserve the right to remove any content that violates these terms.</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
            <div className="text-gray-300 space-y-4">
              <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Modifications</h2>
            <div className="text-gray-300">
              <p>SmartRoots may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
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

export default Terms;