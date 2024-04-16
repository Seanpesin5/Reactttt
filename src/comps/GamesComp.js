import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Games from './Games';

function GamesComp() {
    let [searchParams] = useSearchParams();
    const yearQuery = searchParams.get('year');
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        Games.fetchGamesByYear(yearQuery)
            .then(data => {
                if (yearQuery) {
                    
                    const filteredGames = data.filter(game => game.Year.toString() === yearQuery);
                    setGames(filteredGames);
                } else {
                    
                    setGames(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching games:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [yearQuery]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{yearQuery ? `Games from ${yearQuery}` : 'All Games'}</h1>
            <ul>
                {games.map((game, index) => (
                    <li key={index}>
                        
                        <a href={game.GameLink} target="_blank" rel="noopener noreferrer">{game.Game}</a> 
                        ({game.Genre}, {game.Year})
                        <br />
                        Developer: <a href={game.DevLink} target="_blank" rel="noopener noreferrer">{game.Dev}</a>
                        <br />
                        Publisher: <a href={game.PublisherLink} target="_blank" rel="noopener noreferrer">{game.Publisher}</a>
                        <br />
                        Platform: <a href={game.PlatformLink} target="_blank" rel="noopener noreferrer">{game.Platform}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GamesComp;