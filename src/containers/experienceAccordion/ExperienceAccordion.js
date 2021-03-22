import React, { Component } from 'react';
import ExperienceCard from '../../components/experienceCard/ExperienceCard.js';
import './ExperienceAccordion.css';
import { Accordion, Panel } from 'baseui/accordion';

class ExperienceAccordion extends Component {
  render() {
    return (
      <div className="experience-accord">
        <Accordion onChange={({ expanded }) => null}>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section['title']}
                key={section['title']}
              >
                {section['experiences'].map((experience) => {
                  return <ExperienceCard experience={experience} />;
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
