import Link from 'next/link';
import AIBackground from '@/components/AIBackground';
import Tagline from '@/components/Tagline';

export default function CustomerServiceAI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-white relative">
      <AIBackground />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-ai-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Tagline />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Service AI</h1>
            <p className="text-xl md:text-2xl">
              Transform your customer support with intelligent AI agents that provide instant, accurate responses 24/7.
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
                <span>Natural language understanding for complex queries</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Multi-channel support (chat, email, phone)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Seamless handoff to human agents when needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Real-time analytics and performance metrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Customizable responses and workflows</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-ai p-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>24/7 customer support availability</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Reduced response times and wait periods</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Lower operational costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Improved customer satisfaction</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Scalable support solution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ready to Transform Your Customer Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Let's discuss how our AI-powered customer service solution can help your business.
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