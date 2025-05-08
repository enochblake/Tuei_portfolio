// Resume.js
import React from 'react';
import './resume.css';

import {
  MdOutlineDateRange, MdOutlineWork, MdOutlineCode,
} from 'react-icons/md';
import {
  FaSchool, FaHtml5, FaCss3Alt, FaPython, FaReact, FaGitAlt,
  FaLinux, FaNodeJs, FaPhp, FaMapMarkedAlt,
} from 'react-icons/fa';
import {
  SiJavascript, SiFlask, SiFigma, SiSqlite,
} from 'react-icons/si';
import { GoOrganization } from 'react-icons/go';
import { BsTools } from 'react-icons/bs';
import { GiNetworkBars, GiTalk } from 'react-icons/gi';
import {
  AiOutlineTeam, AiOutlineClockCircle, AiOutlineBulb,
} from 'react-icons/ai';
import { FiTarget } from 'react-icons/fi';
import { IoMdPeople } from 'react-icons/io';

function Resume() {
  return (
    <div className="resume">
      <aside className="side">
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/800/646/non_2x/information-science-illustration-exclusive-design-inspiration-vector.jpg"
          alt="vector"
        />
        <nav className="navigation">
          <ul className="link-resume">
            <li className="side-resume"><a href="#education">Education</a></li>
            <li className="side-resume"><a href="#experience">Experience</a></li>
            <li className="side-resume"><a href="#skills">Skills</a></li>
            <li className="side-resume"><a href="/#projects">Projects</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <h1 className="text-3xl font-extrabold text-center mb-6 mt-1" style={{ color: '#4F2E57' }}>
          Resume
        </h1>

        {/* Education */}
        <section id="education">
          <h2 style={{ backgroundColor: '#cfb7cf' }}>Education</h2>
          <div className="educate">
            {[
              { year: '2024', institution: 'Software Engineering – Moringa School' },
              { year: '2020', institution: 'VMEdu – Scrum Fundamentals Certified' },
              { year: '2015', institution: 'Strathmore University – Cisco Certified Network Associate' },
              { year: '2011 – 2014', institution: 'JKUAT – Bachelor of IT' },
              { year: '2007 – 2010', institution: 'Mbooni Girls High School' },
            ].map((edu, i) => (
              <div className="school" key={i}>
                <div className="date-icon">
                  <MdOutlineDateRange />
                  <span className="date">{edu.year}</span>
                </div>
                <div className="info">
                  <FaSchool />
                  <span>{edu.institution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 style={{ backgroundColor: '#cfb7cf' }}>Experience</h2>
          {[
            {
              date: 'Mar 2021 – Present',
              role: 'CCTV Operator & ICT Officer',
              company: 'KUTRRH',
            },
            {
              date: 'Jan 2018 – Feb 2021',
              role: 'ICT Assistant',
              company: 'Bandari SACCO Ltd.',
            },
            {
              date: 'Mar 2017 – Jul 2017',
              role: 'IT Support',
              company: 'EAC Directory Ltd.',
            },
            {
              date: 'Oct 2016 – Dec 2016',
              role: 'Researcher',
              company: 'Research Solutions Africa',
            },
            {
              date: 'Jul 2016 – Sep 2016',
              role: 'IT Support',
              company: 'House of Grace Church, Rongai',
            },
            {
              date: 'Nov 2014 – Dec 2015',
              role: 'IT & Digital Dept.',
              company: 'Red Carpet Events Africa Ltd.',
            },
            {
              date: 'May 2014 – Aug 2014',
              role: 'IT Intern',
              company: 'IEBC',
            },
          ].map((job, i) => (
            <div className="job" key={i}>
              <div className="date-icon">
                <MdOutlineDateRange />
                <span className="date">{job.date}</span>
              </div>
              <div className="info">
                <MdOutlineWork />
                <span>{job.role}</span>
              </div>
              <div className="info">
                <GoOrganization />
                <span>{job.company}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 style={{ backgroundColor: '#cfb7cf' }}>Skills</h2>
          <div className="skills-container">
            {/* Technical Skills */}
            <div className="tech-skills">
              <h3>Technical Skills</h3>
              <ul className="nav-resume">
                {[
                  [<FaHtml5 />, 'HTML'],
                  [<FaCss3Alt />, 'CSS'],
                  [<SiJavascript />, 'JavaScript'],
                  [<FaPython />, 'Python'],
                  [<FaReact />, 'ReactJs'],
                  [<SiFlask />, 'Flask'],
                  [<SiFigma />, 'UI/UX'],
                  [<FaGitAlt />, 'Git'],
                  [<FaLinux />, 'Linux'],
                  [<FaNodeJs />, 'NodeJs'],
                  [<FaPhp />, 'PHP'],
                  [<SiSqlite />, 'SQL'],
                  [<FaMapMarkedAlt />, 'GIS Data Collection'],
                  [<MdOutlineCode />, 'Database Management'],
                  [<BsTools />, 'User Support'],
                  [<GiNetworkBars />, 'Network Configuration'],
                  [<MdOutlineCode />, 'Technical Documentation'],
                ].map(([icon, skill], i) => (
                  <li className="resume-skills" key={i}>{icon} {skill}</li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="soft-skills">
              <h3>Soft Skills</h3>
              <ul className="nav-resume">
                {[
                  [<GiTalk />, 'Communication & Problem-Solving'],
                  [<AiOutlineTeam />, 'Teamwork & Adaptability'],
                  [<AiOutlineClockCircle />, 'Time Management & Attention to Detail'],
                  [<AiOutlineBulb />, 'Critical Thinking & Creativity'],
                  [<FiTarget />, 'Empathy & Patience'],
                  [<IoMdPeople />, 'Leadership & Conflict Resolution'],
                ].map(([icon, skill], i) => (
                  <li className="resume-skills" key={i}>{icon} {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Resume;
