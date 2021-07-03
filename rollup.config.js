import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default ['client'].map(file => ({
  input: `./src/${file}/index.ts`,
  plugins: [
    resolve({ extensions }),
    commonjs(),


    babel({
      extensions,
      babelHelpers: 'bundled',
      include: [`src/${file}/**/*`],
    }),
  ],

  output: [{
    format: 'iife',
    file: `dist/${file}/${file}.js`,
  }],
}));
