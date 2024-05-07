import { useEffect, useState } from "react";
import NavBar from "../NavBar";

const directors = [
  {
    id: 1,
    name: "Director 1",
    movies: ["Movie 1", "Movie 2", "Movie 3"],
  },
  {
    id: 2,
    name: "Director 2",
    movies: ["Movie 4", "Movie 5", "Movie 6"],
  },
  {
    id: 3,
    name: "Director 3",
    movies: ["Movie 7", "Movie 8", "Movie 9"],
  },
];

function Directors() {
  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
        </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
