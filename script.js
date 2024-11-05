//your code here
() => {
    // Verify the heading text is present
    cy.contains('h2', '3 Random Audios');
    
    // Check that there are three audio elements with controls and specific sources
    cy.get('audio').should($audios => {
        // Ensure there are exactly three audio elements
        expect($audios).to.have.length(3);

        // Ensure each audio element has the controls attribute
        $audios.each((i, el) => {
            expect(el).to.have.attr('controls');
        });

        // Check that each audio element has the expected src attributes in the correct order
        const expectedSrcs = [
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
            'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
            'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
        ];

        const srcs = $audios.map((i, el) => Cypress.$(el).attr('src')).get();
        expect(srcs).to.deep.equal(expectedSrcs);
    });
}
