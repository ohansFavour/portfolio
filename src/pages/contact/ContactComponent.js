import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import Resume from '../../assests/favour_ohanekwu_resume.pdf';
import { Fade } from 'react-reveal';
import './ContactComponent.css';

const addressSection = {
  title: 'Address',
  subtitle: '2 Oladele Ojogbede street Lekki, Lagos, 105102, Nigeria.',
  avatar_image_path: 'address_image.svg',
  location_map_link: 'https://goo.gl/maps/9KYTku6gPmFCbJjc7',
};

const phoneSection = {
  title: 'Phone Number',
  subtitle: '+2348068239121',
};

const ContactData = {
  title: 'Contact Me',
  profile_image_path: 'Favour Ohanekwu.jpg',
  description:
    'I am available for jobs and projects. Feel free to contact me on any of my social media accounts.',
};

class Contact extends Component {
  render() {
    return (
      <div className="contact-main">
        <Header />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div ">
                <img
                  src={require(`../../assests/images/${ContactData['profile_image_path']}`)}
                  alt=""
                  className="profile-image"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text">{ContactData['title']}</h1>
                <p className="contact-header-detail-text subTitle">
                  {ContactData['description']}
                </p>
                <SocialMedia />
                <div className="resume-btn-div">
                  <Button
                    text="Download Resume"
                    newTab={true}
                    download={true}
                    Data={Resume}
                    filename="Favour Ohanekwu's Resume"
                  ></Button>
                </div>
              </div>
            </div>
          </Fade>
          {/* <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text">{blogSection["title"]}</h1>
                <p className="blog-header-detail-text subTitle">
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                <img
                  src={require(`../../assests/images/${blogSection["avatar_image_path"]}`)}
                  alt=""
                />
              </div>
            </div>
          </Fade> */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${addressSection['avatar_image_path']}`)}
                  alt=""
                />
              </div>
              <div className="address-heading-text-div">
                <h1 className="address-heading-text">
                  {addressSection['title']}
                </h1>
                <p className="contact-header-detail-text subTitle">
                  {addressSection['subtitle']}
                </p>
                <h1 className="address-heading-text">
                  {phoneSection['title']}
                </h1>
                <p className="contact-header-detail-text subTitle">
                  {phoneSection['subtitle']}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
