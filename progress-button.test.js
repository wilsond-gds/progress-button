/* eslint-env jest */

const configPaths = require('../../../../config/paths.json')
const PORT = configPaths.ports.test
const baseUrl = 'http://localhost:' + PORT

// http://localhost:3000/components/progress-button/preview
// test: button content changes when link is clicked
describe('/components/progress-button', () => {
  it('changes the button text when the space key is pressed', async () => {
    await page.goto(baseUrl + '/components/progress-button/preview', { waitUntil: 'load' })
    const $initialButtonText = await page.evaluate(() => document.querySelector('button').textContent)
    await page.click('button', { delay: 1000 })
    const $clickedButtonText = await page.evaluate(() => document.querySelector('button').textContent)
    expect($initialButtonText).not.toBe($clickedButtonText)
  })
  it('changes the button text again after a pause', async () => {
    await page.goto(baseUrl + '/components/progress-button/preview', { waitUntil: 'load' })
    await page.click('button', { delay: 1000 })
    const $initialButtonText = await page.evaluate(() => document.querySelector('button').textContent)
    await page.click('button', { delay: 8000 })
    const $clickedButtonText = await page.evaluate(() => document.querySelector('button').textContent)
    expect($initialButtonText).not.toBe($clickedButtonText)
  })
})
