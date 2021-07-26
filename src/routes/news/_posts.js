import { getContentFromFolder } from '../../node_modules/contentLoader';

const folderName = "news"

const posts = getContentFromFolder(folderName);

export default posts;
