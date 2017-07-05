const path = require('path');
const webpack = require('webpack');

const javascript = {
	test: /\.(js)$/
	, use: 'babel-loader'
};

module.exports = {
	entry: [
		'./src/app.js'
	]

	, devtool: 'source-map'

	, output: {
		path: path.join(process.cwd(), 'public', 'js')
		, publicPath: '/'
		, filename: 'bundle.js'
	}

	, module: {
		rules: [
			javascript
		]
	}

	, resolve: {
		extensions: [".js", ".json", ".css", ".scss"]
	}
	
	, plugins: [
		new webpack.HotModuleReplacementPlugin()
	]

	, devServer: {
		hot: true
		, historyApiFallback: true
		, contentBase: path.join(process.cwd(), 'public')
	}
};
