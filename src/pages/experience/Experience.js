import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Software Developer, Designer and Software Architect. I have spent the last three years developing my skills as a software developer while delivering efficient codes and driving business growth.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Front-End Developer",
          company: "Schnell Innovations",
          company_url: "https://www.schnell.network/",
          logo_path: "logo.jpg",
          duration: "February 2019 - April 2020",
          location: "Ijaiye, Lagos state, Nigeria",
          description:
            "I built the Front-End of a LoRaWAN Network Server, for Machine to Machine communication using several technologies such as React, Redux and Mqtt.",
          color: "#9b1578",
        },
        {
          title: "Front-End Developer",
          company: "BOW Dynamic System Ltd.",
          company_url: "https://www.bowdynamic.net/",
          logo_path: "bow.png",
          duration: "June 2017 - February 2019",
          location: "Ajah, Lagos state, Nigeria",
          description:
            "BOW Dynamic System Ltd is a cutting-edge technology company that offers Internet Protocol (IP) based Technical Security Solutions and ICT (Information and Communication Technology). ",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Telecommunication Researh Intern",
          company: "Obafemi Awolowo University",
          company_url: "http://oauife.edu.ng/",
          logo_path: "obafemi awolowo.jpg",
          duration: "May 2017 - Sept 2017",
          location: "Ile-ife, Osun state, Nigeria",
          description:
            "I have worked on a home automation project that switches off and on different home appliances based on time set by the user.  I was also involved in the simulation of 4G LTE systems for cellular communication using MatLab.",
          color: "#ee3c26",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - PRESENT",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - PRESENT",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

class Experience extends Component {
  render() {
    return (
      <div className="experience-main">
        <Header />
        <div className="basic-experience">
          <Fade bottom duration={1000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <img
                  src={require(`../../assests/images/${experience["header_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text">{experience.title}</h1>
                <h3 className="experience-heading-sub-text">
                  {experience["subtitle"]}
                </h3>
                <p className="experience-header-detail-text subTitle">
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} />
        <Footer />
      </div>
    );
  }
}

export default Experience;
