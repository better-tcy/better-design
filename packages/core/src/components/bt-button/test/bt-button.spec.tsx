import { newSpecPage } from '@stencil/core/testing'
import { BtButton } from '../bt-button'

describe('bt-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BtButton],
      html: `<bt-button></bt-button>`
    })
    expect(page.root).toEqualHtml(`
      <bt-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bt-button>
    `)
  })
})
