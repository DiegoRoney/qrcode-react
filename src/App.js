import "./App.css";
import { useEffect, useState } from "react";
import logoBk from "./images/icon - bk.png";
import logoDiegoBk from "./images/icon-diego - bk.png";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("https://diegoroney.github.io/portfolio/index.html");
  const [size, setSize] = useState(330);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`
      // https://chart.googleapis.com/chart?cht=qr&chl=
      // http://api.qrserver.com/v1/create-qr-code/?data=
      );
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="App">
      <header className="App-header">    
        <nav className="navbar">
          <div className="logos">
            <img src={logoBk} alt="logo" />
            QRcode!
          </div>
          <div className="logoslinks">
            <a href="https://diegoroney.github.io/portfolio/" alt="portfólio">
              <img src={logoDiegoBk} alt="logo-diego" />
            </a>
          </div>
        </nav>
      </header>

      <div className="main">

        <div className="header-texto">
          <h1>QRcode!</h1>
          <h2>Gerador de Qr Code</h2>
          <br></br>
          <label className="entrada" for="content">
            <p>
              1. Cole o link e clique em <strong>Criar</strong>!
            </p>
            <p>
              2. Clique em <strong>Baixar</strong>{" "}
            </p>
            <p>
              3. Selecione: <strong>Salvar imagem como</strong>
            </p>
            <br></br>
          </label>

          <div className="imput-box">
            <input
              className="texto"
              type="text"
              onChange={(e) => {
                setTemp(e.target.value);
              }}
              placeholder="Digite ou cole a url"
            />
            <div className="btns">
              <button className="button primario" onClick={handleClick}>
                Criar
              </button>

              <a href={qrCode} download="QRCode">
                <button className="button" type="button">
                  Baixar
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="form-horizontal">
          <div className="form-group">
            <div className="extra">
              <div className="output-box">
                <img src={qrCode} alt="" />

                <h4>Cor de fundo:</h4>
                <input
                  type="color"
                  onChange={(e) => {
                    setBgColor(e.target.value.substring(1));
                  }}                  
                />
                
                <h4>Tamanho:</h4>
                <input
                  className="rage"
                  type="range"
                  min="330"
                  max="400"
                  value={size}
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                /> 

               
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="footer">
        <a href="https://diegoroney.github.io/portfolio/">
          <br></br>© 2025 Copyright: DIEGO
        </a>
      </div>
      
    </div>
  );
}

export default App;
