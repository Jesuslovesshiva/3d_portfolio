import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Javascript Native Developer",
      icon: mobile,
    },
    {
      title: "Front-End Developer",
      icon: backend,
    },
    {
      title: "Graphic designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Graphic design",
      company_name: "Reiterer-Grafik / Verlag Ueberreuter ",
      icon: starbucks,
      iconBg: "#fff",
      date: "",
      points: [
        "I worked as an employee for a graphic designer for a period of 6 years, during which I gained extensive experience and knowledge in the field of graphic design.",
        " Throughout that time, I was able to develop my skills in creating visual concepts, designing layouts, and producing digital and print materials.",
        " This experience has provided me with a strong foundation in graphic design and the ability to create impactful designs for a variety of purposes.",
      ],
    },
    {
      title: "Web development",
      company_name: "Harvard CS50x, Udemy, FreeCodeCamp",
      icon: tesla,
      iconBg: "#fff",
      date: "",
      points: [
        "I am a self-motivated individual with a passion for programming and technology. I have taken the initiative to complete various courses at Harvard in computer science, as well as other online courses.",
        "These courses have provided me with a strong foundation in programming languages, software development, and other essential skills required in the industry",
        "The projects below showcase advanced programming techniques, such as data validation and error handling, aswell as appealing visuals",
      ],
    },


    // {
    //   title: "ToDo-React",
    //   company_name: "React, Tailwindcss",
    //   icon: shopify,
    //   iconBg: "#fff",
    //   date: "",
    //   points: [
    //     "'ToDo-React' is a beautifully designed web application that allows users to manage their daily tasks and stay organized. ",
    //     "The project is built using React and styled with TailwindCSS, creating an intuitive and user-friendly interface.",
    //     "Users can add, toggle, and delete tasks on their to-do list with ease, and the app displays the number of remaining tasks in real-time.",
    //     "The project utilizes the power of React and its hooks, such as useState and useRef, to manage the state and interact with the DOM. ",
    //   ],
    // },
    // {
    //   title: "3D Portfolio",
    //   company_name: "React, Vite, Tailwind and three.js",
    //   icon: meta,
    //   iconBg: "#fff",
    //   date: "",
    //   points: [
    //     "The homepage features various interactive 3D models, allowing users to explore your work from all angles and perspectives. ",
    //     "The website is designed with the user in mind, making it easy for visitors to navigate and find the information they need.",
    //     "It includes practical features such as the timeline you see right now, complete with interactive elements for each entry. ",
    //     "The website is responsive and mobile-friendly, ensuring that it looks great on any device.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Daniel proved me wrong.",
      name: "Lena Astrid",
      designation: "CFO",
      company: "ZestSolutions",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a graphic designer who truly cares about their clients' success like Daniel does.",
      name: "Patrick Werner",
      designation: "COO",
      company: "Egeeks",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "We are incredibly grateful to Daniel for his inputs and for optimizing our website. Grātiās tibi agō.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "SpineLabs",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Liqui-Planer",
      description:
      "A powerful web application that enables users to efficiently manage their finances. The project features a user-friendly interface that allows users to easily track their income, expenses, and savings.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },

      ],
      image: carrent,
      source_code_link: "https://jesuslovesshiva.github.io/Liquid-Planer/",
    },
    {
      name: "PLP-Art",
      description:
      "Interactive HTML and CSS art project that showcases a collection of my artworks. The project is a celebration of the beauty of traditional pen brush art, and serves as a reminder of the power of simplicity in design.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://jesuslovesshiva.github.io/PLP-Art/",
    },
    {
      name: "ToDo-React",
      description:
      "Simple ToDo-list that allows users to manage their daily tasks and stay organized.The project is built using React and styled with TailwindCSS, creating an intuitive and user-friendly interface.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://jesuslovesshiva.github.io/Todo-React/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  