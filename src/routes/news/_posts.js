// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Seven Kingdoms v2.15.4',
		slug: 'seven-kingdoms-v2-15-4',
		author : 'the3dfxdude',
		date : '2020-07-04',
		summary : `
			<p> 
                Time for a new release! This fixes the issue with a freeze after playing long multiplayer games. If you had turned off CRC checking, please turn it back on. Other than that, multiplayer has been very smooth. This means we can start playing some bigger matches — I want to see them.
            </p>
		`,
		html: `
			<p> 
				Time for a new release! This fixes the issue with a freeze after playing long multiplayer games. If you had turned off CRC checking, please turn it back on. Other than that, multiplayer has been very smooth. This means we can start playing some bigger matches — I want to see them.
			</p>
			<p>
				The other thing fixed that put defenders at a major disadvantage was concerning the game not properly assigning the leader to the defending troop. Now soldiers can defend and get an attack bonus with their leader safe in the fort also keeping peace over the population. Maybe this will balance out the game better? We’ll see.
			</p>
			<p>
				Also, check out the trade report. The other thing we’d like to see is people paying attention to their markets. You can now find that caravan running between empty markets, or see the most productive markets, or set trade routes without moving around the map looking for something.
			</p>
			<p>
				See changes and comment in the forums
				<a href="/download/latest">Download</a>
			</p>
		`
	},

	{
		title: 'Ten Year Anniversary',
		slug: 'ten-year-anniversary',
		author : 'the3dfxdude',
		date : '2019-09-03',
		summary : `
			<p> 
                With the holiday here in the US, I had a much needed break from my daily job (the one that pays the bills), that I took the opportunity to get out for a change. I made it half way through the weekend, when I remember this past weekend was also the 10th year since this project website was created.
            </p>
		`,
		html: `
			<p> 
				With the holiday here in the US, I had a much needed break from my daily job (the one that pays the bills), that I took the opportunity to get out for a change. I made it half way through the weekend, when I remember this past weekend was also the 10th year since this project website was created.
			</p>
			<p>
				It’s been a pleasure with working with all of you to make this community more vibrant and active. Let’s see what’s in store in the not to far away future.
				Comment in the forums
			</p>
		`
	},
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
