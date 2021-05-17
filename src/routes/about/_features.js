import fs from 'fs';
import path from 'path'
import frontMatter from 'front-matter';
import marked from 'marked';

const folderName = "./src/content/about/features"

//TODO: Export fn to allow generic usage (with front-matter, grey-matter, yaml-fromat, etc)
const getAllFeatures = () =>
	fs.readdirSync(folderName)
		.sort(getNumberPart)
		.map(fileName => {
		const feature = fs.readFileSync(path.resolve(folderName, fileName), "utf-8");
		const { attributes, body } = frontMatter(feature);
		const { title, slug } = attributes
		return {
			title, slug, html: marked(body)
		}
});

//TODO: Export fn to allow generic usage
const getNumberPart = (a,b) => {
	const aNum = Number(a.split("-")[0])
	const bNum = Number(b.split("-")[0])
	return aNum < bNum ? -1 : 1
}

const features = getAllFeatures();

features.forEach(feature => {
	feature.html = feature.html.replace(/^\t{3}/gm, '');
});

export default features;
