import React, { Component } from 'react'
import './Footer.css';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={
            description:{
                image:'https://www.achieversit.com/assets/images/AIT-white.jpg',
                para:'AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.'
            },
            company :[
                { id: 1, title: 'Home', link: '/home' },
                { id: 2, title: 'Placements', link: '/placements' },
                { id: 3, title: 'Corporate Training', link: '/corporate' },
                { id: 4, title: 'Contact Us', link: '/contact' }
            ],
            trendingcourses :[
                { id: 1, title: 'UI Development Courses', link: '/UI' },
                { id: 2, title: 'Angular JS Course', link: '/angular' },
                { id: 3, title: 'React JS Course', link: '/react' },
                { id: 4, title: 'Digital Marketing Course', link: '/digital' },
                { id: 5, title: 'Python Course', link: '/python' }
            ],
            contactinfo :{
                address :'#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029',
                phone :'India : +91 8431-040-457',
                Email :'info@achieversit.com'
            }
        }
    }

    render(){
        const { description, company, trendingcourses, contactinfo } = this.state;
        return(
            <footer>
                <div className='desc'>
                    <img src={description.image} alt="AchieversIT Logo" className="footer-logo" />
                    <p>{description.para}</p>
                </div>
                <div>
                    <h2>COMPANY</h2>
                    <ul>
                        {this.state.company.map((link) => (
                            <li key={link.id}><a href={link.link}>{link.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>TRENDING COURSES</h2>
                    <ul>
                        {this.state.trendingcourses.map((link) => (
                            <li key={link.id}><a href={link.link}>{link.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>CONTACT INFO</h2>
                    <p>{contactinfo.address}</p>
                    <p>India : {contactinfo.phone}</p>
                    <p>Email : <a href={`mailto:${contactinfo.Email}`}>{contactinfo.Email}</a></p>
                </div>
            </footer>
        )
    }
}
export default Footer
