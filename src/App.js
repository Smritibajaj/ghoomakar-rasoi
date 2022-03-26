import './App.css';
import QRCode from "react-qr-code";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  console.log(`${window.location.href}ghoomakar-rasoi`)   
  const onImageCownload = () => {

    const svg = document.getElementById("QRCode");
    console.log(svg)
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    console.log(img)
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    console.log(img.src)
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    console.log(img.src)
  };
  return (
   
    <>
      <main className='main-center'>
      <h1 className='h1'>Ghoomakar Rasoi</h1>
      <div  >
      <QRCode id="QRCode" className='qr-code-box' value={`${window.location.href}ghoomakar-rasoi`} />
      </div>

      <input type="button" value="Download QR" onClick={onImageCownload} />
      </main>
    </>
  );
}

const RasoiMenu = ()  => {
  return (
    <>
      <main className='rasoi-page'>
        <h1 className='h1'>Ghoomakar Rasoi Menu</h1>
       <img src='/rasoi1.jpg' alt="menu-front"  height={'100%'} width={'100%'}/>
       <img src='/rasoi2.jpg' alt="menu-back"  height={'100%'} width={'100%'}/>
      </main>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ghoomakar-rasoi" element={<RasoiMenu />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
