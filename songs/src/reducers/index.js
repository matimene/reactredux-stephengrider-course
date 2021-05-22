import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "Hawai", duration: "4:05" },
    { title: "Locura", duration: "4:38" },
    { title: "Borro casette", duration: "3:55" },
    { title: "La puta que te pario", duration: "4:05" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
