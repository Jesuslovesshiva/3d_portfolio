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
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "PLP-Art",
      company_name: "HTML, CSS",
      icon: starbucks,
      iconBg: "#fff",
      date: "",
      points: [
        "Interactive HTML and CSS art project that showcases a collection of mesmerizing artworks created using a pen brush and some water.",
        "The project features a clean and minimalistic layout that allows the viewer to focus on the intricate details of each piece.",
        "The project is a celebration of the beauty of traditional pen brush art, and serves as a reminder of the power of simplicity in design.",
      ],
    },
    {
      title: "Liqui-Planer",
      company_name: "Javascript",
      icon: tesla,
      iconBg: "#fff",
      date: "",
      points: [
        "A powerful web application that enables users to efficiently manage their finances. ",
        "Built using fundamental concepts of JavaScript, the project features a user-friendly interface that allows users to easily track their income, expenses, and savings.",
        "The project showcases advanced programming techniques, such as data validation and error handling, to ensure that user data is accurately captured and processed.",
      ],
    },
    {
      title: "ToDo-React",
      company_name: "React, Tailwindcss",
      icon: shopify,
      iconBg: "#fff",
      date: "",
      points: [
        "'ToDo-React' is a beautifully designed web application that allows users to manage their daily tasks and stay organized. ",
        "The project is built using React and styled with TailwindCSS, creating an intuitive and user-friendly interface.",
        "Users can add, toggle, and delete tasks on their to-do list with ease, and the app displays the number of remaining tasks in real-time.",
        "The project utilizes the power of React and its hooks, such as useState and useRef, to manage the state and interact with the DOM. ",
      ],
    },
    {
      title: "3D Portfolio",
      company_name: "React, Vite, Tailwind and three.js",
      icon: meta,
      iconBg: "#fff",
      date: "",
      points: [
        "The homepage features various interactive 3D models, allowing users to explore your work from all angles and perspectives. ",
        "The website is designed with the user in mind, making it easy for visitors to navigate and find the information they need.",
        "It includes practical features such as the timeline you see right now, complete with interactive elements for each entry. ",
        "The website is responsive and mobile-friendly, ensuring that it looks great on any device.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  