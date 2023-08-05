import './App.css';
import img1 from './images/tony.png'
import ParticlesBackground from './components/ParticlesBackground';
function App() {
  return (
    
    <body className="Background-header">
      <ParticlesBackground/>
      <div className='leftColumn-block'>
        <div className='logobutton-block'>
          <img src={img1} className='logo-img'/>
        </div>
      </div>
      <div className="FirstBlockCenter-block">
        <h1 className="KhangTranGradient-text"> Khang Tran </h1>
      </div>

    </body>
  );

}

export default App;

