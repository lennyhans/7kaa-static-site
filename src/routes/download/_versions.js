import { getContentFromFolder } from '../../node_modules/contentLoader';
import { toHumanRelativeTime } from '../../node_modules/humanReadableUtilities';


const folderName = "download/oss"
// The more recent will be used as the latest
const versions = getContentFromFolder(folderName).sort((a,b) => b.order - a.order);
const dateRegex = /\{(\d\d\d\d-\d\d-\d\d)\}/g;

const dateReplacer = (match, p1) => dateWithTitle(new Date(p1)) 



const dateWithTitle = (dateObject) => {
    return `<small title="${dateObject.toLocaleDateString()}">${toHumanRelativeTime(dateObject)}</small>`
}

versions.forEach( e => {
    //console.log(e.html)
    // const matches = e.html.matchAll(dateRegex);

    // for (const match of matches) {
    //     console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
    // }

    e.html = e.html.replace(dateRegex, dateReplacer);
    //console.log(e.html)
})
export default versions;
