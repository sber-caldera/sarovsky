import typescript from '@rollup/plugin-typescript';

export default {
	input: 'packages/sarov/src/index.ts',
	output: {
		file: 'packages/sarov/dist/index.js',
		format: 'cjs'
	},
	plugins: [
		typescript(),
	],
};
