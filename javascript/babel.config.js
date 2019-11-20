const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "11"
      },
      useBuiltIns: "usage",
      corejs: 3
    }
  ]
];

const plugins = [["@babel/plugin-proposal-class-properties"]];

module.exports = { presets, plugins };
