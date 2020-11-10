import  UrlForm  from './UrlForm.js';
import { screen, render } from '@testing-library/react';
import React from 'react';
import userEvent from  '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';


describe('UrlContainer', () => {

  it('1. should render the urls', () => {
    
    render(
      <UrlForm postUrl={jest.fn()}/>
    )


    const titleInput = screen.queryByTestId('title-input');
    const long_urlInput = screen.queryByTestId('long_url-input');
    const formButton = screen.queryByTestId('form-button');
    
    expect(titleInput).toBeInTheDocument();
    expect(long_urlInput).toBeInTheDocument();
    expect(formButton).toBeInTheDocument();

    // sad
    
    const m3all = screen.queryByTestId('all-3');
    expect(m3all).toEqual(null);

  })
})