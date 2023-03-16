import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component" // so nice
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'; 

import { styles } from '../styles'
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  // set the link based on the title
  // let link = '';
  // switch(experience.title) {
  //   case 'PLP-Art':
  //     link = 'https://www.ueberreuter.at/';
  //     break;
  //   case 'Liqui-Planer':
  //     link = 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x';
  //     break;
  //   case 'ToDo-React':
  //     link = 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x';
  //     break;
  //   case '3D Portfolio':
  //     link = 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x';
  //     break;
  //   default:
  //     break;
  //     <a href={link} target="_blank" rel="noopener noreferrer">    </a> // for title

  // <a href={"https://www.ueberreuter.at/"} target="_blank" rel="noopener noreferrer"></a>
  // <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-1 bg-cyan-200"></span>
  // <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-1 bg-cyan-200"></span>
  // }

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #48D1CC' }}
      date={experience.date }
      iconStyle={{ background: experience.iconBg }}
      icon={
  <div className="flex justify-center items-center w-full h-ful hover:scale-125 border-cyan-700  border-4 rounded-full">
      <img 
        src={experience.icon} 
        alt={experience.company_name}
        className="w-[100%] h-[90%] object-contain rounded-full" />

  </div>
}
    >
      <div>

          <h3 className="text-[24px] font bold text-cyan-500 relative cursor-default">
            <span className="transition-all duration-300 hover:text-cyan-200">{experience.title}</span>
          </h3>
        
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work & Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");