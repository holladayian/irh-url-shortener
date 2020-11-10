import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  const urlEls = props.urls.map((url, i) => {
    return (
      <div className="url" data-testid={`all-${i}`} key={i}>
        <h3 data-testid={`title-${i}`} >{url.title}</h3>
        <a href={url.short_url} target="blank" data-testid={`short-${i}`}>{url.short_url}</a>
        <p data-testid={`long-${i}`}>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
