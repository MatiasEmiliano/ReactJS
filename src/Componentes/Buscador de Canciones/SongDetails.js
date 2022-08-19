import React, { useState, useEffect } from 'react';

function SongDetails({songDetails,artistDetails,search}) {
    


    return (
        <div>
            <h3>Artist & Song Details</h3>
            {artistDetails && <img src={artistDetails.strArtistThumb} />}
            <p>{artistDetails.strBiographyES}</p>
            <h3>{search.song}</h3>
            <p style={{whiteSpace:"pre-wrap"}}>{songDetails}</p>
        </div>
    );
}

export default SongDetails;