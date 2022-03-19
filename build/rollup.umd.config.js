import basicConfig, { file, name } from './rollup.config';

export default {
    ...basicConfig,
    output: {
        name,
        file: file('umd'),
        format: 'umd',
        globals: {
            'vue': 'Vue',
            'lodash-es': '_'
        },
        exports:'named'
    },
}