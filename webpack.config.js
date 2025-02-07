const path = require('path');

module.exports = {
	mode: 'production',
	context: path.resolve(__dirname, 'src'),
	entry: './index.js', // Входной файл
	output: {
		path: path.resolve(__dirname, 'dist'), // Папка для выходного файла
		filename: './main.js', // Имя выходного файла
	},
	devtool: 'source-map',
	devServer: {
		hot: true,
		static: {
			directory: './dist',
			watch: true
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/, // Для работы с CSS
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
