import React from 'react';
import { Link } from 'react-router-dom';

export default function Gists({ gists }) {
  if (!gists || gists.length === 0) {
    return <div>No gists available yet.</div>;
  }

  return (
    <div>
      {gists.map((gist, i) => (
        <div key={i}>
          <h3>{gist.description}</h3>
          <p>Created at: {gist.created_at}</p>
          <Link to={`/gist/${gist.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
