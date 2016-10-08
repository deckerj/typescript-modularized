import typescript from 'rollup-plugin-typescript';

export default {
    entry: 'src/App.ts',
    format: 'iife',
    dest: 'target/bundle.js',
    plugins: [
        typescript()
    ]
};