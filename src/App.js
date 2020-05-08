import React, { Component } from 'react';
import './App.css';
import Aside from './components/aside.jsx';
import Introduction from './components/introduction.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Timeline from './components/timeline.jsx';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Aside></Aside>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About/>
					<Projects/>
					<Timeline/>

					
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
