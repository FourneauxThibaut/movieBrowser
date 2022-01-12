import './App.css';
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch("https://api.themoviedb.org/3/movie/76341?api_key=9b5c393b64cd9f220048a057a0fadf18");

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);

  return (
    <div className="App">
      <h1>{data?.title}  ({data?.status}) </h1>
    </div>
  );
}

export default App;
