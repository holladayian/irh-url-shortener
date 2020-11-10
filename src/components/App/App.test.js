import  { App }  from './App.js';
import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from  '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { fetcher } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('App', () => {
  
  beforeEach(() => {
    let mockUrls= {
      urls: ['test0', 'test1', 'test2']
    } 
    fetcher.getUrls.mockResolvedValueOnce(mockUrls);
  })

  it('1. When the App is rendered, make sure any UI specific to the App component renders as well', () => {
    render(
      <App />
    )

    const appTest = screen.queryByTestId('app');
  
    expect(appTest).toBeInTheDocument();

    const titleInput = screen.queryByTestId('title-input');
    const long_urlInput = screen.queryByTestId('long_url-input');
    const formButton = screen.queryByTestId('form-button');
    
    expect(titleInput).toBeInTheDocument();
    expect(long_urlInput).toBeInTheDocument();
    expect(formButton).toBeInTheDocument();

  })

  it('2. When the App renders, make sure that any urls on the server are added to the dom', async() => {
    render(
      <App />
    )
    
    const m0all = await waitFor(() => screen.getByTestId('all-0'));
    const m1all = await waitFor(() => screen.getByTestId('all-1'));
    const m2all = await waitFor(() => screen.getByTestId('all-2'));
    
    
    expect(m0all).toBeInTheDocument();
    expect(m1all).toBeInTheDocument();
    expect(m2all).toBeInTheDocument();
    
  })
  
  it('3. When the App renders, make sure that users can fill out the form, submit the form, and see a new url added to the DOM', async() => {
    fetcher.giveUrls = jest.fn()
    render(
      <App />
      )
      
      
      const titleInput = screen.queryByTestId('title-input');
      const long_urlInput = screen.queryByTestId('long_url-input');
      const formButton = screen.queryByTestId('form-button');
      
      userEvent.type(titleInput,'mock title input');
      
      userEvent.type(long_urlInput,'mock url input');
      
      userEvent.click(formButton);
      
      expect(fetcher.giveUrls).toHaveBeenCalled();
      
      let mockUrls2 = {
        urls: ['test0', 'test1', 'test2', 'test3']
      }
      
      fetcher.getUrls.mockResolvedValueOnce(mockUrls2);
      
      const m3all = await waitFor(() => screen.getByTestId('all-3'));
      expect(m3all).toBeInTheDocument();
      // const m0all = await waitFor(() => screen.getByTestId('all-0'));
      // const m1all = await waitFor(() => screen.getByTestId('all-1'));
      // const m2all = await waitFor(() => screen.getByTestId('all-2'));
      
      
      // expect(m0all).toBeInTheDocument();
      // expect(m1all).toBeInTheDocument();
      // expect(m2all).toBeInTheDocument();
      
  })
})