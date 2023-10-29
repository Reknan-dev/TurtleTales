import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../style/global.css";
import { store, persistor } from "../store/store";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>TurtleTales</title>
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="TurtleTales" />
        <meta
          property="og:description"
          content="help to search for turtles, all it takes is one click!"
        />
        <meta
          name="Turtle Tales"
          content="A social platform for help us to save turtles and fight the destruction of their nests"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PersistGate loading={null} persistor={persistor}>
        <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center">
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}
