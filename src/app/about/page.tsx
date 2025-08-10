import { Github, Twitter, Linkedin, Mail, Heart, Users, Target, Lightbulb } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Full-stack developer with 10+ years in tech. Passionate about building communities.",
    avatar: "AC",
    social: { github: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Former Google engineer specializing in AI/ML and distributed systems.",
    avatar: "SJ",
    social: { github: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "Mike Rodriguez",
    role: "Head of Community",
    bio: "Community builder and developer advocate with experience at GitHub and Discord.",
    avatar: "MR",
    social: { github: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "Emily Davis",
    role: "Lead Designer",
    bio: "UX/UI designer focused on creating inclusive and accessible digital experiences.",
    avatar: "ED",
    social: { github: "#", twitter: "#", linkedin: "#" }
  }
];

const stats = [
  { label: "Active Users", value: "10,000+", icon: Users },
  { label: "GitHub Stars", value: "2,500+", icon: Github },
  { label: "Contributors", value: "150+", icon: Heart },
  { label: "Countries", value: "50+", icon: Target }
];

const values = [
  {
    icon: "🌍",
    title: "Open Source",
    description: "We believe in the power of open source to drive innovation and create positive change in the tech community."
  },
  {
    icon: "🤝",
    title: "Community First",
    description: "Our community is at the heart of everything we do. We're committed to fostering an inclusive and supportive environment."
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We leverage cutting-edge AI technology to curate and surface the most relevant content for our users."
  },
  {
    icon: "📚",
    title: "Knowledge Sharing",
    description: "We facilitate the exchange of ideas and knowledge to help developers grow and succeed in their careers."
  }
];

const AboutPage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About RelayStack
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          RelayStack is an AI-powered, community-driven open-source platform focused on technology and engineering. 
          We serve as a centralized hub for the latest tech news, discussions, and events, enabling engineers and 
          tech enthusiasts to stay informed, collaborate, and share knowledge.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To create a dynamic, engaging space that fosters innovation and keeps users updated on emerging trends 
            and opportunities in the tech world. We combine automated AI curation with active community contributions 
            to deliver the most relevant and valuable content to our users.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To become the go-to platform for technology professionals worldwide, where knowledge flows freely, 
            communities thrive, and innovation is accelerated through meaningful connections and shared expertise.
          </p>
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-2">Meet Our Team</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          The passionate individuals behind RelayStack
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {member.avatar}
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                <a href={member.social.github} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <Github className="w-5 h-5" />
                </a>
                <a href={member.social.twitter} className="text-gray-400 hover:text-blue-500">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Source */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="text-center">
          <Github className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold mb-4">Open Source & Community Driven</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            RelayStack is completely open source and community-driven. We believe in transparency, collaboration, 
            and the power of the developer community to build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              View on GitHub
            </button>
            <button className="border border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-6 py-3 rounded-lg transition-colors">
              Contribute
            </button>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Have questions, feedback, or want to collaborate? We&apos;d love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@relaystack.dev" 
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
