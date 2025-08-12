
import React, { useEffect, useRef } from 'react';
import { MoveRight, Sparkles, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500/20 text-green-400 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                SmartRoots
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-glow mb-6">
              Live. <span className="text-green-500">Learn.</span> Thrive.
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your trusted resource for practical insights on health, growth, parenting, productivity, and lifestyle. 
              Discover evidence-based strategies for smarter living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Explore Articles
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/categories"
                className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Browse Categories
              </Link>
            </div>
            
            {/* Featured Categories */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Heart size={20} />, label: "Health", link: "/blog?category=health" },
                { icon: <TrendingUp size={20} />, label: "Growth", link: "/blog?category=growth" },
                { icon: <Sparkles size={20} />, label: "Productivity", link: "/blog?category=productivity" },
                { icon: <Heart size={20} />, label: "Lifestyle", link: "/blog?category=lifestyle" }
              ].map((category, index) => (
                <Link
                  key={index}
                  to={category.link}
                  className="group flex flex-col items-center p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="text-green-400 mb-2 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {category.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
