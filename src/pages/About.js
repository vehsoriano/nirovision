import React, {} from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Header from '../components/Header'
import Footer from '../components/Footer';

import { FaLaptopHouse } from "react-icons/fa";


const history = [
  {
    date: '2011 - present',
    icon: <FaLaptopHouse />,
    title: 'Creative Director',
    sub: 'Miami, FL',
    desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading'
  },
  {
    date: '2011 - present',
    icon: <FaLaptopHouse />,
    title: 'Creative Director',
    sub: 'Miami, FL',
    desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading'
  },
  {
    date: '2011 - present',
    icon: <FaLaptopHouse />,
    title: 'Creative Director',
    sub: 'Miami, FL',
    desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading'
  },
]

const About = () => {    

  return (
    <>
      <Header />
      <main className="about">
        <div className="holder-profile">
          <div className="holder-image">
            <img src="https://yt3.ggpht.com/ytc/AKedOLRAWAY_J5IEhHVsiqZOekGyDIIk6nCkzqr2pT4wlg=s900-c-k-c0x00ffffff-no-rj" alt="Verrell Soriano Profile" />
          </div>
          <div className="holder-roadmap">
            {
              history.map((item, i) => {
                return (
                  <VerticalTimeline key={i}>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#f2f2f2' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date={item.date}
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#f2f2f2' }}
                      icon={item.icon}
                    >
                      <h3 className="vertical-timeline-element-title">{item.title}</h3>
                      <h4 className="vertical-timeline-element-subtitle">{item.sub}</h4>
                      <p>
                        {item.desc}
                      </p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                )
              })
            }
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
