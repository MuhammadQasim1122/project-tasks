import { newSpecPage } from '@stencil/core/testing';
import { PagesTour } from '../pages-tour';

describe('pages-tour', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PagesTour],
      html: `<pages-tour></pages-tour>`,
    });
    expect(page.root).toEqualHtml(`
      <pages-tour>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pages-tour>
    `);
  });
});
