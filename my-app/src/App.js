import './App.css';
import img1 from './images/tony.png'
import ParticlesBackground from './components/ParticlesBackground';
function App() {
  return (
    
    <body className="Background-header">
      <ParticlesBackground/>
      <div className='leftColumn-block'>
        <div className='logobutton-block'>
          <img src={img1} alt= 'the man the myth the legend' className='logo-img'/>
        </div>
      </div>
      <div className="Left-block">
        <h1 className="Khang-text Gradient-effect"> Khang </h1>
        <h1 className="Tran-text Gradient-effect"> Tran </h1>
        <p className="Bio-text">The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.</p>
      </div>

    </body>
  );

}

export default App;

