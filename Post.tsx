import * as React from 'react';
import './style.css';

import Comment from './Comment';
import Author from './Author';

export default function Post(props) {
  return (
    <div className="center">
      <h1>{props.post.title}</h1>
      {props.allAuthors.map((author) => (
        <Author body={author} />
      ))}
      <p>{props.post.body}</p>
      <h3>Comments:</h3>

      {props.post.comments.map((comment) => (
        <Comment body={comment} />
      ))}
    </div>
  );
}
