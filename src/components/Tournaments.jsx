import React, { useEffect, useState } from "react";
import axios from "axios";

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get("https://lichess.org/api/tournament");
        setTournaments(response.data.started);
      } catch (error) {
        console.error("Failed to fetch tournaments", error);
      }
    };
    fetchTournaments();
  }, []);

  return (
    <div>
      <h2>Active Tournaments</h2>
      {tournaments.length > 0 ? (
        tournaments.map((tournament) => (
          <div key={tournament.id}>
            <p>{tournament.fullName}</p>
            <p>Starts: {new Date(tournament.startsAt).toLocaleString()}</p>
            <p>Status: {tournament.status}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Tournaments;
