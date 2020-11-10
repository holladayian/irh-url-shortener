import React, { Component } from 'react';
import { fetcher } from '../../apiCalls';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      long_url: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.postUrl(this.state)
    console.log(this.state)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
          data-testid='title-input'
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='long_url'
          value={this.state.long_url}
          onChange={e => this.handleNameChange(e)}
          data-testid='long_url-input'
        />

        <button onClick={e => this.handleSubmit(e)} data-testid='form-button'>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
