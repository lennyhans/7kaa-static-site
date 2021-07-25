import { getContentFromFolder } from '../../node_modules/contentLoader';

const folderName = "about/features"


const getAllFeatures = () => getContentFromFolder(folderName);

const features = getAllFeatures();

features.forEach(feature => {
	feature.html = feature.html.replace(/^\t{3}/gm, '');
});

export default features;
