import React, { useEffect, useState } from 'react';

const SongList = () => {

    const [songs, setSongs] = useState([
        { title: 'Numan' },
        { title: 'Ahmed' },
        { title: 'NumDev' },
    ]);
    const [newSong, setNewSong] = useState('');
    const [salary, setSalary] = useState(15000);

    useEffect(() => {
        console.log('Use Effect Ran for Songs...');
    }, [songs]);

    useEffect(() => {
        console.log('Use Effect Ran for Salary...');
    }, [salary]);

    
    const addSong = (e) => {
        e.preventDefault();
        if (newSong !== '') {
            setSongs([{ title: newSong }, ...songs]);
            setNewSong('');
        } else {
            alert('Enter New Song Name');
        }
    }

    return (
        <div className="song-list">
            <form onSubmit={addSong}>
                <input type="text"
                    name="setNewSong"
                    value={newSong}
                    onChange={(e) => setNewSong(e.target.value)}
                    placeholder="New Song..."
                />
                <button type="submit">Add Song</button>
            </form>
            <ul>
                {songs.map((song, index) => {
                    return (
                        <li key={index}>{song.title}</li>
                    )
                })}
            </ul>

            <h3>Salary: {salary}</h3>
            <button onClick={() => setSalary(salary + 5000)}>Increase Salary</button>
        </div>
    );
}

export default SongList;
