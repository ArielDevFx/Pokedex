import React from "react";
import { Link } from "react-router-dom";

const Pokemon404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Link to="/pokedex">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eadfc931-4f59-4d25-98f5-a28143f82a57/dck3h1w-d748e173-aaae-4711-babf-4c51d826a131.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VhZGZjOTMxLTRmNTktNGQyNS05OGY1LWEyODE0M2Y4MmE1N1wvZGNrM2gxdy1kNzQ4ZTE3My1hYWFlLTQ3MTEtYmFiZi00YzUxZDgyNmExMzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BO0AkQOVK659IkbWUxJVUeZ3SaCaum_m6DuahTkq59w"
          alt=""
        />
      </Link>
      <h1>Hey bro no found your pokemon ok? 😾</h1>
      <h3>Touch the pokeball please 🌝</h3>
    </div>
  );
};

export default Pokemon404;
