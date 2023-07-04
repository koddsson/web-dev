import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';
import atImport from 'postcss-import';
import nano from 'cssnano';

export default {
  plugins: [atImport(), postcssJitProps(OpenProps), nano({preset: 'default'})]
}
