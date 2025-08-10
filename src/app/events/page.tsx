import { Calendar, MapPin, Users, Clock, Plus, Search, Filter, ExternalLink } from "lucide-react";

const events = [
  {
    id: 1,
    title: "React Conf 2025",
    description: "The biggest React conference of the year featuring talks from the core team and leading developers in the React ecosystem.",
    date: "2025-08-15",
    time: "09:00 AM - 06:00 PM",
    location: "San Francisco, CA",
    type: "Conference",
    attendees: 2500,
    price: "Free",
    organizer: "React Team",
    image: "🚀",
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    id: 2,
    title: "AI/ML Meetup: Building Production ML Systems",
    description: "Join us for an evening of discussions about machine learning in production, featuring case studies and best practices.",
    date: "2025-08-12",
    time: "06:00 PM - 09:00 PM",
    location: "Online",
    type: "Meetup",
    attendees: 150,
    price: "Free",
    organizer: "ML Community",
    image: "🤖",
    tags: ["AI", "Machine Learning", "Python"]
  },
  {
    id: 3,
    title: "DevOps Workshop: Kubernetes in Production",
    description: "Hands-on workshop covering advanced Kubernetes topics including security, monitoring, and troubleshooting.",
    date: "2025-08-18",
    time: "10:00 AM - 04:00 PM",
    location: "New York, NY",
    type: "Workshop",
    attendees: 50,
    price: "$199",
    organizer: "DevOps Institute",
    image: "⚙️",
    tags: ["Kubernetes", "DevOps", "Cloud"]
  },
  {
    id: 4,
    title: "Hackathon: Climate Tech Solutions",
    description: "48-hour hackathon focused on building technology solutions for climate change and sustainability challenges.",
    date: "2025-08-22",
    time: "Friday 6PM - Sunday 6PM",
    location: "Austin, TX",
    type: "Hackathon",
    attendees: 200,
    price: "Free",
    organizer: "Climate Tech Alliance",
    image: "🌍",
    tags: ["Hackathon", "Climate", "Innovation"]
  },
  {
    id: 5,
    title: "Women in Tech Networking Event",
    description: "An evening of networking, mentorship, and career discussions for women in technology and engineering.",
    date: "2025-08-25",
    time: "05:30 PM - 08:00 PM",
    location: "Seattle, WA",
    type: "Networking",
    attendees: 100,
    price: "Free",
    organizer: "Women in Tech Seattle",
    image: "👩‍💻",
    tags: ["Networking", "Career", "Diversity"]
  },
  {
    id: 6,
    title: "Blockchain Developer Conference",
    description: "Explore the latest in blockchain technology, DeFi, and Web3 development with industry experts.",
    date: "2025-08-28",
    time: "09:00 AM - 05:00 PM",
    location: "Miami, FL",
    type: "Conference",
    attendees: 800,
    price: "$299",
    organizer: "Blockchain Association",
    image: "⛓️",
    tags: ["Blockchain", "Web3", "Cryptocurrency"]
  }
];

const eventTypes = ["All", "Conference", "Meetup", "Workshop", "Hackathon", "Networking"];
const locations = ["All", "Online", "San Francisco", "New York", "Austin", "Seattle", "Miami"];

const EventsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Tech Events</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Discover and join the best tech events worldwide</p>
        </div>
        <button className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Submit Event
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{events.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Upcoming Events</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">12</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">This Month</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Free Events</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">4,200+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Attendees</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500">
              <option value="">Event Type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500">
              <option value="">Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <input
              type="date"
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            {/* Event Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{event.image}</div>
                  <div>
                    <h3 className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
                      {event.title}
                    </h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                      event.type === "Conference" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200" :
                      event.type === "Meetup" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200" :
                      event.type === "Workshop" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200" :
                      event.type === "Hackathon" ? "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200" :
                      "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200"
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">{event.price}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{event.attendees} attending</div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>

              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>Organized by {event.organizer}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Register Now
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
          Load More Events
        </button>
      </div>
    </div>
  );
};

export default EventsPage;
