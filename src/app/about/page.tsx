import Image from 'next/image'

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Architect',
    bio: 'PhD in Machine Learning with 10+ years of experience in AI development.',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Product',
    bio: 'Former tech lead at Google with expertise in AI product development.',
    image: '/team/michael.jpg'
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    bio: 'Full-stack developer specializing in AI integration and automation.',
    image: '/team/emily.jpg'
  }
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Axtray
            </h1>
            <p className="text-xl text-gray-600">
              We're a team of AI experts passionate about transforming businesses through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Empowering Innovation</h3>
                <p className="text-gray-600">
                  We believe in the power of AI to transform businesses. Our mission is to make advanced AI technology accessible and practical for companies of all sizes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Building the Future</h3>
                <p className="text-gray-600">
                  By combining cutting-edge AI research with practical business solutions, we're helping organizations build a more efficient and intelligent future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-48 w-48 mx-auto mb-4 rounded-full bg-gray-200 relative">
                  {/* Placeholder for team member image */}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-primary text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 