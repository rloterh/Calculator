import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('checks if Button component renders correctly', () => {
  const handleClick = () => {
    '';
  };

  test('should render Button correctly', () => {
    const tree = renderer
      .create(<Button label="" handleClick={handleClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should display correct value on the screen', () => {
    render(<Button label="+" handleClick={handleClick} />);
    const result = screen.getByText('+');

    expect(result).toBeInTheDocument();
  });
});
