// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts';

const name = 'myLib'

export default [{
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
},
{
  input: "src/index.ts",
  output: {
    file: "types/index.d.ts",
    format: "es",
  },
  plugins: [dts()],
}]
