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
	/** Optional link to a live, hosted version. */
	liveUrl?: string;
	/** Three main tools/technologies, most important first. */
	tools: string[];
}

/** Public projects from https://github.com/SamKerr. Order within each category is display order. */
export const projects: Project[] = [
	{
		name: 'Folio',
		category: 'tools',
		description: 'Crawl a site after login and save a browsable offline copy',
		url: 'https://github.com/SamKerr/folio',
		tools: ['Python', 'Playwright', 'BeautifulSoup'],
	},
	{
		name: 'Poe',
		category: 'tools',
		description: 'A web app for writing poetry',
		url: 'https://github.com/SamKerr/poe',
		liveUrl: 'https://poe.sam-kerr.co.uk',
		tools: ['Java', 'Spring Boot', 'SQLite'],
	},
	{
		name: 'ClipCrawler',
		category: 'tools',
		description: 'Scrapes all audio sources from a provided URL',
		url: 'https://github.com/SamKerr/clip-crawler',
		tools: ['Python', 'aiohttp', 'BeautifulSoup'],
	},
	{
		name: 'Part II Dissertation',
		category: 'research',
		description:
			'Cambridge CS dissertation (2021): transcribing videos of guitar performances into sheet music using computer vision alone',
		url: 'https://github.com/SamKerr/part-II-dissertation-pdf',
		tools: ['Python', 'OpenCV', 'scikit-learn'],
	},
	{
		name: 'Meta ML Accelerator',
		category: 'research',
		description:
			'Fine-tuned Llama 2 for R to Python translation and ported over 25% of the Robyn marketing-mix modelling library to Python (2023)',
		url: 'https://github.com/facebookexperimental/Robyn',
		tools: ['Python', 'PyTorch', 'Hugging Face'],
	},
	{
		name: 'Microsoft Partnership',
		category: 'research',
		description: 'Group project using Azure IoT devices to suggest study locations for students (2020)',
		url: 'https://gp2020-sierra.github.io/about/',
		tools: ['Azure IoT', 'Python', 'Vue'],
	},
	{
		name: 'Advent of Code 2019',
		category: 'challenges',
		description: '14 problems solved in Haskell',
		url: 'https://github.com/SamKerr/advent-of-code-2019',
		tools: ['Haskell', 'GHC', 'Functional'],
	},
	{
		name: 'Advent of Code 2024',
		category: 'challenges',
		description: 'All 50 problems solved in TypeScript',
		url: 'https://github.com/SamKerr/advent-of-code-2024',
		tools: ['TypeScript', 'Node.js'],
	},
	{
		name: 'TypeScript Type Challenges',
		category: 'challenges',
		description: 'My solutions to the type-challenges puzzles, solved entirely in the TypeScript type system',
		url: 'https://github.com/SamKerr/typescript-type-challenges',
		tools: ['TypeScript', 'Generics', 'Conditional Types'],
	},
	{
		name: 'Chess',
		category: 'games',
		description: 'Chess desktop app built with Pygame',
		url: 'https://github.com/SamKerr/chess',
		tools: ['Python', 'Pygame', 'NumPy'],
	},
	{
		name: 'Sudoku',
		category: 'games',
		description: 'Sudoku desktop app',
		url: 'https://github.com/SamKerr/sudoku',
		tools: ['Python', 'Pygame', 'Threading'],
	},
];
