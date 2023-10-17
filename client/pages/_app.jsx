import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../style/global.css";
import { store, persistor } from "../store/store";


export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center">
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}
