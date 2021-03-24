/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [
    '@snowpack/plugin-react-refresh', 
    '@snowpack/plugin-dotenv', 
    [
      '@snowpack/plugin-babel', 
      {
        transformOptions: {
          presets: ['@babel/preset-react'],
        }
      }
    ]
  ],
};
