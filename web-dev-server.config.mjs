import {esbuildPlugin} from '@web/dev-server-esbuild';
import postcss from 'postcss';

import postCssConfig from './postcss.config.js';

export default {
  watch: true,
  nodeResolve: true,
  plugins: [
    esbuildPlugin({ts: true, target: 'auto'}),
    {
      name: 'postcss',
      async transform(context) {
        if (context.response.is('css')) {
          const body = (await postcss(postCssConfig.plugins).process(context.body, {from: undefined, to: undefined})).css
          return {body}
        }
      },
    },
  ]
}
