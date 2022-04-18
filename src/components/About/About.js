import React from 'react';
import me from '../../images/about/me.jpg';
import me2 from '../../images/about/me2.jfif';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='description'>
                <h1>Hi, This is Monira Jahan Tania</h1>
                <p> <span>"</span> I am so much determinant to be a complete web developer. I had a great desire form my college to study CSE. But I had not got the oppotunity to study in this subject. So I practised some problems with c++. Now I am coniuing my course on complete web development in PH. I really want to be a perfect web developer to work in this field and make a career where I can work with my passion. <br /> If you ask me Wht i want to do in next 3/4 months. I would say I want to practice more and more projects related professional and real life. As this motnh I could not continue my course properly because of my exam in University, I want to learn everything properly and want to practice more in next 3 months<span>"</span></p>
            </div>
            <div className='image'>
                <img src={me} alt="" />
            </div>
        </div>
    );
};

export default About;