export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];



export const projects = [
  {
    id: 1,
    title: "Keeper",
    des: "A note taking app that lets user create, edit and delete notes for everyday tasks. Built using ReactJs and Tailwind CSS with local storage so you don't loose your grocery list.",
    img: "/keeper.png",
    link: "https://keeper13430.netlify.app/",
  },
  {
    id: 2,
    title: "Weatherly",
    des: "A weather display application that displays real time data about the current weather conditions. Also informs you about the UV index and advises accordingly.Built using React JS and CSS. Implemented Open Weather API for hourly weather conditions.",
    img: "/weather.png",
    link: "https://weatherly-i2kn.onrender.com/",
  },
  {
    id: 3,
    title: "Blogify",
    des: "Blog application with an admin panel where admin can perform CRUD operations and share their ideas.Built using NodeJs, ExpressJs and MongoDB.",
    img: "/blog.png",
    link: "https://blogify-liyr.onrender.com/",
  },
  {
    id: 4,
    title: "Skillcomm -Ongoing project",
    des: "A platform to connect workers and people with needs and eliminate the middlemen. Hence increasing the service and financial aspects for the workers",
    img: "/skillcom.png",
    link: "https://skillcomm.onrender.com/",
  },
];




export const workExperience = [
  {
    id: 1,
    title: "Web Development Intern",
    org: "Unwiring Mind",
    desc: "Contributed significantly to the development of a website using React.js, enhancing its interactivity and user experience.Assisted in debugging and refining the codebase to improve overall functionality ",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    org: "Cephei Infotech",
    desc: "Successfully developed and delivered four high-quality client websites using React and SCSS, enhancing the company’s portfolio and demonstrating strong proficiency in modern frontend technologies. These projects involved close collaboration with clients to understand their requirements.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/medhaa25",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/medharawat/",
  },
];
