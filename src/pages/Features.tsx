import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Platform Features</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover the tools and features designed to support your mental wellness journey.
            </p>
          </div>
        </div>
      </div>

      {/* Feature sections */}
      <div className="space-y-24 pb-24">
        {features.map((feature, featureIdx) => (
          <div
            key={feature.name}
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className={`grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 ${
              featureIdx % 2 === 0 ? 'lg:items-start' : 'lg:items-start lg:flex-row-reverse'
            }`}>
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {feature.name}
                </h3>
                <p className="mt-4 text-lg text-gray-600">{feature.description}</p>
                {feature.benefits && (
                  <dl className="mt-8 space-y-6">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit.name} className="relative">
                        <dt className="font-semibold text-gray-900">{benefit.name}</dt>
                        <dd className="mt-2 text-gray-600">{benefit.description}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {feature.cta && (
                  <div className="mt-8">
                    <Link
                      to={feature.cta.href}
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {feature.cta.text}
                    </Link>
                  </div>
                )}
              </div>
              <div className="lg:col-span-1">
                <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-100">
                  <div className="h-full w-full object-cover">
                    {/* Placeholder for feature UI/mockup */}
                    <div className="flex h-full items-center justify-center text-gray-400">
                      {feature.name} Interface
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    name: 'Mood Tracker',
    description: 'Track your daily moods and emotions to identify patterns and triggers.',
    benefits: [
      {
        name: 'Daily Check-ins',
        description: 'Quick and easy mood logging with customizable notes.',
      },
      {
        name: 'Pattern Recognition',
        description: 'Visualize your mood patterns over time with intuitive charts.',
      },
      {
        name: 'Trigger Identification',
        description: 'Connect your moods with activities and situations.',
      },
    ],
    cta: {
      text: 'Start Tracking',
      href: '/features/mood-tracker',
    },
  },
  {
    name: 'AI Chatbot Assistant',
    description: 'Your 24/7 companion for emotional support and guidance.',
    benefits: [
      {
        name: 'Always Available',
        description: 'Get support anytime, anywhere with our AI-powered chatbot.',
      },
      {
        name: 'Personalized Responses',
        description: 'Receive tailored suggestions based on your conversation history.',
      },
      {
        name: 'Crisis Resources',
        description: 'Immediate access to help resources when needed.',
      },
    ],
    cta: {
      text: 'Chat Now',
      href: '/features/chat',
    },
  },
  {
    name: 'Progress Analytics',
    description: 'Track your wellness journey with detailed insights and progress reports.',
    benefits: [
      {
        name: 'Custom Goals',
        description: 'Set and track personal wellness goals.',
      },
      {
        name: 'Progress Reports',
        description: 'Weekly and monthly progress summaries.',
      },
      {
        name: 'Achievement System',
        description: 'Earn badges and celebrate milestones.',
      },
    ],
    cta: {
      text: 'View Analytics',
      href: '/features/analytics',
    },
  },
];
