import React from 'react';
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
        <p className="Bio-text"> I am currently a student studying UC San Diego as a Computer Engineering Major. The languages I have worked with include Python, Java, React, and React Native. <br/><br/> I love to learn about new things especially when it comes to coding concepts and new ideas.  <br/><br/> Besides coding, my hobbies include gaming, exercising, building things, and socializing! So feel free to reach out and contact me! </p>

      </div>

    </body>
  );

}

export default App;

