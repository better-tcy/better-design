import { newSpecPage } from '@stencil/core/testing';
import { TestCom } from '../test-com';

describe('test-com', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestCom],
      html: `<test-com></test-com>`,
    });
    expect(page.root).toEqualHtml(`
      <test-com>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-com>
    `);
  });
});
