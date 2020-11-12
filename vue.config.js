module.exports = {
	css: {
		requireModuleExtension: false,
		loaderOptions: {
			css: {
				modules: {
					localIdentName: '[name]-[hash:base64:5]'
				},
				localsConvention: 'camelCaseOnly'
			}
		}
	}
};