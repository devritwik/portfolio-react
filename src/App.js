
import './App.css';
import HeroText from './components/HeroText';
import IconButton from './components/IconButton';
import RoundedImage from './components/RoundedImage';
import SectionHeading from './components/SectionHeading';
import SkillItem from './components/SkillItem';
import SocialIcon from './components/SocialIcon';

//Import All Icons
import ReactIcon from './asset/icons/reactjs-icon.svg';
import ExpressIcon from './asset/icons/expressjs-icon.svg';
import MongoIcon from './asset/icons/mongodb-icon.svg';
import NodeIcon from './asset/icons/nodejs-icon.svg';
import JSIcon from './asset/icons/js.svg';
import HTMLIcon from './asset/icons/html5.svg';
import CSSIcon from './asset/icons/css3.svg';
import GitIcon from './asset/icons/git.svg';
import ReduxIcon from './asset/icons/icons8-redux.svg';
import DockerIcon from './asset/icons/icons8-docker.svg';
import NextIcon from './asset/icons/nextjs-icon-svgrepo-com.svg';
import TSIcon from './asset/icons/icons8-typescript.svg';


//Social Media Icons
import LinkedInIcon from './asset/icons/icons8-linkedin.svg';
import GithubIcon from './asset/icons/icons8-github.svg';
import TwitterIcon from './asset/icons/icons8-twitter.svg';
import FBIcon from './asset/icons/icons8-facebook.svg';




function App() {
  return (
    <div className="App">
      <div className='Social'>
          <SocialIcon link={"https://www.linkedin.com/in/ritwikdax/"} src={LinkedInIcon}/>
          <SocialIcon link={"https://github.com/devritwik"} src={GithubIcon}/>
          <SocialIcon link={"https://twitter.com/ritwikdax"} src={TwitterIcon}/>
          <SocialIcon link={"https://www.facebook.com/ritwik.das.3348"} src={FBIcon}/>
        </div>
      <header className="App-header">
        <div className='Main'>
          
            <div><RoundedImage/></div>
            <div>
              <h3 className='SubHeading'>Hi 👋, I'm</h3>
              <HeroText text={"Ritwik."}/>
            </div>
          
        </div>
        <div className='SubContent'>
          <h5>Full Stack (MERN) Web Developer with 4 years of experience 💼 | ✅ Software Engineer | 
          ✅ Gate CSE'2022 Qualified | Looking for the right opportunity in 
            Tech Company to associate myself and extend my best contribution.</h5>
          <IconButton text={"Resume"}/>
        </div>
      </header>
      <section>
        <SectionHeading text={"Skills & Tech Stack"}/>
        <div className='SkillSection'>
          <SkillItem text={"ReactJS"} src={ReactIcon}/>
          <SkillItem text={"NodeJS"} src={NodeIcon}/>
          <SkillItem text={"ExpressJs"} src={ExpressIcon}/>
          <SkillItem text={"MongoDB"} src={MongoIcon}/>
          <SkillItem text={"Javascript"} src={JSIcon}/>
          <SkillItem text={"ReduxJS"} src={ReduxIcon}/>
          <SkillItem text={"TypeScript"} src={TSIcon}/>
          <SkillItem text={"HTML"} src={HTMLIcon}/>
          <SkillItem text={"CSS"} src={CSSIcon}/>
          <SkillItem text={"Git & GitHub"} src={GitIcon}/>
          <SkillItem text={"NextJS"} src={NextIcon}/>
          <SkillItem text={"Docker"} src={DockerIcon}/>
       
        </div>
      </section>
    </div>
  );
}

export default App;
