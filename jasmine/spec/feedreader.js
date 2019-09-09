$(function () {
    describe('RSS Feeds', function () {

        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //Loops through allFeeds and ensures each feed has a URL defined
        it('are defined', () => {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
            }
        })

        //Loops through allFeeds and ensures each feed has a name defined
        it('are defined', () => {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
            }
        })
    });

    describe('The menu', function () {
        //Tests to see if the menu is hidden by default
        it('menu is hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

        //Tests to see if the menu is toggled when clicked
        it('menu is toggled when clicked', () => {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    });

    describe('Initial Entries', function () {
        beforeEach(done => {
            loadFeed(0, done);
        })
        //Tests to see if there is at least 1 entry.
        it('There is at least 1 .entry element', () => {
            const feed = $('.feed');
            const entry = $('.entry');
            expect(feed.length > 0).toBe(true);
            expect(entry.length > 0).toBe(true);
        })
    });

    //Tests to see if content changes on new feed load
    describe('New Feed Selection', function () {
        let feed1, feed2;
        beforeEach(done => {
            //Load a feed, set feed1 equal to the first post
            loadFeed(1, () => {
                feed1 = document.querySelector('.feed').children[0];
                //load a second feed, set feed2 equal to the first post
                loadFeed(2, () => {
                    feed2 = document.querySelector('.feed').children[0];
                    done();
                })
            });
        })
        //Test to see if feed1 and feed2 have the same first post to ensure a new feed was loaded.
        it('Content changes when loading a new feed', () => {
            expect(feed1 !== feed2).toBe(true);
        })
    })

}());