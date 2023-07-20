const scraperObject = {
	url: 'https://en.wikipedia.org/wiki/Computer',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
        // Wait for the required DOM to be rendered
		await page.waitForSelector('.mw-page-container');
		// Get the link to all the required books


		let urls = [];
		let links = document.querySelectorAll('p > a');

		for (link in links){
			urls.push(link).href 
		}
		console.log(urls);
		
	}
};


module.exports = scraperObject;

