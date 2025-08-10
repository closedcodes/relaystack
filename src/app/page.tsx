import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to RelayStack</h1>
        <p className="text-lg text-gray-600">Your AI-powered hub for technology and engineering.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Featured News</h2>
          {/* Add featured news content here */}
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Trending Discussions</h2>
          {/* Add trending discussions content here */}
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Upcoming Events</h2>
          {/* Add upcoming events content here */}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Explore RelayStack</h2>
        <div className="flex justify-center space-x-4">
          <Link href="/news" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Browse News
          </Link>
          <Link href="/community" className="bg-green-500 text-white px-6 py-2 rounded-lg">
            Join the Community
          </Link>
          <Link href="/events" className="bg-purple-500 text-white px-6 py-2 rounded-lg">
            Find Events
          </Link>
        </div>
      </div>
    </div>
  );
}
