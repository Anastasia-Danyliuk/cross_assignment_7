import { createSlice } from "@reduxjs/toolkit";

const tracksSlice = createSlice({
    name: "tracks",
    initialState: {
        favorites: [],
        saved: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            const payload = action.payload;
            const track = (payload && typeof payload === 'object') ? payload : { id: String(payload) };
            if (!track.id) return;
            const exists = state.favorites.find(t => t && t.id === track.id);
            if (!exists) {
                state.favorites = [...state.favorites, track];
            }
        },
        removeFromFavorites: (state, action) => {
            const payload = action.payload;
            const trackId = (payload && payload.id) ? payload.id : String(payload);
            state.favorites = state.favorites.filter(t => t && t.id !== trackId);
        },
        saveTrack: (state, action) => {
            const payload = action.payload;
            const track = (payload && typeof payload === 'object') ? payload : { id: String(payload) };
            if (!track.id) return;
            const exists = state.saved.find(t => t && t.id === track.id);
            if (!exists) {
                state.saved = [...state.saved, track];
            }
        },
        removeFromSaved: (state, action) => {
            const payload = action.payload;
            const trackId = (payload && payload.id) ? payload.id : String(payload);
            state.saved = state.saved.filter(t => t && t.id !== trackId);
        },
    },
});

export const { addToFavorites, removeFromFavorites, saveTrack, removeFromSaved } = tracksSlice.actions;
export default tracksSlice.reducer;
