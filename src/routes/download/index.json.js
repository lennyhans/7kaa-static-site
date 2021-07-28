import versions from './_versions';

const contents = JSON.stringify(versions.map(v => v));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}