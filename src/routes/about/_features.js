import { getContentFromFolder } from '../../node_modules/contentLoader';

const folderName = "about"

const getAllFeatures = () => getContentFromFolder(folderName);

const features = getAllFeatures();

export default features;
