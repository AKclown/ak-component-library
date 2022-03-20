import vuePlugin from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pks, { name } from '../package.json';
const file = type => `dist/${name}.${type}.js`;

// $ 不直接修改tsconfig在执行rollup进行替换
const overrides = {
    compilerOptions: {
        declaration: true
    },
    exclude: [
        "node_modules",
        "src/App.vue",
        "src/main.ts"
    ]
}

const deps = Object.keys(pks.dependencies);

export { file, name }

export default {
    input: 'src/index.ts',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        typescript({ tsconfigOverride: overrides }),
        vuePlugin(),
        css({ output: 'bundle.css' })
    ],
    external(id) {
        return /^vue/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
    }
}