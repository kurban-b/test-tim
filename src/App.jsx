import ColoredUserpic from './ColoredUserpic'

function App() {
  return (
    <div className="App">
      <ColoredUserpic
        src='https://i.pinimg.com/280x280_RS/bc/12/b0/bc12b0cecdbe83e6a8382a1c811c9d2d.jpg'
        size={150}
        margin={4}
        backgroundColor='red'
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6}
      />
    </div>
  );
}

export default App;
