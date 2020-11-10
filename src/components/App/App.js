import React, { Component } from 'react';
import './App.css';
import { fetcher } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount = async() => {
    await this.getUrls()
  }
  
  getUrls = async() => {
    const goturls = await fetcher.getUrls()
    this.setState({ urls: goturls.urls })
    console.log('getUrls this.state', this.state)

  }

  postUrl = async(desiredUrl) => {
    console.log('desiredUrl', desiredUrl)
    if (desiredUrl.title && desiredUrl.long_url) {
      console.log('thats a w')
      await fetcher.giveUrls(desiredUrl)
      await this.getUrls()
      // this.setState({ urls: [...this.state.urls, desiredUrl]})
      console.log(this.state)
    }
  }

  render() {
    return (
      <main className="App" data-testid='app'>
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postUrl={this.postUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
