import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button color="primary">-</Button>
      <Button color="primary" icon="arrow-right">
        -
      </Button>
      <Button color="primary" disabled>
        -
      </Button>
      <Button color="secondary">-</Button>
      <Button color="secondary" icon="arrow-right">
        -
      </Button>
      <Button color="secondary" disabled>
        -
      </Button>
    </div>
  );
}

export default App;
