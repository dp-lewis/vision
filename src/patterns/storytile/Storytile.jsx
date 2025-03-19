import React from 'react';
import PropTypes from 'prop-types';

export const Storytile = ({ 
    title = 'Story title', 
    standfirst = 'Standfirst for story', 
    type = 'Type', 
    tag = 'Tag', 
    tagurl = '#', 
    imageurl = '#', 
    imagealt = 'Alt text',
    children
}) => {
  return (
    <article>
        <div>{ type } <a href={tagurl}>{tag}</a></div>
        <h3>{ title }</h3>
        <img src={ imageurl} alt={imagealt} />
        <p>{ standfirst }</p>
        { children }
    </article>
  );
};

Storytile.propTypes = {
    title: PropTypes.string,
    standfirst: PropTypes.string,
    type: PropTypes.string,
    tag: PropTypes.string,
    tagurl: PropTypes.string,
    imageurl: PropTypes.string,
    imagealt: PropTypes.string,
    children: PropTypes.node,
};
