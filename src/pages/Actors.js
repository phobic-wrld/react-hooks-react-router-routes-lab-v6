import { useEffect, useState } from "react";
import NavBar from "../NavBar";

const actors = [
  {
    id: 1,
    name: "Actor 1",
    movies: ["Movie 1", "Movie 2", "Movie 3"],
  },
  {
    id: 2,
    name: "Actor 2",
    movies: ["Movie 4", "Movie 5", "Movie 6"],
  },
  {
    id: 3,
    name: "Actor 3",
    movies: ["Movie 7", "Movie 8", "Movie 9"],
  },
];

function Actors() {
  return (
    <>
       <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
     );
    };
    
    export default Actors;
