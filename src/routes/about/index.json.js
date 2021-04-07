import features from './_features.js';

const contents = JSON.stringify(features.map(feature => {
	return {
		title: feature.title,
        slug : feature.slug,
        html: feature.html
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}