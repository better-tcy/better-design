import { newE2EPage } from '@stencil/core/testing';

describe('test-com', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-com></test-com>');

    const element = await page.find('test-com');
    expect(element).toHaveClass('hydrated');
  });
});
