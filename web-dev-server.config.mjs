import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  watch: true,
  nodeResolve: true,
  rootDir: "./src/",
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
};

