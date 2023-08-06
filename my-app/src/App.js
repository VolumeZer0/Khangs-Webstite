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
        <p className="Bio-text"> I am currently a student studying under the Computer Engineering major at UC San Diego. The languages I have worked with include Python, Java, React, and React Native. My hobbies include programming, buildings things, gaming, and also socializing! So feel free to reach out!</p>

      </div>

    </body>
  );

}

export default App;

