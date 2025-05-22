import Link from 'next/link'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business with AI Agents
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We build custom AI agents that automate tasks, enhance productivity, and drive innovation for your business.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join the growing number of businesses transforming their operations with AI.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: 'Custom AI Agents',
    description: 'Tailored AI solutions designed to meet your specific business needs and objectives.',
  },
  {
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation that learns and adapts to your workflows.',
  },
  {
    title: 'Integration Services',
    description: 'Seamlessly integrate AI agents with your existing systems and platforms.',
  },
] 