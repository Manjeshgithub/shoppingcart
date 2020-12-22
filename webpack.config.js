const path = require("path");

module.exports = {
	entry: {
		"shopping-cart": "./src/bundle-index/index.js"
	},
	output: {
		path: path.join(__dirname, "dist/js/"),
		filename: "[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["env"]
						}
					}
				]
			}
		]
	},
	devtool: "source-map",
	externals: {
		jquery: "jQuery"
	}
};
