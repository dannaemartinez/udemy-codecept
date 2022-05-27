Feature('Example Test Suite');

Scenario('my first test', ({ I, examplePage }) => {
    I.amOnPage('http://example.com/')
    // I.seeElement('h1')
    examplePage.assertTitle()
    I.dontSeeElement('.error')
});
// Scenario('my second test', ({ I }) => {
//     I.amOnPage('http://example.com/')
//     I.seeElement('h1')
//     I.dontSeeElement('.error')
// });
// Scenario('my third test', ({ I }) => {
//     I.amOnPage('http://example.com/')
//     I.seeElement('h1')
//     I.seeElement('.error')
// });