// pages/404.tsx

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gary-900 to-gray-100">
      <div className="bg-glass backdrop-blur-lg border rounded-lg p-8 shadow-lg text-center">
        <h1 className="text-5xl font-bold text-white">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
          <a href="/" className="mt-6 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Go Back to Home
          </a>
      </div>
    </div>
  );
};

export default NotFoundPage;