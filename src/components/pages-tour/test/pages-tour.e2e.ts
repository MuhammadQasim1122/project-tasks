import { newE2EPage } from '@stencil/core/testing';

describe('pages-tour', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pages-tour></pages-tour>');

    const element = await page.find('pages-tour');
    expect(element).toHaveClass('hydrated');
  });
});
