import React, { Component } from 'react'
import Header from '../components/header/header'
import './css/styles.css'
import laptop from './img/about-laptop.jpeg'

class About extends Component {
  /*componentDidMount() {
    window.addEventListener('scroll', () => {
      let parent = document.getElementById('parallax-container');
      let children = parent.getElementsByTagName('div');
      for(let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
      }
    }, false)
  }*/

  scrollEvent = (e) => {
    let parent = document.getElementById('parallax-container');
      let children = parent.getElementsByTagName('div');
      for(let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
      }

  }
  render() {
    return (
      <div>
        
        <div id="parallax-container" onScroll={this.scrollEvent}>
          <div style={{backgroundImage: `url('https://cdn2.hubspot.net/hubfs/1951013/Parallax/SkyBG.png')`}}></div>
          <div style={{backgroundImage: `url('https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds1.png')`}}></div>
          <div style={{backgroundImage: `url('https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds2.png')`}}></div>
        </div>
        <div id="content">
        <h1>Parallax Effect</h1>
          <p>The parallax code is from Collin Delphia's CodePen <a href="https://codepen.io/Kikoku/pen/PWyyVg">here</a>.</p>
          <p>I created the artwork in Adobe Illustrator based on the Animal Silhouette Moonlight Vector Illustration - Illustrator Tutorial by tutvid <a href="https://www.youtube.com/watch?v=RtnCn65MdN0">here</a>.</p>
      </div>
      </div>
    )
  }
}

export default About
