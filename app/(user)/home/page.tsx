export default function Home() {
    return (
      <div className="bg-gray-900 text-white">
        {/* Hero Section with Glassmorphism */}
        <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-800 to-gray-900 relative">
          <div className="bg-glass backdrop-blur-lg p-12 rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold mb-4">
              Welcome to <span className="text-green-400">Robinhood Club</span>
            </h1>
            <p className="text-xl mb-8">
              Master your portfolio and trading skills with ease!
            </p>
            <a
              href="/signup"
              className="px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 text-lg"
            >
              Get Started
            </a>
          </div>
        </section>
  
        {/* Feature Section with Glassmorphism */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="bg-glass backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4">Lot Pip Calculator</h3>
                <p>
                  Calculate pip and lot sizes accurately and optimize your trades
                  with our advanced tools.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-glass backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4">Psychology Test</h3>
                <p>
                  Understand your trading mindset and improve your decision-making
                  skills with our psychology tests.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-glass backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4">Courses (Coming Soon)</h3>
                <p>
                  Learn from expert traders and enhance your skills with
                  upcoming comprehensive courses.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }