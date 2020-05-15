import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of vast variety of latest technology tools. I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work to all of my employers, including those I've worked for on a project basis.",
  avatar_image_path: "projects_image.svg",
};

class Projects extends Component {
  render() {
    return (
      <div className="projects-main">
        <Header />
        <div className="basic-projects">
          <Fade bottom duration={1000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <img
                  src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text">
                  {projectsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle">
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/ohansFavour"
          newTab={true}
        />
        <Footer />
      </div>
    );
  }
}

export default Projects;
