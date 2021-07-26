import summary from './_summary.js';

const contents = JSON.stringify(summary.map(s => s));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}