import React from 'react';
import PropTypes from 'prop-types';

export const Storytile = ({ 
    className,
    title,
    standfirst,
    type,
    tag,
    tagurl,
    imageurl,
    imagealt,
    children
}) => {
  return (
    <article className={className}>
      {(type || tag) && (
        <div className="meta">
          {type && <strong>{type}</strong>}
          {tag && <a href={tagurl}>{tag}</a>}
        </div>
      )}
      {title && <h3>{title}</h3>}
      {imageurl && <img src={imageurl} alt={imagealt} />}
      {standfirst && <p>{standfirst}</p>}
      <time>17 minutes ago</time>
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

Storytile.defaultProps = {
    title: undefined,
    standfirst: undefined,
    type: undefined,
    tag: undefined,
    tagurl: '#',
    imageurl: undefined,
    imagealt: 'Alt text',
};
