import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Al momento de importar, . es cuando el archivo está en el mismo directorio

// Rect Dom.render recibe dos argumentos, los componentes que va a renderizar
// y dónde lo va a renderizar 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);