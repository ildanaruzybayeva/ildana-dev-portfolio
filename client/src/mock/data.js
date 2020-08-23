import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  // title: 'Ildana Ruzybayeva | Full-stack developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hej, my name is',
  name: 'Ildana Ruzybayeva',
  subtitle: '',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne: `I am looking to join a company which brings positive change to
   people with its product. I have previously done a lot of non-profit and research work on education, 
   climate change and gender equality. While there are many ideas on how to make this world a better place, 
   I believe coding actually helps to turn many ideas into real solutions`,
  paragraphTwo: `I value mentorship and knowledge sharing. 
  Currently I am teaching girls to code for free by hosting JS study circles. 
  I have also worked as a code mentor for Pink programming bootcamp.`,
  paragraphThree: `Technologies I worked with so far include: Javascript ES5+, ReactJS,
   NodeJS/Express, MySQL, PostgreSQL, HTML/CSS, GatsbyJS, Gitpod, GraphQL, Git/Github, Jasmine. 
   I focus deeply on these skills and the new ones are added when certain experience level is reached`,
  resume: 'https://www.linkedin.com/in/ruzybayeva/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'discover-kz.png',
    title: 'Discover-Kazakhstan (Chrome Extension)',
    info:
      'Full Stack React / Nodejs chrome extension. Get latest news, personalized greeting, exchange rates, weather updates, featured photo and a quote straight from Almaty / Kazakhstan. All in one place - your chrome browser.',
    info2: '#reacthooks #nodejs #postgreSQL #gitpod',
    url: 'https://discover-kz-extension.netlify.app/',
    repo: 'https://github.com/ildanaruzybayeva/discover-kz-chrome-extenstion', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tretton37.PNG',
    title: '_tretton37-ninjas',
    info:
      'React hooks project based on public API from tretton37. Displays all employees with names, office and social media links. Main features: filter by office, pagination, name sort. Fully responsive and written without any UI frameworks. Deployed on Netlify',
    info2: '#javascript #reacthooks #css #gitpod',
    url: 'https://tretton37-ninjas.netlify.app/',
    repo: 'https://github.com/ildanaruzybayeva/tretton37-ninjas', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'messageup.PNG',
    title: 'Message-up',
    info:
      'Real-time chat application based on socket.io. Features: create a room, join/leave a room, real time messaging. Client is written in React while backend with Node/Express Responsive and built wihtout any UI frameworks. Deployed on Heroku and Netlify',
    info2: '#reacthooks #nodejs #express #socket.io #css',
    url: 'https://message-up.netlify.app/',
    repo: 'https://github.com/ildanaruzybayeva/messenger-react-nodejs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ltmfs.PNG',
    title: 'Letter to future self',
    info:
      'The app allows to schedule and send a Letter to your future self. Client built with react and server with nodejs. The app is not deployed due to personal email being used as the main sender. Feel free to browse the code nevertheless',
    info2: '#reacthooks #nodejs #express #nodemailer #google-OAuth2',
    url: 'https://github.com/ildanaruzybayeva/letter-future-self-node-react',
    repo: 'https://github.com/ildanaruzybayeva/letter-future-self-node-react', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    'That was me. I am curious to learn about you. Feel free to contact me regarding job-offers, mentorship or other code-realated activities. ',
  btn: 'Email',
  email: 'ildana.ruzybayeva@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ildana_dev',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ruzybayeva/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ildanaruzybayeva',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
