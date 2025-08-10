# RelayStack

RelayStack is an AI-powered, community-driven open-source platform focused on technology and engineering. It serves as a centralized hub for the latest tech news, discussions, and events, enabling engineers and tech enthusiasts to stay informed, collaborate, and share knowledge.

## Features

- **News Feed**: AI-curated tech news articles with filtering and search capabilities
- **Community**: Forum-style discussions and Q&A
- **Events**: Upcoming tech events, webinars, and meetups
- **Documentation**: Guides and API documentation
- **Dark/Light Mode**: Toggle between themes with system preference detection

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Theme**: Custom theme provider with dark/light mode support

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/closedcodes/relaystack.git
cd relaystack
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── about/          # About page
│   ├── community/      # Community forum
│   ├── docs/           # Documentation
│   ├── events/         # Events listing
│   ├── news/           # News feed
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── ui/             # shadcn/ui components
│   └── theme-toggle.tsx # Theme toggle component
├── contexts/           # React contexts
│   └── theme-provider.tsx # Theme context provider
└── lib/                # Utility functions
    └── utils.ts        # Class name utilities
```

## Contributing

We welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).
