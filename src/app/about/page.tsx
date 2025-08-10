const AboutPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About RelayStack</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Mission & Vision</h2>
          <p>
            RelayStack is an AI-powered, community-driven open-source platform focused on technology and engineering. It serves as a centralized hub for the latest tech news, discussions, and events, enabling engineers and tech enthusiasts to stay informed, collaborate, and share knowledge. By combining automated AI curation with active community contributions, RelayStack aims to create a dynamic, engaging space that fosters innovation and keeps its users updated on emerging trends and opportunities in the tech world.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">The Team</h2>
          {/* Add team member information here */}
        </div>
        <div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          {/* Add contact information and social media links here */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
