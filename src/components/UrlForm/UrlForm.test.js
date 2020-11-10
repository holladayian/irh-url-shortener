import  UrlForm  from './UrlForm.js';
import { screen, render } from '@testing-library/react';
import React from 'react';
import userEvent from  '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';


describe('UrlContainer', () => {

  it('1. When the Form is rendered, make sure that the correct elements render on the dom', () => {
    
    render(
      <UrlForm postUrl={jest.fn()}/>
    )


    const titleInput = screen.queryByTestId('title-input');
    const long_urlInput = screen.queryByTestId('long_url-input');
    const formButton = screen.queryByTestId('form-button');
    
    expect(titleInput).toBeInTheDocument();
    expect(long_urlInput).toBeInTheDocument();
    expect(formButton).toBeInTheDocument();


  })

  it('2. When the inputs change, make sure that the form elements hold the correct values', () => {
    
    render(
      <UrlForm postUrl={jest.fn()}/>
    )


    const titleInput = screen.queryByTestId('title-input');
    const long_urlInput = screen.queryByTestId('long_url-input');
    const formButton = screen.queryByTestId('form-button');
    
    expect(titleInput).toBeInTheDocument();
    expect(long_urlInput).toBeInTheDocument();
    expect(formButton).toBeInTheDocument();

    userEvent.type(titleInput,'mock title input');
    expect(titleInput.value).toEqual('mock title input');

    userEvent.type(long_urlInput,'mock url input');
    expect(long_urlInput.value).toEqual('mock url input');
  })

  it('3. When the form is submitted, make sure any appropriate functions are called', () => {
    const mockPost = jest.fn()
    render(
      <UrlForm postUrl={mockPost}/>
    )


    const titleInput = screen.queryByTestId('title-input');
    const long_urlInput = screen.queryByTestId('long_url-input');
    const formButton = screen.queryByTestId('form-button');

    userEvent.type(titleInput,'mock title input');

    userEvent.type(long_urlInput,'mock url input');

    userEvent.click(formButton);

    expect(mockPost).toHaveBeenCalled()
  })
})