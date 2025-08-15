export default function Programs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Programs</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our carefully crafted programs designed to support your mental wellbeing journey.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10"
            >
              <div className="mb-8">
                <h3 className="text-lg font-semibold leading-8 text-indigo-600">{program.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{program.description}</p>
              </div>
              <div className="mt-2 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What's included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {program.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-center">
                <button
                  type="button"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const programs = [
  {
    title: 'Stress Management',
    description: 'Learn effective techniques to manage stress and anxiety in your daily life.',
    features: [
      '8-week structured program',
      'Weekly live group sessions',
      'Stress reduction techniques',
      'Mindfulness exercises',
      'Progress tracking',
      'Community support',
    ],
  },
  {
    title: 'Academic Excellence',
    description: 'Develop skills to excel in your academic journey while maintaining mental wellness.',
    features: [
      '12-week comprehensive program',
      'Study skill enhancement',
      'Test anxiety management',
      'Time management training',
      'Individual counseling sessions',
      'Academic performance tracking',
    ],
  },
  {
    title: 'Personal Growth',
    description: 'Focus on holistic development and building resilience for life challenges.',
    features: [
      '10-week transformative program',
      'Self-discovery workshops',
      'Goal setting sessions',
      'Emotional intelligence training',
      'Personal mentoring',
      'Growth journaling tools',
    ],
  },
];
