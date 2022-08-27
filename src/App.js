// import logo from './logo.svg';
import "./App.css";
// import "./qrcode.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <nav className="navbar">QR CODE -> construindo</nav>
      </header>

      <div className="main">
        <div className="header-texto">
          <h1>Gerador de QRcode!</h1>
          <p>descrição</p>
        </div>

        <div className="form-horizontal">
          <div className="form-group">
            <label className="entrada" for="content">
              <p>
                1. Cole o link e clique em <strong>Criar</strong>!
              </p>
              <p>2. Clique com botão esquerdo do mouse sobre o QRcode</p>
              <p>
                3. Selecione: <strong>Salvar imagem como</strong>
              </p>
            </label>
            <div className="">
              <input
                type="text"
                size="40"
                maxlength="60"
                class="form-control"
                id="content"
                placeholder="Cole o link aqui"
              />
            </div>
          </div>

          <div className="form-group1">
            <div className="">
              <button type="btn" className="btn btn-default" id="generate">
                Criar
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
            
                <img src=
                "img/qr-code-scan-hand.png"
                className="qr-code img-thumbnail img-responsive" />
            </div>
      </div>

    </div>
  );
}

export default App;
