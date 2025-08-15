import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { events } from '../data/events';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Resources() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resources</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our collection of articles, guides, and upcoming events to support your mental wellness journey.
          </p>
        </div>

        <Tab.Group className="mt-16">
          <Tab.List className="flex space-x-1 rounded-xl bg-indigo-50 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-indigo-700 shadow'
                    : 'text-gray-600 hover:bg-white/[0.12] hover:text-indigo-600'
                )
              }
            >
              Articles
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-indigo-700 shadow'
                    : 'text-gray-600 hover:bg-white/[0.12] hover:text-indigo-600'
                )
              }
            >
              Events
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-8">
            <Tab.Panel>
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <article key={article.id} className="flex flex-col items-start">
                    <div className="relative w-full">
                      <img
                        src={article.thumbnail}
                        alt=""
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1]"
                      />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time dateTime={article.date} className="text-gray-500">
                          {article.date}
                        </time>
                        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                          Mental Health
                        </span>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <Link to={`/resources/articles/${article.id}`}>
                            <span className="absolute inset-0" />
                            {article.title}
                          </Link>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {article.summary}
                        </p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0" />
                            {article.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid gap-8">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="overflow-hidden rounded-lg bg-white shadow"
                  >
                    <div className="px-4 py-5 sm:p-6">
                      <div className="sm:flex sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            {event.title}
                          </h3>
                          <div className="mt-2 max-w-xl text-sm text-gray-500">
                            <p>{event.description}</p>
                          </div>
                          <div className="mt-4">
                            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                              {event.date.toLocaleDateString()} • {event.duration}
                            </span>
                            <span className="ml-2 text-sm text-gray-500">
                              Hosted by {event.host}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 sm:ml-6 sm:mt-0">
                          <a
                            href={event.registrationUrl}
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}


