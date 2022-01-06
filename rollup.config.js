// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

const name = 'myLib'

export default {
  input: `src/index.ts`,
  output: [
    {
      file: `dist/${name}.js`,
      format: 'umd',
      name: name,
      sourcemap: true,
    },
    {
      file: `module/${name}.js`,
      format: 'esm',
      name: name,
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    terser(),
  ],
}
