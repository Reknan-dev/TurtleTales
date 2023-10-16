import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import MarkerSlice from "../slices/markerSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../slices/userSlice";

const rootReducer = combineReducers({
  marker: MarkerSlice,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["marker"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

let persistor = persistStore(store);

export { store, persistor };
