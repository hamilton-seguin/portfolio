import gameoverImg from '@/image/you-ded.webp'
import niloomImg from '@/image/niloom-ai.webp'
import jablonkowyImg from '@/image/jablonkowylas.webp'
import porfolioImg from '@/image/portfolio.webp'
import visImg from '@/image/voyageinstyle.webp'
import nasaImg from '@/image/nasa-api.webp'

const modalContents = {
  aboutMe: {
    title: 'About me',
    descriptionHeader: (
      <>
        👨‍💻 Senior Software Developer | 3+ Years Experience | Front-End
        Development
        <br />
        ⚙️ Scalable & Modular Solutions | 🚀 Driving Seamless User Experiences
        <br />
        🌟 Leading Cross-Functional Teams
      </>
    ),
    description: (
      <>
        Hi, I’m Hamilton – a passionate software developer specializing in{' '}
        <b>front-end</b> and <b>full-stack development</b>. With expertise in{' '}
        <b>Next.js</b>, <b>TypeScript</b>, <b>Node.js</b>, <b>Tailwind CSS</b>,
        and <b>Three.js</b>, I craft seamless, scalable solutions that bridge
        creativity and functionality. ✨
        <br />
        <br />I thrive on tackling challenges that push me to grow, always eager
        to embrace opportunities to <b>learn</b>, <b>innovate</b>, and{' '}
        <b>elevate</b> my craft.
        <br />
        <br />
        Currently, I’m a <b>Senior Frontend Developer</b> at{' '}
        <a href="https://niloom.ai" target="_blank">
          Niloom
        </a>
        , where I lead projects that deliver impactful user experiences. 📈
      </>
    ),
  },
  projects: {
    title: 'Projects',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </>
    ),
  },
  contactMe: {
    title: 'Contact Me',
    description: (
      <>
        Let’s connect!
        <br />
        <br />
        Whether you have a project idea, collaboration in mind, or just want to
        say hi, feel free to reach out.
        <br />
        <br />• Find me on:{' '}
        <a
          href="https://www.linkedin.com/in/hamilton-seguin-6a5783270/?locale=en_US"
          target="_blank"
        >
          LinkedIn
        </a>
        <br />• <a href="mailto:hamilton.seguin@gmail.com">Email me</a>
        <br />
        <br />
        You can also follow my work or reach out via these platforms:
        <br />
        <br />•{' '}
        <a href="https://github.com/hamilton-seguin" target="_blank">
          GitHub
        </a>
        <br />
        <br />I look forward to hearing from you!
      </>
    ),
  },
  tutorial: {
    title: 'Tutorial',
    description: (
      <>
        Z / ↑ : Forward <br /> A / ← : Left <br /> S / ↓ : Backward <br /> E / →
        : Right <br /> Space : Jump <br /> F : Special
      </>
    ),
  },
  respawn: {
    title: 'Game Over',
    img: gameoverImg,
    description: null,
  },
}

export const projectsData = [
  {
    title: 'Niloom AI',
    subtitle: 'AR/VR Content Creation Platform with Generative AI',
    img: niloomImg,
    stacks: [
      'NextJS',
      '|',
      'TypeScript',
      '|',
      'TailwindCSS',
      '|',
      '@tanstack/react-query',
      '|',
      'ThreeJS',
      '|',
      'R3F',
      '|',
      'Webflow',
    ],
    description: (
      <>
        Niloom AI is an innovative platform empowering creators to produce,
        share, and experience AR/VR projects. As the lead developer of the
        Player App, I spearheaded efforts to enhance the user experience by
        enabling users to explore, comment on, and reward projects seamlessly.
        Built as an embedded browser app using Next.js& TypeScript, the Player
        App employs @tanstack/react-query for optimal performance and data
        caching.
        <br />
        <br />
        I am currently developing a Preview Feature using Three.js and R3F,
        allowing users to view immersive projects directly in the browser. This
        feature bridges the gap between browser accessibility and XR device
        compatibility, offering a versatile, user-friendly solution.
        <br />
        <br />
        Beyond the Player App, I designed and launched Niloom’s landing page
        using Webflow. I coordinated with design and marketing teams to deliver
        a polished, responsive landing page.
      </>
    ),
    achievements: [
      '• Rapid Learning: Mastered Next.js (building on prior React experience) and Webflow in record time to successfully deliver high-quality features and solutions.',
      '• Legacy Code Refactoring: Transitioned the Player App from a monolithic to modular architecture, significantly improving performance, reducing unnecessary API calls, and optimizing page renders.',
      '• Leadership: Managed a team of 4 developers, creating and delegating tasks via Jira/ClickUp, while ensuring code quality through PR reviews and sprint planning.',
      '• Token System Architecture: Designed and implemented a custom currency system, overseeing the end-to-end process from backend logic to frontend integration and roadmap creation.',
    ],
    professional: true,
    url: 'https://niloom.ai/',
  },
  {
    title: 'Portfolio',
    subtitle: 'Playful & Immersive React Three Fiber Experience',
    img: porfolioImg,
    stacks: [
      'R3F',
      '|',
      'Drei',
      '|',
      'ThreeJS',
      '|',
      'NextJS',
      '|',
      'TailwindCSS',
      '|',
      'Blender',
    ],
    description: (
      <>
        This portfolio is an interactive and immersive showcase of my personal
        and professional journey. Built as a dynamic mini-world with Three.js,
        R3F, and Next.js, users control an avatar to explore portals that reveal
        modals featuring my experience, projects, and contact information. Each
        element is designed to highlight my technical skills in a creative and
        engaging way.
        <br />
        <br />
        Initially created using vanilla Three.js and JavaScript, the portfolio
        was later rebuilt entirely with React-Three-Fiber (R3F). This process
        allowed me to master R3F while integrating it into a Next.js
        environment, a skillset I leveraged in my professional role at Niloom.
        <br />
        <br />
        The portfolio demonstrates my ability to integrate modular,
        multi-environment projects, with dedicated pages showcasing Jablonkowy
        Las (built with Gatsby) and NASA API (featuring a Node.js backend and
        React frontend).
      </>
    ),
    achievements: [
      '•	Learned & Applied New Skills: Mastered Three.js, R3F, and Blender to create an interactive, visually stunning experience.',
      '•	Multi-Environment Integration: Seamlessly combined Gatsby, Next.js, and Node.js into a cohesive, modular portfolio structure.',
      '•	Responsiveness & Accessibility: Designed the entire experience to be fully responsive and accessible on all devices.',
      '•	Creativity & Functionality: Merged creativity with technical expertise to build a portfolio that showcases my unique approach to development.',
    ],
    professional: false,
    url: '',
  },
  {
    title: 'Nasa API',
    subtitle: 'Nasa API',
    img: nasaImg,
    stacks: ['NodeJS', '|', 'Express', '|', 'Mongoose', '|', 'MongoDB'],
    description: (
      <>
        The Nasa API project is a personal backend-focused endeavor that
        catalogs all SpaceX rocket launches since 2006 while enabling users to
        schedule and manage fictional rocket launches. These launches target
        planets within the habitable zone around other stars, based on data from
        NASA’s Kepler mission. Scheduled launches are stored in a persistent
        MongoDB database and dynamically updated across the Upcoming Launches
        and History pages as their status changes.
        <br />
        <br />
        This project leverages Node.js and Express for building the server,
        handling routing, and managing API calls, while Mongoose connects the
        server to a MongoDB cluster with well-defined database schemas. I also
        incorporated a local CSV file containing Kepler mission data to filter
        and populate target planets for the custom rocket launch scheduler.
      </>
    ),
    achievements: [
      '•	Mastered Backend Fundamentals: Learned Node.js and Express to build RESTful APIs and handle third-party API calls (SpaceX API).',
      '•	Database Expertise: Designed and implemented Mongoose schemas for efficient and reliable database connectivity with MongoDB.',
      '•	Custom API Development: Created a custom API to process filtered Kepler mission data and schedule fictional launches with persistent storage.',
      '•	Hands-On Learning: This project deepened my understanding of backend development, database management, and working with real-world datasets.',
    ],
    professional: false,
    url: 'https://nasa-api-xi-five.vercel.app/',
  },
  {
    title: 'Jablonkowy Las',
    subtitle: 'Polish Summer Resort Website',
    img: jablonkowyImg,
    stacks: [
      'Gatsby',
      '|',
      'GraphQL',
      '|',
      'TailwindCSS',
      '|',
      'i18next',
      '|',
      'Vercel',
    ],
    description: (
      <>
        Jablonkowy Las is a website designed for a charming summer resort in the
        Masurian Lake District, showcasing its beauty and appeal to visitors.
        Built with Gatsby and GraphQL, the website leverages modern web
        technologies to deliver a fast and cost-efficient experience. The
        integration of i18next ensures seamless internationalization, making the
        site accessible to a broader audience.
        <br />
        <br />
        As my first professional freelance project, I was responsible for the
        entire process—from design to deployment. I collaborated with the client
        to transform their vision from Figma designs into a functional,
        responsive website. Along the way, I mastered Gatsby and GraphQL,
        appreciating GraphQL’s ability to load only the necessary data for each
        page, optimizing performance and reducing costs. Learning i18next for
        translations was an equally rewarding experience, allowing me to expand
        the site’s accessibility to multiple languages.
      </>
    ),
    achievements: [
      '•	New Skills: Learned and applied Gatsby and GraphQL, understanding their benefits and limitations.',
      '•	Efficient Internationalization: Implemented i18next to provide smooth, multi-language support.',
      '•	Project Ownership: Successfully managed the project end-to-end, from initial design to deployment on Vercel.',
      '•	Fun fact: I also took the pictures of the resort for the website',
    ],
    professional: true,
    url: 'https://jablonkowylas.website/',
  },
  {
    title: 'Voyage in Style',
    subtitle: 'Personal Travel Blog Showcase',
    img: visImg,
    stacks: [
      'WordPress',
      '|',
      'PHP',
      '|',
      'HTML5',
      '|',
      'CSS3',
      '|',
      'JavaScript',
    ],
    description: (
      <>
        Voyage in Style is my personal travel blog, where I share detailed
        articles, guides, and photography from my journeys around the world with
        my wife. This project was born out of a need to create a custom website
        to showcase our adventures, and it marked the beginning of my journey
        into web development.
        <br />
        <br />
        Built with WordPress, PHP, HTML5, CSS3, and JavaScript, the site
        features a custom WordPress theme I developed from scratch. I learned
        PHP to create custom functions (plugins), stepped into JavaScript for
        interactive features, and embraced WordPress’s flexibility to craft a
        clean and minimalistic design. This project not only sparked my passion
        for web development but also solidified my decision to pursue it as a
        career.
      </>
    ),
    achievements: [
      '•	Rapid Learning: Published the website just 3 months after starting to learn the basics of HTML, CSS, JavaScript, WordPress, and PHP.',
      '•	High Traffic: Attracts over 5,000 unique visitors per month thanks to its engaging content and user-friendly design.',
      '•	Prestigious Collaborations: Led to partnerships with some of the world’s most renowned hotels.',
    ],
    professional: true,
    url: 'https://voyageinstyle.net/',
  },
]

export default modalContents
