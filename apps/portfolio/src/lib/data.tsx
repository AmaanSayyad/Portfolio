import type { AboutSentence, Data } from "~/types/data";

const aboutSentence1: AboutSentence = [
	{ type: "text", content: "Hello! I am" },
];

const aboutSentence2: AboutSentence = [
	{ type: "text", content: "Amaan Sayyad", className: "font-elgocAlt text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400" },
];

const aboutSentence3: AboutSentence = [
	{ type: "text", content: "a" },
	{ type: "text", content: " Devrel", className: "font-beatriceMedium font-semibold text-white/90" },
	{ type: "text", content: "," },
	{ type: "text", content: " Blockchain Developer", className: "font-beatriceMedium font-semibold text-white/90" },
	{ type: "text", content: " &" },
	{ type: "text", content: " Entrepreneur", className: "font-beatriceMedium font-semibold text-white/90" },
];

const aboutSentence4: AboutSentence = [
	{ type: "text", content: "I&apos;ve built" },
	{ type: "text", content: " 25+ Web3 projects", className: "font-elgocAlt text-3xl sm:text-4xl md:text-5xl text-white font-bold" },
	{ type: "text", content: " across" },
	{ type: "text", content: " 30+ ecosystems", className: "font-semibold text-white/80" },
	{ type: "emoji", content: "🚀", className: "text-4xl sm:text-5xl md:text-6xl inline-block" },
];

const aboutSentence5: AboutSentence = [
	{ type: "text", content: "Won" },
	{ type: "text", content: " 35 hackathons", className: "font-bold text-white" },
	{ type: "text", content: " out of" },
	{ type: "text", content: " 70+ participated", className: "font-semibold text-white/70" },
	{ type: "emoji", content: "🏆", className: "text-4xl sm:text-5xl md:text-6xl inline-block" },
];

const aboutSentence6: AboutSentence = [
	{ type: "text", content: "Co-founded" },
	{ type: "text", content: " 2 startups", className: "font-bold text-white" },
	{ type: "text", content: " and built" },
	{ type: "text", content: " 4 communities", className: "font-semibold text-white/80" },
	{ type: "text", content: " from 0 to 100x", className: "font-semibold text-white/70" },
];

const projects: Data["projects"]["projects"] = [
	{
		title: "APT-Casino",
		description:
			"A fully on-chain casino for the Aptos Ecosystem providing safe, secure, transparent gaming. Backed by Aptos and Movement Labs. Grants: $5,000 (Aptos), 10,000 MOVE (Movement Labs), $6,500 (Top Blockchain Startup Award). Won 15 hackathons. Live on ICP, Aptos, and EVM chains.",
		image: "/images/1.png",
		coverImage: "/images/1-cover.png",
		backgroundColor: "#1E1E2E",
		color: "#00D9FF",
		githubLink: "https://github.com/AmaanSayyad/Aptos-Casino",
		liveLink: "https://aptos-casino-sand.vercel.app/",
		videoDemo: "https://drive.google.com/file/d/1i-LBGqOFhsJh1ml5Xj4QIRbwRk8byD_V/view",
	},
	{
		title: "DunkVerse",
		description:
			"Won 10 Hackathons ($15,000 total). Top-performing dapp with 2,100+ Likes on HackQuest. A revolutionary Web3 gaming platform combining DeFi, AI, and GameFi for safe, transparent gaming experiences.",
		image: "/images/2.jpeg",
		coverImage: "/images/2-cover.png",
		backgroundColor: "#0A0A0F",
		color: "#FF6B6B",
		githubLink: "https://github.com/AmaanSayyad/DunkVerse",
		videoDemo: "https://youtu.be/3uZv3TCel-w",
	},
	{
		title: "HyperInsure",
		description:
			"The first on-chain insurance protocol protecting blockchain users from transaction latency, mempool congestion and finality delays. Powered by Stacks + Bitcoin security. Winner of Stacks Hacker House 2025.",
		image: "/images/3.png",
		coverImage: "/images/3-cover.png",
		backgroundColor: "#1A1A2E",
		color: "#FFD700",
		githubLink: "https://github.com/amaansayyad/hyperinsure",
	},
	{
		title: "Gemetra",
		description:
			"Global Remittance Infrastructure for VAT Claims & Payroll. A comprehensive solution for cross-border financial operations with blockchain transparency and security.",
		image: "/images/4.png",
		coverImage: "/images/4-cover.png",
		backgroundColor: "#2D1B3D",
		color: "#9D4EDD",
		githubLink: "https://github.com/amaansayyad/gemetra",
		liveLink: "https://gemetra.vercel.app/",
	},
	{
		title: "StarkNet Arcade",
		description:
			"Top-performing gaming dapp in the StarkNet Ecosystem. Arcadino brings innovative on-chain gaming experiences with cutting-edge blockchain technology.",
		image: "/images/5.png",
		coverImage: "/images/5-cover.png",
		backgroundColor: "#0F0F23",
		color: "#00FF88",
		githubLink: "https://github.com/AmaanSayyad/Starknet-Arcade",
	},
	{
		title: "MultiAgent Army",
		description:
			"Top-performing dapp in the ICP Ecosystem. A revolutionary multi-agent system leveraging Internet Computer Protocol for decentralized AI applications.",
		image: "/images/6.png",
		coverImage: "/images/6-cover.png",
		backgroundColor: "#1A1A2E",
		color: "#29B6F6",
		githubLink: "https://github.com/AmaanSayyad/MultiAgent-Army",
		videoDemo: "https://youtu.be/qBid3G7o3jk",
	},
	{
		title: "Feed Our World",
		description:
			"Empowering communities and reducing global food waste through an on-demand, on-chain blockchain-based food distribution application. Grant: $25,000 from CELO Ecosystem. Aligned with UN Sustainable Goals.",
		image: "/images/7.png",
		coverImage: "/images/7-cover.png",
		backgroundColor: "#2D5016",
		color: "#4CAF50",
		githubLink: "https://github.com/Feed-Our-World-FOW",
		videoDemo: "https://youtu.be/yfG9RmuASfQ",
	},
	{
		title: "Bharat DAO",
		description:
			"India&apos;s fastest-growing Web3 Developer community. Gateway for 1000+ Global Blockchains & Protocols to enter and scale in India. Grew from ZERO to 10,000+ developers in 45 days with 100% weekly growth rate.",
		image: "/images/8.jpeg",
		coverImage: "/images/8-cover.png",
		backgroundColor: "#FF6B35",
		color: "#004E89",
		githubLink: "https://github.com/AmaanSayyad",
	},
	{
		title: "JustRoles",
		description:
			"Just Roles is a project that provides on-chain verifiable roles based on the Lens Protocol followers. Communities can set different roles for different thresholds and utilize the Phala Lens Oracle to obtain verifiable data from the API. ",
		image: "/images/9.png",
		coverImage: "/images/9-cover.png",
		backgroundColor: "#D5D5D5",
		color: "#2A2A2A",
		githubLink: "https://github.com/Envoy-VC/just-roles",
		videoDemo: "https://www.youtube.com/watch?v=v43G7w5a0bM",
	},
	{
		title: "Axioms",
		description:
			"Axioms provides organizations a one-stop shop for certificate issuance and verification. Organizations are Safe Multi-Sig Wallets. Certificates are stored indefinitely on Arweave and user verification is done with zkProofs via Sismo Connect.",
		image: "/images/2.jpeg",
		coverImage: "/images/2-cover.png",
		backgroundColor: "#D4D0C7",
		color: "#53BB89",
		githubLink: "https://github.com/Envoy-VC/axioms",
		videoDemo: "https://youtu.be/9rAgqT6YUqU",
	},
	{
		title: "Atomic Toolkit",
		description:
			"Atomic Toolkit is your streamlined path to building on Atomic Standards. Craft rock-solid, spec-compliant assets with ease, thanks to robust type safety.",
		image: "/images/3.png",
		coverImage: "/images/3-cover.png",
		backgroundColor: "#33437F",
		color: "#D2DCF2",
		liveLink: "https://atomictoolkit.mintlify.app/",
		githubLink: "https://github.com/Envoy-VC/atomic-toolkit",
	},
	{
		title: "GHO Tunes",
		description:
			"GHO Tunes introduces a novel payment model within the Aave Protocol ecosystem, built upon the GHO stablecoin. This system leverages GHO Credit delegation and Chainlink cron-based automation to establish robust recurring payments directly on the blockchain.",
		image: "/images/4.png",
		coverImage: "/images/4-cover.png",
		backgroundColor: "#ECDCE9",
		color: "#321D44",
		githubLink: "https://github.com/Envoy-VC/ghotunes-lfgho",
		videoDemo:
			"https://stream.mux.com/lGKB2oGze8vTVE3Inx5QUkg02F02lbPf7RPOKryFBmJAE/high.mp4",
	},
	{
		title: "Serendipity Engine",
		description:
			"Based on the theory called Six Degrees of Separation, Serendipity Engine is a profile discovery/Constellation graph Farcaster frame which help users discover other users in the farcaster network.",
		image: "/images/5.png",
		coverImage: "/images/5-cover.png",
		backgroundColor: "#F5EFDF",
		color: "#070707",
		githubLink: "https://github.com/Envoy-VC/the-serendipity-engine",
		videoDemo:
			"https://stream.mux.com/IwZ7ZioiO9xosBTgSiQQjL6sjruxfn0000nH00G84holfo/high.mp4",
	},
	{
		title: "BattleshipX",
		description:
			"BattleShipX is a secure and private battleship game that can be played with friends. It uses nillion for storing the game state and and blind computation for the game logic.",
		image: "/images/6.png",
		coverImage: "/images/6-cover.png",
		backgroundColor: "#33437F",
		color: "#D2DCF2",
		githubLink: "https://github.com/Envoy-VC/battleship-x-scaling-ethereum",
		videoDemo:
			"https://stream.mux.com/67AHORdQSrbSbzm7e5FxeVtDf2VpxMW2kleRqtWN6cU/high.mp4",
	},
	{
		title: "ZK Guesser",
		description:
			"ZK Guesser is a geo-location guessing game built on zero-knowledge proofs. Players attempt to pinpoint a hidden location on a map, but unlike traditional GeoGuessr, their exact guesses remain hidden. ",
		image: "/images/7.png",
		coverImage: "/images/7-cover.png",
		backgroundColor: "#454545",
		color: "#FFFFFF",
		githubLink: "https://github.com/Envoy-VC/zk-guesser",
		videoDemo: "https://youtu.be/BEBZZV_Senk",
	},
	{
		title: "Minesweeper",
		description:
			"This is a simple implementation of the classic game Minesweeper using Nillion Blind Computation.",
		image: "/images/8.jpeg",
		coverImage: "/images/8-cover.png",
		backgroundColor: "#C0C0C0",
		color: "#000000",
		githubLink: "https://github.com/Envoy-VC/minesweeper-nillion",
		videoDemo: "https://www.youtube.com/watch?v=sRLVX6E1iUQ",
	},
	{
		title: "Transcend Vault",
		description:
			"Transcend Vault is a Multi-Peer Vault Storage which is gated by a secure Multi-Party Computation (MPC) based Biometric Authentication System.",
		image: "/images/9.png",
		coverImage: "/images/9-cover.png",
		backgroundColor: "#E1EBFD",
		color: "#3434FE",
		githubLink: "https://github.com/Envoy-VC/transcend-nillion",
		videoDemo: "https://youtu.be/m1_AWJ8iMpY",
	},
	{
		title: "Blaze ID",
		description: `Blaze ID is a self-sovereign identity (SSI) wallet solution built on Lit Protocol&apos;s programmable key wallets. It supports a variety of Decentralized Identifiers (DIDs) including key, web, ethr and Polygon ID`,
		image: "/images/10.jpeg",
		coverImage: "/images/10-cover.png",
		githubLink: "https://github.com/Envoy-VC/blaze-id",
		backgroundColor: "#DE4B40",
		color: "#FFF0CE",
	},
	{
		title: "StarkSketch",
		description:
			"StarkSketch is a collaborative Sketching game built on Starknet using Dojo Game Engine. It is similar to the popular game Skribbl.io but with a twist that  multiple users can join a room and sketch together.",
		image: "/images/11.png",
		coverImage: "/images/11-cover.png",
		backgroundColor: "#DFE9F3",
		color: "#1C2134",
		githubLink: "https://github.com/Envoy-VC/starksketch",
	},
	{
		title: "PiperPay",
		description:
			"PiperPay is a Invoice and Payment management system built on top of Request Network. It allows users to create invoices and accept payments in a decentralized manner.",
		image: "/images/12.png",
		coverImage: "/images/12-cover.png",
		backgroundColor: "#DBE6E2",
		color: "#05A8A9",
		githubLink: "https://github.com/Envoy-VC/piper-pay",
	},
];

export const data: Data = {
	header: "Amaan Sayyad",
	about: [aboutSentence1, aboutSentence2, aboutSentence3, aboutSentence4, aboutSentence5, aboutSentence6],
	interests: {
		title: (
			<>
				*what do <br />I do as a <br />
				web3 <br />
				developer?
			</>
		),
		description: ``,
		interests: [
			"Build 25+ Web3 projects",
			"Win 35 hackathons",
			"Co-found 2 startups",
			"Build 4 communities",
			"Speak at 12+ events",
		],
	},
	articles: {
		title: "Articles",
		description:
			"I have been writing articles for a while now on various web3 protocols and even project builds. These articles are a mix of tutorials, guides, and project breakdowns. I hope you find them helpful.",
		hashnodeHostname: "blog.envoy1084.xyz",
	},
	projects: {
		title: "Projects",
		projects,
	},
	resume: {
		description: ``,
		website: "https://amaan-sayyad-portfolio.vercel.app",
		name: "Amaan Sayyad",
		position: "DevRel | Blockchain Developer",
		email: "amaansayyad2001@gmail.com",
		downloadLink: "/resume.pdf",
	},
	contact: {
		links: [
			{
				title: "Email",
				link: "mailto:amaansayyad2001@gmail.com",
			},
			{
				title: "Twitter / X",
				link: "https://x.com/amaanbiz",
			},
			{
				title: "LinkedIn",
				link: "https://www.linkedin.com/in/amaan-sayyad-/",
			},
			{
				title: "GitHub",
				link: "https://github.com/AmaanSayyad",
			},
		],
	},
};
