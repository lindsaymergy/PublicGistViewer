import './App.css';
import useFetch from '../hooks/useFetch';
import Gists from './Gists';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Gist from './Gist';

export default function App() {
  const { data, setData } = useFetch();

  return (
    <Router>
      <div className="App">
        <input
          type="text"
          placeholder="Enter a Github username"
          value={data.userId}
          onChange={(e) => setData({ ...data, userId: e.target.value })}
        />
        <br />
        <Routes>
          <Route
            path="/"
            element={
              data.userId && (
                <Gists gists={data.results} />
              )
            }
          />
          <Route
            path="/gist/:id"
            element={<Gist />}
          />
          <Route
            path="/*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}