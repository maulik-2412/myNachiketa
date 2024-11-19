import React, { useEffect, useState } from "react";
import axios from "axios";

function Leaderboards() {
  const [leaderboards, setLeaderboards] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const response = await axios.get("https://cors-anywhere.herokuapp.com/https://lichess.org/player");
        setLeaderboards(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Failed to fetch leaderboards", error);
        setLoading(false); 
      }
    };
    fetchLeaderboards();
  }, []);

  return (
    <div>
      <h2>Leaderboards</h2>
      {loading ? (
        <p>Loading...</p>
      ) : Object.keys(leaderboards).length > 0 ? (
        Object.entries(leaderboards).map(([category, players]) => (
          <div key={category}>
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)} Leaderboard</h3>
            <ul>
              {players.map((player, index) => (
                <li key={player.id || index}>
                  {index + 1}. {player.username} - {player.rating}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No data available...</p>
      )}
    </div>
  );
}

export default Leaderboards;


