import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';
import App from '../App.svelte';
import Button from '../lib/Btn.svelte';

test('render App', () => {
  const { getByText } = render(App, { name: 'World' });

  expect(getByText('Hello World!')).toBeInTheDocument();
});

test('render Button', () => {
  const { getByText } = render(Button, { name: 'World' });

  expect(getByText('Hello World!')).toBeInTheDocument();
});

test('Button click event', async () => {
  const { getByText } = render(Button, { name: 'World' });
  const button = getByText('Button');
  await fireEvent.click(button);

  expect(button).toHaveTextContent('Button Clicked');
});