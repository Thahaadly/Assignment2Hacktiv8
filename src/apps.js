import React from 'react';
//import './App.css'; // Jika diperlukan, sesuaikan dengan file CSS yang Anda gunakan.
import Counter from '.counter/Counter'; // Import komponen Counter.

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Counter message="Ini adalah pesan dari props" />
    </div>
  );
}

export default App;
