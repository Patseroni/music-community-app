import { useEffect, useRef, useState } from "react";
import styles from "../styles/profileSongList.module.css";
import type { Song } from "../../types/song";

function ProfileSongList() {
    const [songs, setSongs] = useState<Song[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [currentSong, setCurrentSong] = useState<string | null>(null);

    // Get existing songs
    useEffect(() => {
        async function fetchSongs() {
            try {
                const res = await fetch("http://localhost:5000/songs");
                const data = await res.json();
                setSongs(data.songs);
            } catch (error) {
                console.error("Failed to fetch songs:", error);
            }
        }

        fetchSongs();
    }, []);

    function handleButtonClick() {
        fileInputRef.current?.click();
    }

    async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("song", file);

        const res = await fetch("http://localhost:5000/songs/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        setSongs(prev => [
            ...prev,
            {
                filename: data.filename,
                originalname: data.originalname,
            }
        ]);
    }

    return (
        <>
            <h2 className={styles.songListHeader}>Songs</h2>

            {/* Upload button */}
            <button onClick={handleButtonClick}>Upload song</button>

            {/* Hidden file input */}
            <input
                type="file"
                accept=".mp3,.wav,.flac"
                ref={fileInputRef}
                onChange={handleFileChange}
                hidden
            />

            <ul className={styles.songList}>
                {songs.map((song) => (
                    <li
                        key={song.filename}
                        onClick={() => setCurrentSong(song.filename)}>{song.originalname}
                    </li>
                ))}
            </ul>

            {currentSong && (
                <audio className={styles.audioPlayer}
                    controls
                    autoPlay
                    src={`http://localhost:5000/uploads/${currentSong}`}

                />
            )}
        </>
    );
}

export default ProfileSongList;
