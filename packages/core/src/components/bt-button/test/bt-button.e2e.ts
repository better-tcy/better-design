import { newE2EPage } from '@stencil/core/testing'

describe('bt-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<bt-button></bt-button>')

    const element = await page.find('bt-button')
    expect(element).toHaveClass('hydrated')
  })
})
