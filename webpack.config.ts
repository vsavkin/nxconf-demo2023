import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';

// Nx plugins for webpack.
export default composePlugins(withNx(), withReact(), (config) => {
  return config;
});
