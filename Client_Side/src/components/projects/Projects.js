import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";


// project image start 
import Task_Manager from "../../assets/images/projects/Task_Manager.JPG"
import Tosil_Office from "../../assets/images/projects/Tosil_Office.JPG"
import Bank_Asia_Agent_Banking from "../../assets/images/projects/Bank_Asia_Agent_Banking.JPG"
import Bank_Asia_Agent_Banking_Office_Side from "../../assets/images/projects/Bank_Asia_Agent_Banking_Office_Side.JPG"
import Imo_Holidays from "../../assets/images/projects/Imo_Holidays.JPG"
import My_Old_Portfolio from "../../assets/images/projects/My_Old_Portfolio.JPG"
import My_Old_Portfolio_2 from "../../assets/images/projects/My_Old_Portfolio_2.JPG"


import MongoDB from "../../assets/images/projects/MongoDB.JPG"
import Express from "../../assets/images/projects/Express.JPG"
import React_Js from "../../assets/images/projects/React.JPG"
import Node_Js from "../../assets/images/projects/Node_Js.JPG"
import JavaScript from "../../assets/images/projects/JavaScript.JPG"
import MongoDB_Project from "../../assets/images/projects/MongoDB_Project.JPG"




import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Task Manager Project"
          des="In this task manager project first create profile, update profile, recover profile password and 
          create task, delete task, update task"
          src={Task_Manager}
          link_github="https://github.com/SoftZoneSapur/-Task-manager-project"
          link_website="https://task-manager-project-full.netlify.app/"
        />
        <ProjectsCard
          title="Bank Asia Office Side"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Bank_Asia_Agent_Banking_Office_Side}
          link_github="https://github.com/AdibRasel/Bank_Asia_Office"
          link_website="https://adibrasel.github.io/Bank_Asia_Office/"
        />
        <ProjectsCard
          title="Tosil_Office"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Tosil_Office}
          link_github="https://github.com/AdibRasel/Tosil_Office"
          link_website="https://adibrasel.github.io/Tosil_Office/"
        />
        <ProjectsCard
          title="Bank_Asia_Agent_Banking"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Bank_Asia_Agent_Banking}
          link_github="https://github.com/SoftZoneSapur/Bank_Asia"
          link_website="https://bank-asia.netlify.app/"
        />
        <ProjectsCard
          title="Imo_Holidays"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Imo_Holidays}
          link_github="https://imoholidays.com/"
          link_website="https://imoholidays.com/"
        />
        <ProjectsCard
          title="My_Old_Portfolio 1"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={My_Old_Portfolio}
          link_github="https://github.com/AdibRasel/RaselHossainAdib"
          link_website="https://adibrasel.github.io/RaselHossainAdib/"
        />
        <ProjectsCard
          title="My_Old_Portfolio 2"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={My_Old_Portfolio_2}
          link_github="https://github.com/AdibRasel/RaselHossain"
          link_website="https://adibrasel.github.io/RaselHossain/"
        />
      </div>



      <div className="flex justify-center items-center text-center mt-5">
        <Title
          title=""
          des="I have created these web sites for learning, all the code I have written and saved here"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MongoDB"
          des="In this task manager project first create profile, update profile, recover profile password and 
          create task, delete task, update task"
          src={MongoDB}
          link_github="https://github.com/AdibRasel/MongoDB"
          link_website="https://adibrasel.github.io/MongoDB/"
        />
        <ProjectsCard
          title="Express Js"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Express}
          link_github="https://github.com/AdibRasel/Express_js/"
          link_website="https://adibrasel.github.io/Express_js/"
        />
        <ProjectsCard
          title="React Js"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={React_Js}
          link_github="https://github.com/adibrasel/React_JS"
          link_website="https://adibrasel.github.io/React_JS/index.html"
        />
        <ProjectsCard
          title="Node Js"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Node_Js}
          link_github="https://github.com/AdibRasel/Node_JS"
          link_website="https://adibrasel.github.io/Node_JS/"
        />
        <ProjectsCard
          title="JavaScript"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={JavaScript}
          link_github="https://github.com/AdibRasel/Javascript"
          link_website="https://adibrasel.github.io/Javascript/"
        />
        <ProjectsCard
          title="MongoDB_Project"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={MongoDB_Project}
          link_github="https://github.com/AdibRasel/MongoDB_Project"
          link_website="https://adibrasel.github.io/MongoDB_Project/"
        />
      </div>




    </section>
  );
}

export default Projects