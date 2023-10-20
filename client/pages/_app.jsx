import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../style/global.css";
import { store, persistor } from "../store/store";


export default function MyApp({ Component, pageProps }) {
  return (

    <Provider store={store}>
       <Head>
        <title>Turtle Tales</title>
        <meta name="Turtle Tales" content="A social platform for help us to save turtles and fight the destruction of their nests" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <PersistGate loading={null} persistor={persistor}>
        <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center">
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}
