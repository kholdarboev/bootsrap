import React, { Component } from 'react'
import Header from '../Common/Header'
import image from '../assets/img/header.jpg';

//*Reusable components */
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
class Home extends Component {
    render() {
        return (
            <div>
                <Header 
                title='Welcome to Our studio'
                subtitle="It's NICE TO MEET YOU"
                buttonText='TELL ME MORE'
                link="/services"
                showButton={true}
                image={image}
                />
                <Services  />
                <Portfolio/>
            </div>
        )
    }
}

export default Home;
