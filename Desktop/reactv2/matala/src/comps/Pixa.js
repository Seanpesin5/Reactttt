import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function Pixa() {
    const [searchParams] = useSearchParams();
    const initialQuery = searchParams.get("s") || "cats";
    const [query, setQuery] = useState(initialQuery);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://pixabay.com/api/?key=43766701-94473b89ad7e0bf2bc89651f0&q=${query}&image_type=photo&pretty=true`
        )
            .then((response) => response.json())
            .then((data) => {
                setImages(data.hits.slice(0, 4));
                setLoading(false);
            });
    }, [query]);

    const handleSearch = () => {
        navigate(`/pixa?s=${query}`);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for images..."
            />
            <button onClick={handleSearch}>Search</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {images.map((image) => (
                        <a
                            href={image.largeImageURL}
                            key={image.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ margin: '10px' }}
                        >
                            <img
                                src={image.webformatURL}
                                alt={image.tags}
                                style={{ width: '200px', height: '150px' }}
                            />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Pixa;