export const categories = [
	{ id: 'research', label: 'Research & Collaborations' },
	{ id: 'tools', label: 'Tools' },
	{ id: 'challenges', label: 'Coding Challenges' },
	{ id: 'games', label: 'Fun' },
] as const;

export type Category = (typeof categories)[number]['id'];

export interface Project {
	name: string;
	category: Category;
	description: string;
	url: string;
	/** Year the project was made (or started). */
	year: number;
	/** Optional link to a live, hosted version. */
	liveUrl?: string;
	/** Three main tools/technologies, most important first. */
	tools: string[];
}

/** Public projects from https://github.com/SamKerr. Shown oldest first within each category; same-year projects keep the order below. */
export const projects: Project[] = [
	{
		name: 'Poe',
		category: 'tools',
		year: 2026,
		description: 'A web app for writing poetry',
		url: 'https://github.com/SamKerr/poe',
		liveUrl: 'https://poe.sam-kerr.co.uk',
		tools: ['Java', 'Spring Boot', 'SQLite'],
	},
	{
		name: 'Folio',
		category: 'tools',
		year: 2026,
		description: 'Crawl a site after login and save a browsable offline copy',
		url: 'https://github.com/SamKerr/folio',
		tools: ['Python', 'Playwright', 'BeautifulSoup'],
	},
	{
		name: 'Chess on Paper',
		category: 'tools',
		year: 2026,
		description: 'Print chess positions and study them by hand: print-ready diagrams and A4 sheets',
		url: 'https://github.com/SamKerr/chess-on-paper',
		liveUrl: 'https://samkerr.github.io/chess-on-paper/',
		tools: ['TypeScript', 'React', 'Vite'],
	},
	{
		name: 'ClipCrawler',
		category: 'tools',
		year: 2025,
		description: 'Scrapes all audio sources from a provided URL',
		url: 'https://github.com/SamKerr/clip-crawler',
		tools: ['Python', 'aiohttp', 'BeautifulSoup'],
	},
	{
		name: 'Part II Dissertation',
		category: 'research',
		year: 2021,
		description:
			'Cambridge CS dissertation: transcribing videos of guitar performances into sheet music using computer vision alone',
		url: 'https://github.com/SamKerr/part-II-dissertation-pdf',
		tools: ['Python', 'OpenCV', 'scikit-learn'],
	},
	{
		name: 'Meta ML Accelerator',
		category: 'research',
		year: 2023,
		description:
			'Fine-tuned Llama 2 for R to Python translation and ported over 25% of the Robyn marketing-mix modelling library to Python',
		url: 'https://github.com/facebookexperimental/Robyn',
		tools: ['Python', 'PyTorch', 'Hugging Face'],
	},
	{
		name: 'Microsoft Partnership',
		category: 'research',
		year: 2020,
		description: 'Group project using Azure IoT devices to suggest study locations for students',
		url: 'https://gp2020-sierra.github.io/about/',
		tools: ['Azure IoT', 'Python', 'Vue'],
	},
	{
		name: 'Advent of Code 2019',
		category: 'challenges',
		year: 2019,
		description: '14 problems solved in Haskell',
		url: 'https://github.com/SamKerr/advent-of-code-2019',
		tools: ['Haskell', 'GHC', 'Functional'],
	},
	{
		name: 'Advent of Code 2024',
		category: 'challenges',
		year: 2024,
		description: 'All 50 problems solved in TypeScript',
		url: 'https://github.com/SamKerr/advent-of-code-2024',
		tools: ['TypeScript', 'Node.js'],
	},
	{
		name: 'TypeScript Type Challenges',
		category: 'challenges',
		year: 2024,
		description: 'My solutions to the type-challenges puzzles, solved entirely in the TypeScript type system',
		url: 'https://github.com/SamKerr/typescript-type-challenges',
		tools: ['TypeScript', 'Generics', 'Conditional Types'],
	},
	{
		name: 'Chess',
		category: 'games',
		year: 2019,
		description: 'Chess desktop app built with Pygame',
		url: 'https://github.com/SamKerr/chess',
		tools: ['Python', 'Pygame', 'NumPy'],
	},
	{
		name: 'Sudoku',
		category: 'games',
		year: 2020,
		description: 'Sudoku desktop app built with Pygame',
		url: 'https://github.com/SamKerr/sudoku',
		tools: ['Python', 'Pygame', 'Threading'],
	},
	{
		name: 'This Website',
		category: 'games',
		year: 2025,
		description: 'The site you are on, built with Astro and deployed to GitHub Pages',
		url: 'https://github.com/SamKerr/samkerr.github.io',
		tools: ['Astro', 'TypeScript', 'CSS'],
	},
];
