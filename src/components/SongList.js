import React, { useState } from 'react';

const SongList = () => {

    const [songs, setSongs] = useState([
        { title: 'Numan' },
        { title: 'Ahmed' },
        { title: 'NumDev' },
    ]);

    const [newSong, setNewSong] = useState('');

    const addSong = () => {
        if (newSong !== '') {
            setSongs([{ title: newSong }, ...songs]);
            setNewSong('');
        }else{
            alert('Enter New Song Name');
        }
    }

    return (
        <div className="song-list">
            <input type="text"
                name="setNewSong"
                value={newSong}
                onChange={(e) => setNewSong(e.target.value)}
                placeholder="New Song..."
            />
            <button onClick={addSong}>Add Song</button>
            <ul>
                {songs.map((song, index) => {
                    return (
                        <li key={index}>{song.title}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default SongList;
