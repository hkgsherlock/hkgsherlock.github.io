const withImages = require('next-images');

module.exports = withImages({
	exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/index' },
        }
    },
});