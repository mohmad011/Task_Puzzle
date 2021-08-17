import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';


function App() {

	const App = {
	  textAlign: 'center'
	}

	const AppHeader = {
	  backgroundColor: '#282c34',
	  minHeight:' 100vh',
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	  justifyContent: 'center',
	  fontSize:' calc(10px + 2vmin)',
	  color: 'white'
	}

  return (
    <div style={App}>
      <header className="App-header" style={AppHeader}>
        <BigSquare />
      </header>
    </div>
  );
}

export default App;



function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const squares = Array.from({ length: 16 }, (_, i) => i);

function BigSquare() {
  const [randomSquares, setRandmoSquares] = useState([]);
  useEffect(() => {
    setRandmoSquares(() => shuffle(squares)) // chnage squares to ...
  }, []);

  function moveSquare(val) {
    let zeroIndex = randomSquares.indexOf(0);
    let valIndex = randomSquares.indexOf(val);

    if (valIndex + 4 === zeroIndex || valIndex - 4 === zeroIndex) {
        swap(valIndex, zeroIndex);
    } else if (valIndex + 1 === zeroIndex && zeroIndex % 4 !== 0 ) {
        swap(valIndex, zeroIndex);
    } else if (valIndex - 1 === zeroIndex && (zeroIndex + 1) % 4 !== 0) {
        swap(valIndex, zeroIndex)
    }
  }

  function swap(valIndex, zeroIndex) {
    let temArray = [...randomSquares]
    temArray[zeroIndex] = randomSquares[valIndex];
    temArray[valIndex] = 0;
    setRandmoSquares(() => [...temArray])
  }

	const Container = {
	    margin: '5px 0px',
	    gridTemplateColumns: 'auto auto auto auto',
	    display: 'grid',
	    position: 'relative',
	    padding: '15px',
	    cursor: 'default',
	    touchAction: 'none',
	    background:' rgb(87, 64, 124)',
	    borderRadius: '12px',
	    width: '500px',
	    height: '500px',
	}

	const ContainerSub = {
	    width:' 106.25px',
	    height:' 106.25px',
	    marginRight: '15px',
	    borderRadius: '10px',
	    backgroundColor:' rgb(61, 41, 99)'
	}

  return (
    <div className="Container" style={Container}>
      {randomSquares.map((e, i) => {
        return (
          <div key={e} className="Container-Sub" style={ContainerSub}>
            <SmallSquare value={e}  clickHandler={moveSquare}/>
          </div>
        );
      })}
    </div>
  );
}

function SmallSquare(props) {

	const FillSquare = {
	    display: 'flex',
	    borderRadius: '10px',
	    background:' rgb(232, 138, 69)',
	    cursor: 'pointer',
	    position: 'relative',
	    userSelect: 'none',
	    WebkitBoxPack: 'center',
	    justifyContent: 'center',
	    WebkitBoxAlign: 'center',
	    alignItems: 'center',
	    fontFamily:' Pacifico, cursive',
	    textAlign: 'center',
	    fontWeight:' bold',
	    zIndex: '10',
	    fontSize: '75px',
	    width: '107px',
	    transition:' transform 0.3s ease 0s',
	    animationDuration: '0.75s',
	    height: '107px',
	    transform:' translate3d(0px, 0px, 0px)'
	}

	const EmptySquare = {
	    display: 'none',
	    borderRadius: '10px',
	    background:' rgb(106, 198, 184)',
	    cursor: 'pointer',
	    position: 'relative',
	    userSelect: 'none',
	    WebkitBoxPack: 'center',
	    justifyContent: 'center',
	    WebkitBoxAlign: 'center',
	    alignItems: 'center',
	    fontFamily: 'Pacifico, cursive',
	    textAlign: 'center',
	    fontWeight: 'bold',
	    zIndex: '10',
	    fontSize: '75px',
	    width: '107px',
	    transition:' transform 0.3s ease 0s',
	    animationDuration: '0.75s',
	    height: '107px',
	    transform:' translate3d(0px, 0px, 0px)'
	}

    return (
        <div style={props.value === 0 ? EmptySquare : FillSquare} onClick={() => props.clickHandler(props.value)}>
            {props.value}
        </div>
    )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
