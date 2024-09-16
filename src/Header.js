import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
            constructor(){
                super();
                this.state = {
                    image: 'https://www.achieversit.com/assets/images/logo-white.png',
                    navlinks: [
                      { id: 1, title: 'All courses', link: '/all courses' },
                      { id: 2, title: 'Placements', link: '/placements' },
                      { id: 3, title: 'Internships', link: '/interships' },
                      { id: 4, title: 'Existing students', link: '/existing students' },
                      { id: 5, title: 'About Us', link: '/about us' },
                      { id: 6, title: 'Reviews', link: '/reviews' },
                      { id: 7, title: 'Blogs', link: '/blogs' }
                    ]
                  };
                }


  render() {
    return (
     <header>
      <div>
         <img src={this.state.image} alt='img'  />
      </div>
   
      <div>
        <nav>
            <ul>{this.state.navlinks.map((links)  =>(
                <li key={links.id}><a href='#'>{links.title}</a></li>
            ))}</ul>
        </nav>
        
      </div>
      </header>
    );
  }
}