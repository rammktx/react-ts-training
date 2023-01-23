import * as React from 'react';
import './style.css';

export default function Post(props) {
  return (
    <div className="center">
      <h1>{props.post.title}</h1>
      <p>by {props.post.author}</p>
      <p>{props.post.body}</p>
      <h3>Comments:</h3>
      <p> {props.post.comments[0]} </p>

      {/* props.post.comments.map((comment) => (
        <p> {comment} </p>
      )) */}
    </div>
  );
}
