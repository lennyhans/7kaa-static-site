import { getContentFromFolder } from '../../node_modules/contentLoader';

const folderName = "community/strategies"

const list = getContentFromFolder(folderName);
list.filter(e => 
    e !== undefined && 
    e.authors !== undefined && 
    e.authors.includes("[") && 
    e.authors.includes("]") && 
    e.authors.includes("'"))
.forEach( e => e.authors = JSON.parse(e.authors))
const contents = JSON.stringify(list)

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}