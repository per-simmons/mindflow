
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            MindFlow Features
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover how MindFlow can transform your productivity and thinking.
          </p>
        </div>

        {/* Feature sections */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Think Better</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI-Powered Connections</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our advanced AI automatically identifies and suggests connections between your thoughts, helping you build a more comprehensive understanding.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                        </svg>
                        Automatic pattern recognition.
                      </dt>
                      <dd className="inline"> Our AI identifies patterns in your thinking that you might miss.</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                        </svg>
                        Cross-context insights.
                      </dt>
                      <dd className="inline"> Connect ideas across different projects, notes, and journals.</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M3.75 3.75a.75.75 0 00-1.5 0v4.5a.75.75 0 00.75.75h4.5a.75.75 0 000-1.5h-2.69l4.72-4.72a.75.75 0 10-1.06-1.06L4.5 5.69V3a.75.75 0 00-.75.75z" />
                          <path d="M3.75 16.25a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-4.72-4.72V16.25z" />
                          <path d="M16.25 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V4.81l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72H16.25a.75.75 0 01-.75-.75z" />
                          <path d="M16.25 16.25a.75.75 0 00-.75.75v-2.69l-4.72-4.72a.75.75 0 00-1.06 1.06l4.72 4.72h-2.69a.75.75 0 000 1.5h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75z" />
                        </svg>
                        Adaptive learning.
                      </dt>
                      <dd className="inline"> The system learns from your thinking patterns to provide better connections over time.</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl shadow-xl overflow-hidden bg-indigo-500 p-8">
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="text-white text-xl font-semibold mb-4">Connection Map</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <div className="text-white text-sm font-medium">Project: Website Redesign</div>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <div className="text-white text-sm font-medium">Note: Color Psychology</div>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <div className="text-white text-sm font-medium">Journal: Client Meeting</div>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <div className="text-white text-sm font-medium">Research: UX Patterns</div>
                      </div>
                    </div>
                    <div className="mt-6 text-white/80 text-sm">AI suggests these items are related to your current project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 sm:mt-40">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Organize Effortlessly</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thought Amplification</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Transform fleeting ideas into actionable insights with our thought amplification technology that helps develop and expand your thinking.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      Idea development.
                    </dt>
                    <dd className="inline"> AI helps expand your initial thoughts into fully developed concepts.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                      Contextual suggestions.
                    </dt>
                    <dd className="inline"> Get intelligent suggestions based on your current thinking context.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" />
                      </svg>
                      Insight generation.
                    </dt>
                    <dd className="inline"> Automatically extract insights from your collection of thoughts.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="relative -mx-4 sm:mx-0">
              <div className="relative rounded-xl shadow-xl overflow-hidden bg-gray-900 p-8">
                <div className="bg-white/5 p-6 rounded-lg">
                  <div className="text-white text-xl font-semibold mb-4">Thought Development</div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="text-white/70 text-xs">Initial Thought</div>
                      <div className="text-white text-sm mt-1">Create a new onboarding flow for the app</div>
                    </div>
                    <div className="bg-indigo-600/30 p-3 rounded-lg">
                      <div className="text-white/70 text-xs">AI Amplification</div>
                      <div className="text-white text-sm mt-1">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Consider user personas for customization</li>
                          <li>Review competitor onboarding flows</li>
                          <li>Integrate with existing user data</li>
                          <li>Add progress indicators for completion</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="text-white/70 text-xs">Related Resources</div>
                      <div className="text-white text-sm mt-1">3 related documents found in your workspace</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-32 sm:mt-40 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to transform how you think?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Join our waitlist today and be among the first to experience the future of productivity.  
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/waitlist"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join the Waitlist
                </Link>
                <Link href="/blog" className="text-sm font-semibold leading-6 text-gray-900">
                  Read our blog <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
