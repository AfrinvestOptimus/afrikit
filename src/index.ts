import { Config } from 'tailwindcss';
import colors from './colors';
import plugin from './plugin';

const config: Partial<Config> = {



	theme: {
		extend: {
			colors: colors,
		},
	},
	plugins: [plugin],
};

export = config;
