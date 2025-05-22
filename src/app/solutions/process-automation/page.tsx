import Link from 'next/link';
import AIBackground from '@/components/AIBackground';
import Tagline from '@/components/Tagline';

export default function ProcessAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-white relative">
      <AIBackground />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-ai-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Tagline />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Process Automation</h1>
            <p className="text-xl md:text-2xl">
              Streamline your business operations with intelligent automation that works 24/7.
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
                <span>Workflow automation and orchestration</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Document processing and data extraction</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Integration with existing systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Automated decision making</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Process monitoring and analytics</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-ai p-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Increased operational efficiency</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Reduced manual errors</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Cost savings through automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Improved compliance and audit trails</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Scalable business processes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ready to Automate Your Processes?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Let's discuss how our automation solutions can streamline your business operations.
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