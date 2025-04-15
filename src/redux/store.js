// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Tüm reducer'ları combine et
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

// persist yapılandırması
const persistConfig = {
  key: "root",
  storage,
};

// persist edilmiş reducer oluştur
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store'u configure et
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // persist ile ilgili uyarıları engeller
    }),
});

// persist nesnesi
export const persistor = persistStore(store);
