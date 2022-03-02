import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState<number>(0);

  const handleSubtract = () => {
    if (count >= 0) setCount((prev) => prev - 1);
  };

  const handleAdd = () => setCount((prev) => prev + 1);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#001520',
      }}
    >
      <h1
        style={{
          fontSize: '30px',
          color: '#fff',
        }}
      >
        {count}
      </h1>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Button color="secondary" onClick={handleSubtract} disabled={!count}>
          -
        </Button>
        <Button color="primary" onClick={handleAdd}>
          +
        </Button>
      </div>
    </div>
  );
}

export default App;
