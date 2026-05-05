import { useEffect, useState } from "react";
import styles from "../styles/profileSongList.module.css";

function ProfileSongList() {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);

    // Get existing songs
    useEffect(() => {
        async function fetchSongs() {
            try {
                const res = await fetch("http://localhost:5000/songs");
                const data = await res.json();
                setSongs(data);
            } catch (error) {
                console.error("Failed to fetch songs:", error);
            }
        }

        fetchSongs();
    }, []);

    async function handleFileChange(e) {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("song", file);

        const res = await fetch("http://localhost:5000/songs/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        setSongs(prevSongs => [
            ...prevSongs,
            {
                filename: data.filename,
                originalname: data.originalname,
                url: data.url
            }
        ]);

    }

    return (
        <>
            <h2 className={styles.songListHeader}>Songs</h2>

            <input
                type="file"
                accept=".mp3,.wav,.flac"
                onChange={handleFileChange}
            />

            <ul className={styles.songList}>
                {songs.map((song) => (
                    <li
                        key={song.filename}
                        onClick={() => setCurrentSong(song.url)}>{song.originalname}
                    </li>
                ))}
            </ul>

            {currentSong && (
                <audio className={styles.audioPlayer}
                    controls
                    autoPlay
                    src={currentSong}

                />
            )}
        </>
    );
}

export default ProfileSongList;
