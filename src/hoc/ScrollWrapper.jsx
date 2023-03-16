// import { motion } from "framer-motion";
// import React, { useState, useEffect } from 'react';

// import { styles } from "../styles";
// import { staggerContainer } from "../utils/motion";

// const ScrollWrapper = (Component, idName) => {
//   const [inView, setInView] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (scrollPosition === 0) {
//       setInView(false);
//     }
//   }, [scrollPosition]);

//   return (
//     <motion.section
//       variants={staggerContainer()}
//       initial={inView ? "hidden" : "visible"}
//       animate={inView ? "show" : "visible"}
//       className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//     >
//       <span className="hash-span" id={idName}>
//         &nbsp;
//       </span>
//       <Component setInView={setInView} />
//     </motion.section>
//   );
// };

// const About = ({ setInView }) => {
//   useEffect(() => {
//     setInView(true);
//   }, [setInView]);

//   // the rest of the component
// };

// export default ScrollWrapper;