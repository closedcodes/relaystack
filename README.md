# RelayStack 🚀

A modern, AI-powered community platform frontend built with Next.js and cutting-edge technologies.

## ✨ Features

- **🤖 AI Assistant** - Intelligent help and content analysis
- **📰 News Feed** - Curated news with AI-powered insights
- **💬 Community Discussions** - Interactive forums and discussions
- **📅 Events Management** - Create and manage community events
- **🎨 Modern UI** - Beautiful, responsive design with Tailwind CSS
- **📱 Responsive Design** - Works seamlessly on all devices
- **🌙 Dark/Light Mode** - Theme switching for better user experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **AI Integration**: OpenAI API, LangChain
- **State Management**: React hooks and context
- **Deployment**: Vercel ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/closedcodes/relaystack.git
   cd relaystack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**
   Create a `.env.local` file in the root directory:
   ```env
   # OpenAI Configuration (optional)
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
relaystack/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── ai-assistant/    # AI assistant page
│   │   ├── community/       # Community discussions
│   │   ├── events/          # Events management
│   │   ├── news/            # News feed
│   │   └── layout.tsx       # Root layout
│   ├── components/          # Reusable components
│   │   ├── ui/             # Base UI components
│   │   ├── ai-assistant.tsx
│   │   ├── community-stats.tsx
│   │   └── ...
│   └── lib/                # Utility functions
│       └── utils.ts        # Helper functions
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for AI features | No |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@relaystack.com
- 🐛 Issues: [GitHub Issues](https://github.com/closedcodes/relaystack/issues)
- 📖 Documentation: [Wiki](https://github.com/closedcodes/relaystack/wiki)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Radix UI](https://www.radix-ui.com/) for the component primitives

## 📊 Project Status

- ✅ Core frontend functionality implemented
- ✅ AI integration
- ✅ Community features
- 🚧 Additional features in development
- 📋 Performance optimizations planned

---

Made with ❤️ by the RelayStack team
