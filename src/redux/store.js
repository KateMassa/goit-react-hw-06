import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"], // only persist contacts
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: window?.process?.env.NODE_ENV !== "production", // enable devtools only in development mode
});

export const persistor = persistStore(store);
