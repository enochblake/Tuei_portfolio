// Resume.js
import React from 'react';
import './resume.css';

import { 
  MdOutlineDateRange, 
  MdOutlineWork, 
  MdOutlineCode 
} from 'react-icons/md';
import { 
  FaSchool, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  FaReact, 
  FaGitAlt, 
  FaLinux, 
  FaNodeJs, 
  FaPhp, 
  FaMapMarkedAlt 
} from 'react-icons/fa';
import { SiJavascript, SiFlask, SiFigma, SiSqlite } from 'react-icons/si';
import { GoOrganization } from 'react-icons/go';
import { BsTools } from 'react-icons/bs';
import { GiNetworkBars, GiTalk } from 'react-icons/gi';
import { AiOutlineTeam, AiOutlineClockCircle, AiOutlineBulb } from 'react-icons/ai';
import { FiTarget } from 'react-icons/fi';
import { IoMdPeople } from 'react-icons/io';

function Resume() {
  return (
    <div className='resume'>
      <div className='side'>
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/800/646/non_2x/information-science-illustration-exclusive-design-inspiration-vector.jpg"
          alt="vector"
        />
        <div className='navigation'>
          <ul className='link-resume'>
            <li className='side-resume'><a href='#education'>Education</a></li>
            <li className='side-resume'><a href='#experience'>Experience</a></li>
            <li className='side-resume'><a href='#skills'>Skills</a></li>
            <li className='side-resume'><a href='/#projects'>Projects</a></li>
          </ul>
        </div>
      </div>

      <div className='main'>
        <h1
          className="text-3xl font-extrabold text-center mb-6 mt-1"
          style={{ color: '#4F2E57' }}
        >
          Resume
        </h1>

        <section id='education'>
          <h2 style={{ backgroundColor: '#cfb7cf' }}>Education</h2>
          <div className='educate'>
            <div className='school'>
              <div className='date-icon'>
                <MdOutlineDateRange />
                <span className='date'>2011 – 2014</span>
              </div>
              <div className='info'>
                <FaSchool />
                <span>JKUAT – Bachelor of IT </span>
              </div>
            </div>

            <div className='school'>
              <div className='date-icon'>
                <MdOutlineDateRange />
                <span className='date'>2015</span>
              </div>
              <div className='info'>
                <FaSchool />
                <span>Strathmore University – Cisco Certified Network Associate</span>
              </div>
            </div>

            <div className='school'>
              <div className='date-icon'>
                <MdOutlineDateRange />
                <span className='date'>2020</span>
              </div>
              <div className='info'>
                <FaSchool />
                <span>VMEdu – Scrum Fundamentals Certified</span>
              </div>
            </div>

            <div className='school'>
              <div className='date-icon'>
                <MdOutlineDateRange />
                <span className='date'>2007 – 2010</span>
              </div>
              <div className='info'>
                <FaSchool />
                <span>Mbooni Girls High School</span>
              </div>
            </div>
          </div>
        </section>

        <section id='experience'>
          <h2 style={{ backgroundColor: '#cfb7cf' }}>Experience</h2>
          
          <div className='job'>
            <div className='date-icon'>
              <MdOutlineDateRange />
              <span className='date'>Mar 2021 – Present</span>
            </div>
            <div className='info'>
              <MdOutlineWork />
              <span>CCTV Operator & ICT Officer</span>
            </div>
            <div className='info'>
              <GoOrganization />
              <span>KUTRRH</span>
            </div>
          </div>

          <div className='job'>
            <div className='date-icon'>
              <MdOutlineDateRange />
              <span className='date'>Jan 2018 – Feb 2021</span>
            </div>
            <div className='info'>
              <MdOutlineWork />
              <span>ICT Assistant</span>
            </div>
            <div className='info'>
              <GoOrganization />
              <span>Bandari SACCO Ltd.</span>
            </div>
          </div>

          <div className='job'>
            <div className='date-icon'>
              <MdOutlineDateRange />
              <span className='date'>Mar 2017 – Jul 2017</span>
            </div>
            <div className='info'>
              <MdOutlineWork />
              <span>IT Support</span>
            </div>
            <div className='info'>
              <GoOrganization />
              <span>EAC Directory Ltd.</span>
            </div>
          </div>

          <div className='job'>
            <div className='date-icon'>
              <MdOutlineDateRange />
              <span className='date'>Oct 2016 – Dec 2016</span>
            </div>
            <div className='info'>
              <MdOutlineWork />
              <span>Researcher</span>
            </div>
            <div className='info'>
              <GoOrganization />
              <span>Research Solutions Africa</span>
            </div>
          </div>

          <div className='job'>
            <div className='date-icon'>
              <MdOutlineDateRange />
              <span className='date'>Jul 2016 – Sep 2016</span>
            </div>
            <div className='info'>
              <MdOutlineWork />
              <span>IT Support</span>
            </div>
            <div className='info'>
              <GoOrganization />
              <span>House of Grace Church, Rongai</span>
            </div>
          </div>

          <div className='job'>
            <div className='date-icon'>
              <MdOutlineDateRange />
              <span className='date'>Nov 2014 – Dec 2015</span>
            </div>
            <div className='info'>
              <MdOutlineWork />
              <span>IT & Digital Dept.</span>
            </div>
            <div className='info'>
              <GoOrganization />
              <span>Red Carpet Events Africa Ltd.</span>
            </div>
          </div>

          <div className='job'>
            <div className='date-icon'>
              <MdOutlineDateRange />
              <span className='date'>May 2014 – Aug 2014</span>
            </div>
            <div className='info'>
              <MdOutlineWork />
              <span>IT Intern</span>
            </div>
            <div className='info'>
              <GoOrganization />
              <span>IEBC</span>
            </div>
          </div>
        </section>

        <section id='skills'> 
          <h2 style={{ backgroundColor: '#cfb7cf' }}>Skills</h2>
          <div className='skills-container'>

            <div className='tech-skills'>
              <h3>Technical Skills</h3>
              <ul className='nav-resume'>
                <li className='resume-skills'><FaHtml5 /> HTML</li>
                <li className='resume-skills'><FaCss3Alt /> CSS</li>
                <li className='resume-skills'><SiJavascript /> JavaScript</li>
                <li className='resume-skills'><FaPython /> Python</li>
                <li className='resume-skills'><FaReact /> ReactJs</li>
                <li className='resume-skills'><SiFlask /> Flask</li>
                <li className='resume-skills'><SiFigma /> UI/UX</li>
                <li className='resume-skills'><FaGitAlt /> Git</li>
                <li className='resume-skills'><FaLinux /> Linux</li>
                <li className='resume-skills'><FaNodeJs /> NodeJs</li>
                <li className='resume-skills'><FaPhp /> PHP</li>
                <li className='resume-skills'><SiSqlite /> SQL</li>
                <li className='resume-skills'><FaMapMarkedAlt /> GIS Data Collection</li>
                <li className='resume-skills'><MdOutlineCode /> Database Management</li>
                <li className='resume-skills'><BsTools /> User Support</li>
                <li className='resume-skills'><GiNetworkBars /> Network Configuration</li>
                <li className='resume-skills'><MdOutlineCode /> Technical Documentation</li>
              </ul>
            </div>

            <div className='soft-skills'>
              <h3>Soft Skills</h3>
              <ul className='nav-resume'>
                <li className='resume-skills'><GiTalk /> Communication & Problem-Solving</li>
                <li className='resume-skills'><AiOutlineTeam /> Teamwork & Adaptability</li>
                <li className='resume-skills'><AiOutlineClockCircle /> Time Management & Attention to Detail</li>
                <li className='resume-skills'><AiOutlineBulb /> Critical Thinking & Creativity</li>
                <li className='resume-skills'><FiTarget /> Empathy & Patience</li>
                <li className='resume-skills'><IoMdPeople /> Leadership & Conflict Resolution</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Resume;
