// Import styles
import './App.css';
import './resources/styles/clamp.min.css';

// import react components
import React from 'react';
import PointerBox from './components/pointerbox';
import AppHeader from './components/header';
import MainComponent from './components/main';

// import other resources
import backgroundVideo from './resources/videos/clip.mp4'
const navigationSections = [
  {
    name: 'Home',
    icon: 'icofont-home',
    init: () => {
      // Do something when section is selected
      console.log(1)
      return 1;
    }
  },{
    name: "Destinations",
    icon: "icofont-google-map",
    init: () => {
      // Do something when section is selected
      document.querySelector('body').classList.toggle('fullscreen', true);
      console.log(2);
      return 2;
    }
  },{
    name: "Tour Guides",
    icon: "icofont-map",
    init: () => {
      // Do something when section is selected
      console.log(3)
      return 3;
    }
  },{
    name: "Skill Experience",
    icon: "icofont-map",
    init: () => {
      // Do something when section is selected
      console.log(4)
      return 4;
    }
  },{
    name: "Register",
    icon: "icofont-power",
    init: () => {
      // Do something when section is selected
      console.log(5)
      return 5;
    }
  }
];

// let colorList = ['#1e1e1e', "rgb(0, 82, 205)", 'orange', 'red', 'purple', 'orangered', 'crimson', 'brown'];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSection: 0,
      sectionInit: navigationSections[0].init()
    }
    this.navigationHandler = (ev) => {
      this.setState((prevState) => {
        // console.log(ev.target.id);
        const changedState = {
          currentSection: parseInt(ev.target.id, 10),
          sectionInit: navigationSections[parseInt(ev.target.id, 10)].init()
        };
        
        const newState = Object.assign({}, prevState, changedState);
        return newState;
      });
    }
  }

  componentDidUpdate(){
    // console.log(this.state);
  }

  componentDidMount(){
    setTimeout(function(){
      document.querySelector('body').classList.toggle('fullscreen', true);
    }, 20000);
  }

  render(){
    return (
      <React.Fragment>
        <PointerBox/>
        <AppHeader currentSection={this.state.currentSection} sections={navigationSections}/>
        <MainComponent currentSection={this.state.currentSection} sections={navigationSections} backgroundVideo={backgroundVideo} navigationHandler={this.navigationHandler}/>
        <button className="rows center fullscreen-toggle-button" onClick={function(e){document.querySelector('body').classList.toggle('fullscreen', false)}}>
          <i className="icofont-close"></i>
        </button>
      </React.Fragment>
    );
  }
}

export default App;