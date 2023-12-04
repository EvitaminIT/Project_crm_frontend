/** @type {import('next').NextConfig} */
const nextConfig = {  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      ],
    });
    return config;
  },}

module.exports = nextConfig

// next.config.js
// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(pdf)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next/static/files',
//             outputPath: 'static/files',
//             name: '[name].[ext]',
//             esModule: false,
//           },
//         },
//       ],
//     });
//     return config;
//   },
// };
