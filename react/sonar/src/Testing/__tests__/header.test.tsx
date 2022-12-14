import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Headers/Headers';

test('renders learn react link', () => {
  render(<Header title="Hello World"/>);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});


describe("function1",()=>{
  it('renders learn react link', () => {
    render(<Header title="Hello World"/>);
    const linkElement = screen.getByRole("heading",{name:"Hello World"});
    expect(linkElement).toBeInTheDocument();
  });


  it('renders learn react link', () => {
    render(<Header title="Hello World"/>);
    const linkElement = screen.getByTestId("test");
    expect(linkElement).toBeInTheDocument();
  });



})
describe("function2",()=>{

  it('renders learn react link', async () => {
    render(<Header title="Hello World"/>);
    const linkElement = await screen.findByText("Hello World");
    expect(linkElement).toBeInTheDocument();
  });

  it('renders learn react link',  () => {
    render(<Header title="Hello World"/>);
    const linkElement =  screen.getAllByRole("heading");
    expect(linkElement[0]).toBeInTheDocument();
  });



})



