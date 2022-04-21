import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';
//Las imagenes de publicidad en facebook por lo general son de 500 * 500 px
function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');
  

  const onChangeSuperior = function (evento) {
    setLinea1(evento.target.value)
  }

  const onChangeInferior = function (evento) {
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }
  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL("image/png")
      link.click();

    });

    
  }


  return (
    <div className="App">

      {/*Select picker de memes*/}
      <select onChange={onChangeImagen}>
        <option value="llamas">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="raptor">Filosoraptor</option>
        <option value="pensando">Hombre pensando</option>
      </select><br />

      {/*Input text - Linea superior del memes*/}

      <input onChange={onChangeSuperior} type="text" placeholder="Texto Superior" /> <br />

      {/*//Input text - Linea inferior del memes*/}

      <input onChange={onChangeInferior} type="text" placeholder="Linea Inferior" /> <br />

      {/*//Boton para descargar el meme*/}

      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id='meme'>
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/imageneMemes/" +imagen+".jpg"}/>
      </div>


    </div>

  );
}

export default App;
