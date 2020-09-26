const tileData = [
  {
    img: "/images/lightbeat in progress.png",
    title: "LED Shirt / Prom Dress",
    date: "2015",
    attributes: ["Physical", "Digital", "iOS", "Android", "Embedded", "Mechanical Engineering", "Electrical Engineering"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    featured: true,
    index: 0,
  },
  {
    img: "/images/angel_cutout.png",
    index: 1,
    title: "Mechanical Wings (Costume)",
    attributes: ["Physical", "Mechanical Design", "Art", "Class Project"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2016"
  },
  {
    img: "/images/sprite_iphone.png",
    index: 2,
    title: "Sprite",
    date: "2018",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    attributes: ["Digital","Team", "React", "Firebase", "iOS", "Android", "UX", "UI", "Mobile Application","Design Thinking", "User Research", "Prototyping", "User Testing", "Class Project"],
    featured: true,
    website: "https://hci.stanford.edu/courses/cs147/2018/au/projects/TransformingLivingSpace/Sprite/"
  },
  {
    img: "/images/rendezvous_browser.png",
    index: 3,
    title: "Rendezvous Web Platform",
    date: "2020",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    attributes: ["Digital","Team", "React", "Firebase", "UX", "Web Application", "Class Project"],
  },
  {
    img: "/images/glassdoor_redesign.png",
    index: 4,
    title: "Redesign: Glassdoor Mobile",
    date: "2019",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    attributes: ["Digital","Team", "UX", "UI", "Figma", "Prototyping", "Class Project"],
  },
  {
    img: "/images/bow_stand.png",
    index: 5,
    title: "Bow Stand",
    date: "2018",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    attributes: ["Physical", "Manufacturing", "Prototyping", "Design Thinking", "Class Project"],
  },
  {
    img: "/images/waffle_iron_no_text.png",
    index: 6,
    title: "Origami Waffle Iron",
    date: "2019",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    attributes: ["Physical", "Manufacturing", "Prototyping", "Design Thinking", "CAD", "CNC", "Class Project"],
  },
  {
    img: "/images/silkscreening_john.png",
    index: 7,
    title: "Silkscreen T-Shirts",
    attributes: ["Physical", "Graphic Design", "Art"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2018",
  },
  {
    img: "/images/x2_in_use.png",
    index: 8,
    title: "Skydio Software Engineering",
    attributes: ["Digital", "Physical", "Android", "Open Source", "Full Stack", "Internship", "Qt", "Python", "C++"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    credit: " Image courtesy of Skydio ",
    date: "2019",
    featured: true,
  },
  {
    img: "/images/s2_lifestyle.jpg",
    index: 9,
    title: "Skydio User Research",
    attributes: ["Digital", "Physical", "UX", "User Research", "Design Thinking", "Internship", "Drones"],
    credit: " Image courtesy of Skydio ",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2020",
    featured: true,
  },
  {
    img: "/images/gesture robot.png",
    index: 10,
    title: "Gesture Controlled Robot",
    attributes: ["Physical", "Digital", "Embedded", "Robot", "C", "Raspberry Pi", "Class Project", "Drones"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2018",
    featured: true,
  },
  {
    img: "/images/suave_example.png",
    index: 11,
    title: "Stanford UAV Enthusiasts Mentor",
    attributes: ["Physical", "Digital", "Embedded", "Drones", "Club", "Leadership", "Electrical Engineering"],
    credit: " Image courtesy of Russel Kao ",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2018",
    website: "https://stanforduav.org/"
  },
  {
    img: "/images/archery_team.JPG",
    index: 12,
    title: "Stanford Archery Leadership",
    attributes: ["Physical", "Club", "Leadership", "Management"],
    credit: " Image courtesy of Jeff Zhang ",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2020",
    website: "http://archery.stanford.edu/"
  },
  {
    img: "/images/coral compass.JPG",
    index: 13,
    title: "VR Developer at VHIL Stanford",
    attributes: ["Digital", "Team", "VR", "UX", "Unity", "C#", "Python", "Internship"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2018",
    credit: "Image courtesy of VHIL",
    website: "https://vhil.stanford.edu/coralcompass/"
  },
  {
    img: "/images/ar world logo with text.png",
    index: 14,
    title: "MyARWorld AR Model Viewer",
    attributes: ["Digital", "VR", "UI", "Swift", "iOS", "Class"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2019",
  },
  {
    img: "/images/e-wings.jpg",
    index: 15,
    title: "Mind-Controlled Wings",
    attributes: ["Digital", "Physical", "Embedded", "Mechanical Engineering", "Electrical Engineering", "Art", "Class"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2014",
  },
  {
    img: "/images/me210robot.png",
    index: 16,
    title: "Sumo Robot",
    attributes: ["Digital", "Physical", "Embedded", "C", "Mechanical Engineering", "Electrical Engineering", "Team", "Class"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2020",
  },
  {
    img: "/images/whatsnext.png",
    index: 17,
    title: "WhatsNext MIT COVID-19 Hackathon Project",
    attributes: ["Digital", "Team", "Figma", "UI", "UX", "User Research"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2020",
  },
  {
    img: "/images/gitsdone.png",
    index: 18,
    title: "Git S--- Done Board Game",
    attributes: ["Physical", "Digital", "Team", "Figma", "UI", "UX", "User Research", "Class"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2020",
    website: "https://medium.com/serious-games-377g/git-done-game-design-and-iteration-d9c9ca569b2b"
  },
  {
    img: "/images/commute.jpg",
    index: 19,
    title: "Archaeology Intern - Marzamemi Maritime Heritage Project",
    attributes: ["Physical", "Digital", "Team", "Internship"],
    credit: "Image Courtesy of Marzamemi Project",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2017",
    website: "https://marzamemi.stanford.edu/",
  },
  {
    img: "/images/teapot.jpg",
    index: 20,
    title: "Ceramics",
    attributes: ["Physical", "Art"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2018",
  },
  {
    img:"/images/playtest.jpg",
    index: 21,
    title: "INCarceration Serious Card Game",
    attributes: ["Digital", "Physical", "UI", "UX", "User Research", "Art", "Class"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2020",
    credit:"Image courtesy of Vincent Nicandro",
    website:"https://medium.com/serious-games-377g/developing-incarceration-a6c8cfa2dea3"
  },
  {
    img:"/images/bird necklace.png",
    index: 22,
    title: "Bird Necklace Lost Wax Casting",
    attributes: ["Physical", "Art", "Class"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor finibus ligula, vel gravida est rhoncus et. Phasellus feugiat lectus elementum egestas fringilla. Suspendisse ultricies nunc at enim dictum fermentum. Ut vehicula, augue ac commodo ornare, magna leo fringilla diam, eget ullamcorper ex neque vel mauris.",
    date: "2018",
  }
];

export default tileData
