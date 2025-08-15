export default function About() {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering students and young professionals to take control of their mental health journey
            through accessible, personalized support and evidence-based resources.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Guided by compassion, driven by innovation, and committed to excellence.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="text-center">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {value.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Impact
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Making a difference in mental health support and wellness.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Users Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real stories from students and professionals who have benefited from our platform.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col">
                <div className="flex flex-1 flex-col justify-between bg-gray-50 p-8">
                  <div className="flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-100"
                      src={testimonial.image}
                      alt=""
                    />
                    <div>
                      <div className="text-sm font-semibold leading-6 text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <q className="text-sm italic leading-6 text-gray-600">
                      {testimonial.content}
                    </q>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    name: 'Accessibility',
    description:
      'Making mental health support available to everyone through technology and innovation.',
  },
  {
    name: 'Empowerment',
    description:
      'Providing tools and knowledge that enable individuals to take control of their mental wellness journey.',
  },
  {
    name: 'Evidence-Based',
    description:
      'Utilizing proven therapeutic approaches and staying current with the latest research in mental health.',
  },
];

const stats = [
  { id: 1, name: 'Students Supported', value: '30,000+' },
  { id: 2, name: 'Counseling Sessions', value: '50,000+' },
  { id: 3, name: 'Expert Counselors', value: '100+' },
  { id: 4, name: 'Success Rate', value: '95%' },
];

const testimonials = [
  {
    content:
      'MinYou has been a game-changer for my mental health. The counselors are amazing and the platform is so easy to use.',
    author: 'Sarah M.',
    role: 'Graduate Student',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  },
  {
    content:
      'The mood tracking feature helps me understand my patterns and the counseling sessions have given me tools to manage stress better.',
    author: 'James L.',
    role: 'Engineering Student',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
  {
    content:
      'As a working professional, the flexible scheduling and virtual sessions make it so much easier to prioritize my mental health.',
    author: 'Emily R.',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];
