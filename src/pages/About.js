import React, {} from 'react';

/*
  Package for timeline component
*/
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

/*
  Import React Components
*/
import Header from '../components/Header'
import Footer from '../components/Footer';

/* 
    Lazy Load Image Component
    Package for Lazy loading image
*/
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/* 
  React Icon Library
*/
import { BiCodeCurly } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { GrGatsbyjs } from "react-icons/gr";

import { 
  SiUpwork,
  SiMongodb
 } from "react-icons/si";

import { 
  SiPhp,
  SiJquery,
  SiMaterialui,
  SiFirebase
 } from "react-icons/si";

import { 
  FaReact,
  FaWordpress
} from "react-icons/fa";

import { 
  IoLogoHtml5, 
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoSass,
  IoLogoGithub,
} from "react-icons/io";

import {
  Container,
  Row
} from 'react-bootstrap'

/*
  Static data for Timeline section
*/
const history = [
  {
    date: 'Oct 2020 - Present',
    title: 'IT Assistant',
    sub: 'Morling College',
    layout: '2-columns',
    icon: <BiSupport />,
    iconBackground: 'rgb(238, 118, 1)',
    desc: 'IT Support, Audio Visual, IT Technician'
  },
  {
    date: 'July 2020 - Sep 2020',
    title: 'Freelance Web Developer',
    sub: 'Upwork',
    layout: '2-columns',
    icon: <SiUpwork />,
    iconBackground: 'rgb(19, 163, 0)',
    desc: 'Modern Web Development, React, GatsbyJS'
  },
  {
    date: 'Sep 2018 - Feb 2020',
    title: 'Front-end Developer | Project Leader',
    sub: 'FullstackHQ',
    layout: '1-column-left',
    icon: <BiCodeCurly />,
    iconBackground: 'rgb(18, 146, 238)',
    desc: 'PSD to HTML, Responsive Web Design, MERN Stack, React Native development'
  },
  {
    date: 'Apr 2017 - Jun 2017',
    title: 'Front-end Developer Trainee',
    sub: 'Toro.io',
    layout: '1-column-left',
    icon: <BsCodeSlash />,
    iconBackground: 'rgb(206, 56, 70)',
    desc: 'AngularJS, Gulp.js, Integrated Development environment, Scrum'
  },
]

/*
  Static skill data for animating bubbles 
*/
const skills = [
  {
    stack: 'hmtl',
    bubbleSize: 'medium',
    icon: <IoLogoHtml5 />
  },
  {
    stack: 'react',
    bubbleSize: 'large',
    icon: <FaReact />
  },
  {
    stack: 'css',
    bubbleSize: 'default',
    icon: <IoLogoCss3 />
  },
  {
    stack: 'javascript',
    bubbleSize: 'medium',
    icon: <IoLogoJavascript />
  },
  {
    stack: 'bootstrap',
    bubbleSize: 'default',
    icon: <BsFillBootstrapFill />
  },
  {
    stack: 'gatsby',
    bubbleSize: 'default',
    icon: <GrGatsbyjs />
  },
  {
    stack: 'node',
    bubbleSize: 'medium',
    icon: <IoLogoNodejs />
  },
  {
    stack: 'mongodb',
    bubbleSize: 'medium',
    icon: <SiMongodb />
  },
  {
    stack: 'wordpress',
    bubbleSize: 'medium',
    icon: <FaWordpress />
  },
  {
    stack: 'sass',
    bubbleSize: 'default',
    icon: <IoLogoSass />
  },
  {
    stack: 'php',
    bubbleSize: 'default',
    icon: <SiPhp />
  },
  {
    stack: 'jquery',
    bubbleSize: 'medium',
    icon: <SiJquery />
  },
  {
    stack: 'material',
    bubbleSize: 'default',
    icon: <SiMaterialui />
  },
  {
    stack: 'github',
    bubbleSize: 'default',
    icon: <IoLogoGithub />
  },
  {
    stack: 'firebase',
    bubbleSize: 'medium',
    icon: <SiFirebase />
  },
]

const About = () => {    
  return (
    <>
      <Header iconHide="hidden"/>
      <main className="about">
        <div className="holder-background">
          <Container>
            <Row>
                <div className="holder-greetings">
                  <p className="greetings"> &#60;/&#62; Hi! &#60;/&#62; </p>
                  <p className="name text">I'm &#123; Victor! &#125; </p>
                  <p className="name text">Mid-level Front-end Developer</p>
                </div>
            </Row>
          </Container>
        </div>
        <section className="section-profile">
          <Container>
            <Row>
              <div className="wrapper-profile">
                <div className="holder-profile">
                  <div className="holder-image-skills">
                    <div className="holder-image">
                      <LazyLoadImage className="profile-img" src="https://yt3.ggpht.com/ytc/AKedOLRAWAY_J5IEhHVsiqZOekGyDIIk6nCkzqr2pT4wlg=s900-c-k-c0x00ffffff-no-rj" alt="Verrell Soriano Profile" />
                    </div>
                    <ul className="holder-skills">
                      {
                        skills.map((item, i) => {
                          return (
                            <li className={"skill-icon " + item.stack + " " + item.bubbleSize }>{item.icon}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
                <div className="holder-roadmap">
                  <VerticalTimeline>
                    {
                      history.map((item, i) => {
                        return (
                          <VerticalTimelineElement
                            key={i}
                              className="vertical-timeline-element--education"
                              date={item.date}
                              iconStyle={{ background: item.iconBackground, color: '#fff' }}
                              icon={item.icon}
                            >
                              <p className="vertical-timeline-element-title">{item.title}</p>
                              <p className="vertical-timeline-element-subtitle">{item.sub}</p>
                              <p className="vertical-timeline-element-desc"> {item.desc}</p>
                          </VerticalTimelineElement>
                        )
                      })
                    }
                  </VerticalTimeline>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
