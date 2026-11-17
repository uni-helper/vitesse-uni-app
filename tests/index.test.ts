import { beforeAll, describe, expect, it } from 'vitest'

describe('test title', () => {
  let page: Page
  beforeAll(async () => {
    page = await program.currentPage()
    await page.waitFor(3000)
  })

  it('check uni-helper logo label', async () => {
    const el = await page.$('.uni-helper-logo__label')
    const titleText = await el.text()
    expect(titleText).toEqual('uni-helper')
  })
})
