import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import MovieCard from "../MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // fetch movies data from API or database
    const dummyMovies = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
      { id: 3, title: "Movie 3" },
    ];
    setMovies(dummyMovies);
  }, []);
  return (
    <>
      <header>
        <hi>Home Page</hi>
      </header>
      <main>
        <ul>
      {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard title={movie.title} id={movie.id} />
            </li>
          ))}
          </ul>
      </main>
    </>
  );
};

export default Home;
