import Link from 'next/link';
import AIBackground from '@/components/AIBackground';
import Tagline from '@/components/Tagline';

export default function CustomAI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-white relative">
      <AIBackground />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-ai-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Tagline />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom AI Development</h1>
            <p className="text-xl md:text-2xl">
              Build tailored AI solutions that address your unique business challenges and requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-ai p-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Custom AI model development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Integration with existing systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Scalable architecture design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Continuous learning and improvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Comprehensive documentation and support</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-ai p-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tailored to your specific needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Competitive advantage</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Future-proof technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Dedicated support and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>ROI-focused development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ready to Build Your Custom AI Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Let's discuss how we can create a custom AI solution that perfectly fits your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg hover:from-primary-dark hover:to-accent-dark transition-all shadow-ai"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
} 