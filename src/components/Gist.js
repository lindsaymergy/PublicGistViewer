import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Gist() {
  const { id } = useParams();
  const [gist, setGist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchGist = async () => {
      try {
        const response = await axios.get(`https://zapier-frontend-test-app.vercel.zapier-deployment.com/api/github/gists/${id}`);
        setGist(response.data);
      } catch (error) {
        console.error(error);
        setGist(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchGist();
    }
  }, [id]);

  const viewFileContent = (filename) => {
    setSelectedFile(gist.files[filename].content);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!gist) {
    return <div>No gist found for the provided ID</div>;
  }

  return (
    <div>
      <br />
      <Link to="/">Back to Main Page</Link>
      <h3>Files:</h3>
      <div>
        {Object.keys(gist.files).map((filename) => (
          <div key={filename}>
            {filename}
            <button onClick={() => viewFileContent(filename)}>View Content</button>
          </div>
        ))}
      </div>
      {selectedFile && (
        <div>
          <h3>Selected File Content:</h3>
          <pre>
            <code>
              {selectedFile}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
