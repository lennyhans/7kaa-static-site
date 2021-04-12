import versions from './_versions';

const contents = JSON.stringify(versions.map(v => {
	return {
		title: v.title,
        slug : v.slug,
        description: v.description,
		releaseNotes: v.releaseNotes,
		date : v.date,
		releases : v.releases
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}