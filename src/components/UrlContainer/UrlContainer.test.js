import { UrlContainer } from './UrlContainer.js';
import { screen, render } from '@testing-library/react';
import userEvent from  '@testing-library/user-event';


describe('UrlContainer', () => {

  it('1. should render the urls', () => {
    const urls = ['mock0', 'mock1', 'mock2' ]
    render(
      <UrlContainer urls={urls}/>
    )

    const m0all = screen.queryByTestId('all-0');
    const m0title = screen.queryByTestId('title-0');
    const m0short = screen.queryByTestId('short-0');
    const m0long = screen.queryByTestId('long-0');

    expect(m0all).toBeInTheDocument();
    expect(m0title).toBeInTheDocument();
    expect(m0short).toBeInTheDocument();
    expect(m0long).toBeInTheDocument();

    const m1all = screen.queryByTestId('all-1');
    const m1title = screen.queryByTestId('title-1');
    const m1short = screen.queryByTestId('short-1');
    const m1long = screen.queryByTestId('long-1');

    expect(m1all).toBeInTheDocument();
    expect(m1title).toBeInTheDocument();
    expect(m1short).toBeInTheDocument();
    expect(m1long).toBeInTheDocument();

    const m2all = screen.queryByTestId('all-2');
    const m2title = screen.queryByTestId('title-2');
    const m2short = screen.queryByTestId('short-2');
    const m2long = screen.queryByTestId('long-2');
    
    expect(m2all).toBeInTheDocument();
    expect(m2title).toBeInTheDocument();
    expect(m2short).toBeInTheDocument();
    expect(m2long).toBeInTheDocument();
    
    const m3all = screen.queryByTestId('all-3');
    expect(m3all).toEqual(null);

  })
})