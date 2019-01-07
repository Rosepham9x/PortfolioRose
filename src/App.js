import React, { Component } from 'react';

import './App.css';

import Router from './Router'
import $ from 'jquery';

class App extends Component {
  componentDidMount() {
    
      $(document).ready(function() {
        let scrollLink = $('.scroll a');
        scrollLink.click(function(e) {
            
            if($(this.hash).length == 0)
              return;
            e.preventDefault();
            $('body,html').animate({
              scrollTop: $(this.hash).offset().top
            }, 1000 );
        });
        
      
        // Active link switching
        $(window).scroll(function() {
          var scrollbarLocation = $(this).scrollTop();

          scrollLink.each(function() {
            if($(this.hash).length == 0)
              return;
            var sectionOffset = $(this.hash).offset().top - 20;
            
            if ( sectionOffset <= scrollbarLocation ) {
              $(this).parent().addClass('active');
              $(this).parent().siblings().removeClass('active');
            }
          })
          
        })
        
      });
  }
  render() {
    return (
      <div className="App">
         <Router></Router>
      </div>
    );
  }
}

export default App;
