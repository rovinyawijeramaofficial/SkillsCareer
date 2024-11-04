// src/pages/_app.js
import '../styles/globals.css'; // Import your global styles if any

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
