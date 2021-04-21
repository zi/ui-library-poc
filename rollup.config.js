import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/utils/index.ts',
  output: {
    file: 'dist/utils/index.js',
    format: 'esm',
    plugins: [terser()],
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: { declaration: true },
        include: ['src/utils'],
      },
      useTsconfigDeclarationDir: false,
    }),
  ],
};
