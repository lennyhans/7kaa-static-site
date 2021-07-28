import versions from './_versions';
const {title, slug} = versions[0];

const contents = JSON.stringify( {title, slug} );

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}