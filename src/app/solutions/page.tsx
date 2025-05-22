import Link from 'next/link'

const solutions = [
  {
    title: 'Customer Service AI',
    description: 'Automate customer interactions with intelligent AI agents that provide 24/7 support.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Sentiment analysis',
      'Seamless human handoff'
    ]
  },
  {
    title: 'Process Automation',
    description: 'Streamline your business operations with AI-powered workflow automation.',
    features: [
      'Document processing',
      'Data extraction',
      'Workflow optimization',
      'Real-time monitoring'
    ]
  },
  {
    title: 'Data Analysis',
    description: 'Transform your data into actionable insights with advanced AI analytics.',
    features: [
      'Predictive analytics',
      'Pattern recognition',
      'Custom reporting',
      'Real-time dashboards'
    ]
  },
  {
    title: 'Custom AI Development',
    description: 'Build tailored AI solutions that address your specific business challenges.',
    features: [
      'Custom model development',
      'Integration services',
      'Training and support',
      'Ongoing maintenance'
    ]
  }
]

export default function Solutions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Our AI Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Discover how our AI solutions can transform your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-primary mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI solutions can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 