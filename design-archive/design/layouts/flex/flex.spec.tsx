import React from 'react';
import { render } from '@testing-library/react';
import { Flex } from './flex.js';

describe('Flex', () => {
  it('should render its children', () => {
    const { getByText } = render(
      <Flex>
        <div>Item 1</div>
      </Flex>
    );
    const rendered = getByText('Item 1');
    expect(rendered).toBeInTheDocument();
  });

  it('should apply flex styles via props', () => {
    const { container } = render(<Flex flexDirection="column" />);
    const flexElement = container.firstChild as HTMLElement;
    expect(flexElement.style.flexDirection).toBe('column');
  });

  it('should apply custom styles via style prop', () => {
    const { container } = render(<Flex style={{ backgroundColor: 'red' }} />);
    const flexElement = container.firstChild as HTMLElement;
    expect(flexElement.style.backgroundColor).toBe('red');
  });
});