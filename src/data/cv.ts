/** CV content, deliberately kept brief: an overview of roles, not a full CV. */

export const summary =
	'Senior Software Engineer with 6+ years building and scaling systems across betting, big tech and enterprise software, with a focus on technical leadership and full stack delivery.';

export interface Role {
	company: string;
	title: string;
	dates: string;
	summary: string;
	tools: string[];
}

export const experience: Role[] = [
	{
		company: 'William Hill (Evoke)',
		title: 'Senior Software Engineer',
		dates: '2024 – Present',
		summary:
			'Leading technical direction across two teams on retail and sportsbook products: owning architecture, setting coding standards, strengthening security and driving delivery of project goals.',
		tools: ['TypeScript', 'React', 'Python', 'Java', 'AWS', 'Kubernetes', 'Terraform'],
	},
	{
		company: 'Meta',
		title: 'Software Engineer (Contractor)',
		dates: '2022 – 2024',
		summary: 'Built data labelling and ML tooling, improving labelling efficiency and model training costs.',
		tools: ['Python', 'Airflow', 'SQL', 'TypeScript', 'React', 'Hack'],
	},
	{
		company: 'Smarkets',
		title: 'Software Engineer',
		dates: '2021 – 2022',
		summary: 'Full stack, primarily front-end, building Smarkets\' web and mobile betting apps in React Native, with a focus on reliability.',
		tools: ['React Native', 'TypeScript', 'React', 'Python', 'Flask', 'Docker', 'Kubernetes'],
	},
	{
		company: 'Tracsis',
		title: 'Software Engineer',
		dates: '2017 – 2019',
		summary: 'Early-career role working full stack on Tracsis\'s software for train operating companies, from Haskell back-end logic to desktop and Vue UIs.',
		tools: ['C#', 'WPF', 'Haskell', 'TypeScript', 'Vue.js'],
	},
];

export interface Education {
	qualification: string;
	institution: string;
	dates: string;
	summary: string;
}

export const education: Education[] = [
	{
		qualification: 'BA Computer Science',
		institution: 'University of Cambridge',
		dates: '2018 – 2021',
		summary: '2:1 (71%), ranked 59/120, with an 80% dissertation in computer vision.',
	},
	{
		qualification: 'A Levels',
		institution: 'Roundhay School, Leeds',
		dates: '2015 – 2017',
		summary: 'Maths, Further Maths and Physics (A*), and AS Biology (A).',
	},
];
