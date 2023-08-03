import './css/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const fonts = {
  serif: ['Playfair+Display', 'Roboto+Slab', 'Merriweather'],
  sansSerif: ['Open+Sans', 'Roboto', 'Lato'],
  monospace: ['Fira+Code', 'Roboto+Mono', 'Source+Code+Pro'],
  display: ['Lobster', 'Pacifico', 'Bangers'],
};

const fontUrl = Object.values(fonts).flat().join('&family=');

export const metadata = {
  title: 'Tipografia',
  description: 'Teste de tipografia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=${fontUrl}&display=swap`}
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap-icons/1.7.2/font/bootstrap-icons.css"
          integrity="sha384-uFAdhzW3UN78XCm0H8ZLQ7G0317FjG4YgDUQMgoPB6Q9Q/Pyf3IZ0kAjKsB1Kp9p"
          crossorigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
