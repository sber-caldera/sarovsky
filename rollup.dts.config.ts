import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';


export default {
	input: 'packages/sarov/src/index.ts',
	output: [
		{
			file: 'packages/sarov/dist/types/index.d.ts',
			format: 'esm',
		},
	],
	plugins: [
		typescript({
			tsconfig: './tsconfig.json',
		}),
		dts(),
	],
};
