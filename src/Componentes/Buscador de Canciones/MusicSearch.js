import React, { useState, useEffect } from 'react';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loader from './Loader';
import "./Loader.css";

function MusicSearch() {
    const [search, setSearch] = useState(null);
    const [artistDetails, setArtistDetails] = useState(null);
    const [songDetails, setSongDetails] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        if (search === null) return
        const fetchAsync = async () => {
            setLoading(true)
            await fetch(`https://theaudiodb.com/api/v1/json/2/search.php?s=${search.artist}`).
                then(response => response.json()).
                then((data) => {
                    console.log(data) 
                    setArtistDetails(data.artists[0])
                })
            await fetch(`https://api.lyrics.ovh/v1/${search.artist}/${search.song}`).
                then(response => response.json()).
                then((data) => { 
                    console.log(data)
                    setSongDetails(data.lyrics) 
                })
            setLoading(false)
        }
        fetchAsync()
    }, [search]);


    return (
        <div>
            <h2>Buscador de Canciones</h2>
            <SongForm setSearch={setSearch} />
            {loading && <Loader />}
            {artistDetails && songDetails && !loading && <SongDetails search={search} songDetails={songDetails} artistDetails={artistDetails} />}
        </div>
    );
}

export default MusicSearch;
