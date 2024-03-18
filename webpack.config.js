// webpack.config.js
import CopyWebpackPlugin from 'copy-webpack-plugin';
import * as path from 'path';
console.log(CopyWebpackPlugin);
console.log(12312312);
module.exports = {
  // ... 其他webpack配置项
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(__dirname, 'config'), to: 'config1' }],
    }),
  ],
};
