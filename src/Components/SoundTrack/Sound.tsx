import React, { useState, useRef } from 'react';
import './Sound.css'; // Asegúrate de que el nombre del archivo CSS sea correcto y coincide con tu proyecto
import { Link } from "react-router-dom";


const songs = [
  {
    id: 1,
    artist: 'Harry Potter',
    title: 'Hedwing Theme',
    duration: '5:09 min',
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696364637/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max_nsvmxv.jpg',
    audioSource: 'https://res.cloudinary.com/dq2tfglqq/video/upload/v1696364407/Hedwig_s_Theme_wtHra9tFISY_140_wlb7q5.mp3',
  },
  {
    id: 2,
    artist: 'James Horner',
    title: 'Apollo 13',
    duration: '2:42',
    albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695815023/Apollo_13_Soundtrack_ooas1d.jpg',
    audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695885293/01_-_Main_Title_-_James_Horner_-_Apollo_13_WTSmtKDvnWQ_cpaipp.mp3',
  },
  {
    id: 3,
    artist: 'John Williams',
    title: 'Jurassic Park',
    duration: '2:49',  
    albumCover:'https://res.cloudinary.com/doft9ylq1/image/upload/v1695889328/JurassicParkCollection_oikiw7.jpg',
    audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695886048/The_Raptor_Attack_6kllnsihoUs_rjhav7.mp3',
  },

      {
        id: 4,
        artist: ' Michael Giacchino',
        title: 'Up',
        duration: '4:10',
        albumCover:'https://res.cloudinary.com/doft9ylq1/image/upload/v1695889732/up_znxm97.jpg',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695886760/UP_OST_-_03_-_Married_Life_gvQB7tMB-jI_1_incfac.mp3',
      },
      {
        id: 5,
        artist: 'Hans Zimmer',
        title: 'Origen',
        duration: '4:34',
        albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892118/el-origen_bxsbrl.webp',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695887972/Hans_Zimmer_-_Time_Inception__RxabLA7UQ9k_ycrlah.mp3',
      },
      {
        id: 6,
        artist: 'Alexandre Desplat',
        title: 'El escritor',
        duration: '1:43',
        albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892496/El_escritor_asmjfw.jpg',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695888225/The_Ghost_Writer_H9G1Eok4zRk_pevqef.mp3',
      },
      {
        id: 7,
        artist: 'Daft Punks',
        title: 'Tron: Legacy',
        duration: '1:36',
        albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892437/Tron_yrj5tt.jpg',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695888427/The_Son_of_Flynn_From__TRON__Legacy__Score__mqgEYRtWMJU_ntm5g4.mp3',
      },
      {
        id: 8,
        artist: 'John Williams',
        title: 'Las aventuras de Tintín: El secreto del unicornio',
        duration: '3:08',
        albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892437/Tintin_gvvex4.jpg',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695888607/The_Adventures_of_Tintin_eEGx6zGnju4_pntelt.mp3',
      },
      {
        id: 9,
        artist: 'Patrick Doyle',
        title: 'La Ligne Droite',
        duration: '1:41',
        albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
        audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801970/BSO_-_Apocalipsys_Now_3VywjmyNYDs_q69djb.mp3',
      },

      {
        id: 10,
        artist: 'Patrick Doyle',
        title: 'La Ligne Droite',
        duration: '1:41',
        albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
        audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801970/BSO_-_Apocalipsys_Now_3VywjmyNYDs_q69djb.mp3',
      },

      {
        id: 11,
        artist: 'Patrick Doyle',
        title: 'La Ligne Droite',
        duration: '1:41',
        albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
        audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801970/BSO_-_Apocalipsys_Now_3VywjmyNYDs_q69djb.mp3',
      }
    ];
   

    // const SoundTrack: React.FC = () => {
    //   const [currentSongIndex, setCurrentSongIndex] = useState(0);
    //   const [isPlaying, setIsPlaying] = useState(false);
    //   const [likedSongs, setLikedSongs] = useState<Set<number>>(new Set<number>());
    //   const audioRef = useRef<HTMLAudioElement | null>(null);
    
    //   const togglePlayPause = () => {
    //     if (audioRef.current) {
    //       if (isPlaying) {
    //         audioRef.current.pause();
    //       } else {
    //         audioRef.current.play().then(() => {
    //           setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    //         });
    //       }
    //       setIsPlaying(!isPlaying);
    //     }
    //   };
    
    //   const playAllSongs = () => {
    //     if (isPlaying) {
    //       audioRef.current?.pause();
    //     } else {
    //       audioRef.current?.play().then(() => {
    //         setCurrentSongIndex(0);
    //       });
    //     }
    //     setIsPlaying(!isPlaying);
    //   };
    
    //   const changeSong = (song: any) => {
    //     setCurrentSongIndex(songs.findIndex((s) => s.id === song.id));
    //     setIsPlaying(true);
    //   };
    
    //   const toggleLike = (songId: number) => {
    //     const updatedLikedSongs = new Set<number>(likedSongs); // Asegura que el tipo sea Set<number>
    //     if (likedSongs.has(songId)) {
    //       updatedLikedSongs.delete(songId);
    //     } else {
    //       updatedLikedSongs.add(songId);
    //     }
    //     setLikedSongs(updatedLikedSongs);
    //   };
    
    //   return (
    //     <div className="sound-container">
    //       <div className="playlist-header">
    //         <img
    //           id="playlist-cover"
    //           src="https://res.cloudinary.com/doft9ylq1/image/upload/v1696403613/2002.i123.004_film_stripes_reels_realistic_1_o5gt6x.jpg"
    //           alt="Portada de la playlist"
    //           className="image-left image-moved-right"
    //         />
    //         <div className="title-container">
    //           <h1>SoundTracks ganadoras de Oscar</h1>
    //           <p>Colección de SoundTracks ganadores de Oscar</p>
    //           <div className="buttons-container">
    //             <button className="play-all-button" onClick={playAllSongs}>
    //               {isPlaying ? 'Pausar' : 'Play all'}
    //             </button>
    //             <button className="add-to-collection-button">
    //               <span role="img" aria-label="Corazón">❤️</span> Add to collection
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    
    //       <div className="song-list">
    //         <ul>
    //           {songs.map((song) => (
    //             <li key={song.id}>
    //               <img src={song.albumCover} alt={song.title} />
    //               <button onClick={() => changeSong(song)}>
    //                 <div>{song.title}</div> - <div>{song.artist}</div> - <div>{song.duration}</div>
    //               </button>
    //               {/* Contenedor adicional para el botón de "Me gusta" */}
    //               <div className="like-container">
    //                 <button
    //                   className={`like-button ${likedSongs.has(song.id) ? 'liked' : ''}`}
    //                   onClick={() => toggleLike(song.id)}
    //                 >
    //                   {likedSongs.has(song.id) ? '❤️' : '🤍'}
    //                 </button>
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    
    //       <div className="music-player">
    //         <div className="album-cover">
    //           <img src={songs[currentSongIndex].albumCover} alt="Portada del álbum" />
    //         </div>
    //         <div className="song-info">
    //           <p className="artist">{songs[currentSongIndex].artist}</p>
    //           <p className="song-title">{songs[currentSongIndex].title}</p>
    //         </div>
    //         <audio
    //           id="audio"
    //           controls
    //           ref={audioRef}
    //           key={songs[currentSongIndex].id}
    //           src={songs[currentSongIndex].audioSource}
    //           onEnded={togglePlayPause}
    //         />
    //         <button onClick={togglePlayPause}>
    //           {isPlaying ? 'Pausar' : 'Reproducir'}
    //         </button>
    //       </div>
    //     </div>
    //   );
    // };

    const SoundTrack: React.FC = () => {
      const [currentSongIndex, setCurrentSongIndex] = useState(0);
      const [isPlaying, setIsPlaying] = useState(false);
      const [likedSongs, setLikedSongs] = useState<Set<number>>(new Set<number>());
      const audioRef = useRef<HTMLAudioElement | null>(null);
    
      const togglePlayPause = () => {
        if (audioRef.current) {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play().then(() => {
              setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
            });
          }
          setIsPlaying(!isPlaying);
        }
      };
    
      const playAllSongs = () => {
        if (isPlaying) {
          audioRef.current?.pause();
        } else {
          audioRef.current?.play().then(() => {
            setCurrentSongIndex(0);
          });
        }
        setIsPlaying(!isPlaying);
      };
    
      const changeSong = (song: any) => {
        setCurrentSongIndex(songs.findIndex((s) => s.id === song.id));
        setIsPlaying(true);
      };
    
      const toggleLike = (songId: number) => {
        const updatedLikedSongs = new Set<number>(likedSongs);
        if (likedSongs.has(songId)) {
          updatedLikedSongs.delete(songId);
        } else {
          updatedLikedSongs.add(songId);
        }
        setLikedSongs(updatedLikedSongs);
      };
    
      return (
        <div className="sound-container">
          <div className="playlist-header">
            <img
              id="playlist-cover"
              src="https://res.cloudinary.com/doft9ylq1/image/upload/v1696403613/2002.i123.004_film_stripes_reels_realistic_1_o5gt6x.jpg"
              alt="Portada de la playlist"
              className="image-left image-moved-right"
            />
            <div className="title-container">
              <h1>SoundTracks ganadoras de Oscar</h1>
              <p>Colección de SoundTracks ganadores de Oscar</p>
              <div className="buttons-container">
                <button className="play-all-button" onClick={playAllSongs}>
                  {isPlaying ? 'Pausar' : 'Play all'}
                </button>
                <button className="add-to-collection-button">
                  <span role="img" aria-label="Corazón">❤️</span> Add to collection
                </button>
              </div>
            </div>
          </div>
    
          <div className="song-list">
            <ul>
              {songs.map((song) => (
                <li key={song.id}>
                  <img src={song.albumCover} alt={song.title} />
                  <button onClick={() => changeSong(song)}>
                    <div>{song.title}</div> - <div>{song.artist}</div> - <div>{song.duration}</div>
                  </button>
                  <div className="like-container">
                    <button
                      className={`like-button ${likedSongs.has(song.id) ? 'liked' : ''}`}
                      onClick={() => toggleLike(song.id)}
                    >
                      {likedSongs.has(song.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
    
          <div className="music-player">
            <div className="album-cover">
              <img src={songs[currentSongIndex].albumCover} alt="Portada del álbum" />
            </div>
            <div className="song-info">
              <p className="artist">{songs[currentSongIndex].artist}</p>
              <p className="song-title">{songs[currentSongIndex].title}</p>
            </div>
            <audio
              id="audio"
              controls
              ref={audioRef}
              key={songs[currentSongIndex].id}
              src={songs[currentSongIndex].audioSource}
              onEnded={togglePlayPause}
            />
            <button onClick={togglePlayPause}>
              {isPlaying ? 'Pausar' : 'Reproducir'}
            </button>
          </div>
        </div>
      );
    };
    
    export default SoundTrack;