# Zolan AI - Your Onchain Companion

A Base Mini App that enables personalized AI companionship and co-creation experiences on Farcaster, leveraging Base for onchain reputation and viral distribution through Frames.

## Features

- 🤖 **Personalized AI Interaction** - Engage with Zolan in unique, tailored conversations
- 🎨 **Co-Creation & Onchain Reputation** - Collaborate with Zolan and mint your creations onchain
- 🚀 **Frame-First Distribution** - Seamless viral sharing within Farcaster
- ⚡ **Gasless Transactions** - Smooth, fee-less onchain experiences via Coinbase Paymaster

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet Integration**: OnchainKit, Coinbase Wallet
- **Social Integration**: Farcaster MiniKit
- **Styling**: Tailwind CSS with Coinbase theme
- **AI**: OpenAI API (configurable)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your API keys.

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
zolan-ai-miniapp/
├── app/
│   ├── components/       # Reusable UI components
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Main landing page
│   ├── providers.tsx     # OnchainKit & React Query providers
│   └── globals.css       # Global styles with Coinbase theme
├── public/
│   └── .well-known/
│       └── farcaster.json # Mini App manifest
└── package.json
```

## Key Components

- **Navigation** - Sticky header with mobile-responsive menu
- **HeroSection** - Animated hero with glowing Zolan logo
- **FeatureCard** - Reusable feature showcase cards
- **CTAButton** - Branded call-to-action buttons

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - OnchainKit API key from Coinbase Developer Platform
- `NEXT_PUBLIC_BASE_RPC_URL` - Base RPC endpoint
- `OPENAI_API_KEY` - OpenAI API key for Zolan AI

## Learn More

- [Base Mini Apps Documentation](https://docs.base.org/mini-apps)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster MiniKit](https://miniapps.farcaster.xyz)

## License

MIT
