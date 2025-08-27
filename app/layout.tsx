import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Security Simulation Tool",
    "one_liner": "Simulate and visualize potential attack vectors against smart contracts using AI.",
    "why_now": "Increasing breaches in DeFi demand greater proactive security measures.",
    "novel_mechanism": "Combines behavioral simulation and AI to predict vulnerabilities.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Agents"
    ],
    "edge_use_cases": [
      "Education for developers",
      "Investor reassurance tools"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "attack vector simulation",
        "vulnerability visualization",
        "user-friendly dashboard"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "D3.js",
        "n8n"
      ],
      "data_bootstrap": [
        "public dataset of known exploits",
        "synthetic via LLM"
      ],
      "risk": [
        "technical limitation on simulation accuracy",
        "user engagement"
      ],
      "mitigation": [
        "iterative feedback loop",
        "incentivized beta testing"
      ]
    },
    "go_to_market": {
      "hooks": [
        "live demo of a simulated attack",
        "before/after contract audits"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Discord"
      ],
      "pricing": {
        "free": "basic simulation",
        "pro": "detailed analytics",
        "business": "custom solutions"
      }
    },
    "moat": [
      "first-mover advantage in simulation",
      "community-driven security inputs",
      "educational partnerships"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "By enabling developers to visualize risks, this tool provides proactive defense rather than reactive fixes, creating high value."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}