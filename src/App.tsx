import React, { useState, useEffect } from 'react';
import { Code, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';

function App() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLeadForm(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Shaping the Future of Digital Products
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Product Manager with a strategic vision and a passion for
              impactful digital experiences. Skilled in building partnerships,
              creating AI-driven solutions, and enhancing product value in
              entertainment and tech.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowLeadForm(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Connect with Me
              </button>
              <a
                href="#experience"
                className="border border-gray-300 px-8 py-3 rounded-lg hover:border-gray-400 transition duration-200"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Product Manager</h3>
                <p className="text-gray-600">WebEngage • 2024 - Present</p>
                <p className="mt-2">
                  Leading strategy and driving innovation in customer engagement
                  technology. Focusing on enhancing product vision and shaping
                  the roadmap to support business goals and user satisfaction.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <Code className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Product Manager</h3>
                <p className="text-gray-600">Eros Now • 2023 - 2024</p>
                <p className="mt-2">
                  Spearheaded the Eros Now OTT relaunch, leveraging AI for
                  content recommendations and interactive features. Built and
                  managed key partnerships, enhancing Eros Now’s presence on
                  multiple platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <GraduationCap className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">
                  Post Graduate Diploma in Management
                </h3>
                <p className="text-gray-600">MICA, Ahmedabad • 2019 - 2021</p>
                <p className="mt-2">
                  Specialized in Advertising and Brand Management with a focus
                  on digital media, strategic marketing, and consumer
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <article
                key={post}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww`}
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    AI’s Role in Product Management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Insights on integrating AI for enhanced product strategy and
                    user engagement.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {showLeadForm && <LeadForm onClose={() => setShowLeadForm(false)} />}
    </div>
  );
}

export default App;
