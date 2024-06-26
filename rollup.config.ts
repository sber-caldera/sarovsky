import typescript from '@rollup/plugin-typescript';


export default {
	input: 'packages/sarov/src/index.ts',
	output: [
		{
			file: 'packages/sarov/dist/cjs/index.js',
			format: 'cjs',
			sourcemap: true,
			name: 'sarov',
		},
		{
			file: 'packages/sarov/dist/esm/index.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		typescript({
			tsconfig: './tsconfig.json',
		}),
	],
};
