import { Injectable } from '@angular/core';
import { Project, ProjectDetail } from '../Interfaces/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
   projects: Project[] = [
    {
      subheading: 'Web Development',
      projects: [
        {
          route: 'phobiaFix',
          image: 'assets/_images/phobiaFix.PNG',
          alt: 'Phobia-fix',
          title: 'PHOBIA FIX',
          github: '',
          site: 'https://phobia-fix-1-2655f8532581.herokuapp.com/',
          tools:".Net.Core MVC, CRUD, MongoDb",
          about:"Welcome to my project, the Phobia Tracking Website!  This innovative web application is designed to empower users to manage and conquer their fears. The platform provides an easy and intuitive way to add, track, and overcome phobias, helping individuals take control of their lives."
        },
        {
          route: 'fitnessZone',
          image: 'assets/_images/fitnesszone.png',
          alt: 'FITNESS ZONE',
          title: 'FITNESS ZONE',
          github: 'https://github.com/GaelLouage/workoutShop',
          site: '',
          tools:".NET.Core MVC, CRUD, MongoDB, , AWS ",
          about:" Our workout website is built on the foundation of .NET Core MVC, a powerful framework that allows us to create a dynamic and interactive user interface. With this technology, we can deliver a visually appealing and intuitive platform for users to buy workout programs. The implementation of CRUD (Create, Read, Update, Delete) functionality using .NET Core MVC enables efficient management of workout content. Through this feature, users can easily browse, modify, and delete workout programs, ensuring a seamless experience when interacting with our website. To store and retrieve data, we have integrated MongoDB, a flexible and scalable NoSQL database. MongoDB allows us to efficiently manage workout program information, such as program details, user preferences, and purchase history. This ensures that users can access the necessary data quickly and seamlessly. For hosting our website, we rely on the reliable infrastructure provided by Amazon Web Services (AWS). AWS offers a scalable and secure cloud computing environment, ensuring high uptime and optimal performance for our workout platform. With AWS, we can easily manage resources, handle peak traffic, and maintain data security. In addition to the technologies mentioned, we leverage other AWS services to enhance the functionality and reliability of our workout website. For example, we may utilize AWS S3 for storing media files, AWS CloudFront for content delivery and caching, and AWS Elastic Load Balancer for load balancing across multiple servers. These services contribute to a fast and reliable user experience. By combining .NET Core MVC, CRUD functionality, MongoDB, and AWS, our workout website provides a user-friendly platform for customers to browse, purchase, and engage with a variety of workout programs. This technology stack ensures a seamless experience, efficient data management, and high reliability throughout the user journey. "
        },
        {
          route: 'dejoeri',
          image: 'assets/_images/dejoeri.PNG',
          alt: 'dejoeri',
          title: 'de joeri',
          github: '',
          site: 'https://de-joeri.netlify.app/',
          tools:"HTML5,CSS3,Javascript",
          about:"I am excited to showcase a project that I created to meet the unique needs of a client looking to display stunning villa rental images in a simple and elegant manner. This project, developed using HTML, CSS, and JavaScript, offers a user-friendly way to present captivating images of vacation properties."
        },
        {
          route: 'GamingBlog',
          image: 'assets/_images/BlogGaming.PNG',
          alt: 'BlogGaming',
          title: 'GAMING BLOG',
          github: 'https://github.com/GaelLouage/landing-page-job',
          site: '',
          tools:"Angular, Typescript, CSS, HTML.",
          about:"Gaming blog is a dynamic and interactive platform developed in duo using Angular, Typescript, CSS, and HTML. "
        },
        {
          route: 'WeedShop',
          image: 'assets/_images/weedshop.PNG',
          alt: 'weedshop',
          title: 'CBDShop',
          github: 'https://github.com/GaelLouage/weedshop',
          site: '',
          tools:"ASP.NET CORE, CRUD, Entity Framework, CSS, HTML, Javascript, SQL, Authorization,Authentication ",
          about:"Weed webshop is built using a combination of powerful tools and technologies, including ASP.NET CORE, CRUD, Entity Framework,authorization and authentication CSS, HTML, Javascript, and SQL. These tools enable us to create a robust and scalable backend for our webshop, manage our data effectively, and create a visually appealing and user-friendly interface. "
        },
        {
          route: 'CLONE WEBSITE',
          image: 'assets/_images/jobdag.PNG',
          alt: 'JOBDAG',
          title: 'JOBDAG',
          github: 'https://github.com/GaelLouage/jobdag',
          site: '',
          tools:"HTML,CSS,Bootstrap. ",
          about:"Jobday, is a website created as a duo project with HTML,CSS and bootstrap "
        },
        {
          route: 'DISCORDBOT COMMANDS',
          image: 'assets/_images/discordBotWebsite.png',
          alt: 'discordBotWebsite',
          title: 'DISCORDBOT COMMANDS',
          github: 'https://github.com/GaelLouage/DiscordBotV2',
          site: 'https://serveur-des-gameurs-commandes-bot.netlify.app/',
          tools:".NET.Core Wep api, CRUD, Roles, Dsharpplus ",
          about:"My Discord bot, created using the .NET ASP framework and DSharpPlus library, offers a range of commands to help you with managing your gaming server. With commands such as MovieCommands, NasaCommands, GameCommands, PUBGCommands, VoiceRecieverCommands, SongCommands, and more, you can easily perform tasks like retrieving information, managing channels, censoring content, and playing music. In addition, the bot has a user-friendly interface, allowing you to easily configure its settings and create custom commands to meet your specific needs. We have also implemented robust Authentication and Authorization measures to ensure the security and privacy of our users, along with a user management system to efficiently manage access controls. Furthermore, the bot's code is regularly updated and maintained to ensure its continued functionality and reliability. Our FavoriteGameCreater command allows users to easily share their favorite games with others, and our WeedCommands offer a fun and playful element for users to enjoy. Overall, our bot is a valuable and highly effective tool for managing your gaming server. It offers a wide range of customizable commands and is highly reliable, making it a great addition to any Discord server. "
        },
        {
          route: 'STORYZON',
          image: 'assets/_images/StoryzonMain.PNG',
          alt: 'Storyzon',
          title: 'STORYZON',
          github: 'https://github.com/GaelLouage/storyNew',
          site: '',
          tools:" HTML,CSS,Bootstrap, MongoDb, Asp.net Core MVC. Pdf, Excel, Speech, CRUD, Authentication, Authorization, Javascript ",
          about:"you can find a wide range of brief, concise narratives on a variety of topics. From heartwarming tales of love and friendship, to thought-provoking reflections on life and society, there is something for everyone. You can leave reviews and ratings for the stories you read, listen to audio recordings of the stories, and even save them as PDFs for offline reading. The website has been built using the latest technology, including HTML, CSS, Bootstrap, and MongoDb. I have also utilized Asp.net Core MVC to create a dynamic and user-friendly platform. To provide users with the ability to save stories as PDFs and listen to audio recordings, we have implemented Pdf and Speech functionality. We have also implemented CRUD (Create, Read, Update, Delete) functionality to allow users to review and rate the stories. To ensure the security and privacy of our users, we have implemented Authentication and Authorization measures. I also have a story and user management system in place to allow us to efficiently and effectively manage the content and user accounts on our website. "
        },
        {
          route: 'DEVLAB',
          image: 'assets/_images/devlabWebsite.PNG',
          alt: 'DEVLAB',
          title: 'DEVLAB',
          github: '',
          site: '',
          tools:" HTML,CSS,Bootstrap, Blazor, Asp.net API, ",
          about:"The site is built using Blazor, a framework for building web applications using C# and WebAssembly, and ASP.NET APIs, which provides a modern and powerful platform for delivering content to users. "
        }
 
      ]
  
    },
    {
      subheading: "APi'S",
      projects: [
        {
          route: 'WORDAPI',
          image: 'assets/_images/wordapi.PNG',
          alt: 'wordapi',
          title: 'WORD TEMPLATES API',
          github: 'https://github.com/GaelLouage/WordGenerator/tree/G1',
          site: '',
          tools:"CRUD, aps.NET api, sql, Entity Framework, Syncfusion",
          about:"Word & pdf document creator. Manage data using CRUD (create, read, update, delete) operations. The API is built using ASP.NET, a popular framework for building web applications, and utilizes SQL and Entity Framework to store and retrieve data from a database. It uses Syncfusion to create the documents. "
        },
        {
          route: 'WEBSCRAPPERAPI',
          image: 'assets/_images/WebScrapper.PNG',
          alt: 'WEB SCRAPPER API',
          title: 'WEB SCRAPPER API',
          github: 'https://github.com/GaelLouage/webscrapper',
          site: '',
          tools:" HtmlAgilityPack, WebScrapper, .Net API ",
          about:" Introducing our new Web Scraping API built with C#, HtmlAgilityPack and .Net Framework. Our API is the perfect solution for extracting valuable data from the web. With its powerful WebScrapper and HtmlAgilityPack, it makes it easy to collect information from any website, process and structure it to suit your needs. "
        },
        {
          route: 'nflteams',
          image: 'assets/_images/nflteams.PNG',
          alt: 'NFL-TEAMS API',
          title: 'NFL-TEAMS API',
          github: 'https://github.com/GaelLouage/NLFTeamsApi',
          site: '',
          tools:"CRUD, aps.NET api, MongoDB, Generics ",
          about:"Manage NLF Teams data using CRUD (create, read, update, delete) operations. The API is built using modern technology and features a robust, scalable architecture that can handle large volumes of data efficiently. "
        },
      ]
    },
    {
      subheading: "Winforms / WPf",
      projects: [
        {
          route: 'Movie DB',
          image: 'assets/_images/moviedb.PNG',
          alt: 'Movie database',
          title: 'Movie DB',
          github: '',
          site: '',
          tools:"API, c#, WPF",
          about:"I'm thrilled to introduce a dynamic Windows Presentation Foundation (WPF) project that seamlessly combines the power of TMDb (The Movie Database) API with intuitive user interface design. This application provides movie enthusiasts with a comprehensive tool to discover, manage, and create their movie watchlist."
        },
        {
          route: 'TIPCALCULATOR',
          image: 'assets/_images/tipCalculator.PNG',
          alt: 'TIPCALCULATOR',
          title: 'TIP CALCULATOR',
          github: 'https://github.com/GaelLouage/tip-calculator',
          site: '',
          tools:"c#, WPF",
          about:" tip calculator is a user-friendly tool that helps you quickly and easily calculate the appropriate tip amount for a given restaurant bill. The calculator is built using C# and WPF (Windows Presentation Foundation), which allows us to create a visually appealing and intuitive interface that is easy to use. "
        },
        {
          route: 'BMI CALCULATOR',
          image: 'assets/_images/bmiCalculator.PNG',
          alt: 'BMI CALCULATOR',
          title: 'BMI CALCULATOR',
          github: 'https://github.com/GaelLouage/Bmi-Calculator/tree/main/BMI%20Calculator',
          site: '',
          tools:"c#, WPF",
          about:" BMI (body mass index) calculator is a simple tool that helps you quickly and easily determine your BMI based on your height and weight. "
        },
        {
          route: 'DDSTRAINER',
          image: 'assets/_images/ddsTrainer.PNG',
          alt: 'DDS TRAINER',
          title: 'DDS TRAINER',
          github: 'https://github.com/GaelLouage/Game-DDS-trainer',
          site: '',
          tools:"c#, Winforms ",
          about:"DDS Trainer is a powerful tool developed using C# and Winforms that allows you to modify static game memory to change in-game values. Whether you want to increase your character's stats, unlock new items, or simply cheat your way through a game, DDS Trainer makes it easy to do so. "
        },
        {
          route: 'PASSWORDGENERATOR',
          image: 'assets/_images/pswGen.PNG',
          alt: 'PASSWORD GENERATOR',
          title: 'PASSWORD GENERATOR',
          github: 'https://github.com/GaelLouage/password-generator',
          site: '',
          tools:"c#, WpF",
          about:"Password Generator is a simple and efficient tool developed using C# and WPF that allows you to create strong, secure passwords. "
        },
        {
          route: 'GifToImageVonvertor',
          image: 'assets/_images/gifToImageConvertor.png',
          alt: 'Gif To Image convertorR',
          title: 'Gif To Image convertor',
          github: 'https://github.com/GaelLouage/GifToImageConvertor.git',
          site: '',
          tools:"c#, WpF",
          about:"GiftoPngConvertor is a C# library that allows you to effortlessly convert GIF images to PNG format. It provides a convenient solution for manipulating and transforming GIF images while preserving their quality. With GiftoPngConvertor, you can resize GIF images, maintaining the aspect ratio, and specify the desired width and height for each frame. The library utilizes efficient algorithms to calculate the optimal scaling factor, resulting in high-quality PNG images. I developed this library using C# and WPF (Windows Presentation Foundation) for image processing. It is designed to be simple to use and provides two conversion methods: GifConverter and GifConverterToByteArray. If you're looking for an easy-to-use and efficient solution for converting GIF images to PNG format, GiftoPngConvertor is a great choice. It empowers developers to work with GIF images effectively and explore new possibilities. "
        },
        {
          route: 'YOUTUBEDOWNLOADER',
          image: 'assets/_images/ytdl.PNG',
          alt: 'YOUTUBE DOWNLOADER',
          title: 'YOUTUBE DOWNLOADER',
          github: 'https://github.com/GaelLouage/Youtube-mp4-mp3',
          site: '',
          tools:" c#, wpf, Download youtube videos in mp4 or mp3 format ",
          about:"YouTube Downloader app is a simple and efficient tool that allows you to download videos from YouTube and save them in MP4 or MP3 format. The app is developed using C# and WPF, ensuring a smooth and intuitive user experience. You can easily download your favorite YouTube videos and save them to your device for offline viewing. Whether you want to download music videos, educational content, or any other type of video, our app makes it easy to do so. "
        },
        {
          route: 'ContactManagment',
          image: 'assets/_images/contactManagement.PNG',
          alt: 'ContactManagment',
          title: 'Contact Managment',
          github: 'https://github.com/GaelLouage/ContactManagment',
          site: '',
          tools:"WPF, c#",
          about:"I'm delighted to present a simple yet effective Contact Management System designed to streamline the organization and accessibility of contact information. This project, built with a focus on user-friendliness and efficiency, offers an intuitive platform for managing and connecting with your contacts."
        }
      ]
    },
    {
      subheading: "Exercises",
      projects: [
        {
          route: 'devfinder',
          image: 'assets/_images/devfinder.PNG',
          alt: 'devfinder',
          title: 'dev finder',
          github: 'https://github.com/GaelLouage/devFinder/tree/main',
          site: 'https://gaellouage.github.io/devFinder/',
          tools:"Angular, API",
          about:"I'm excited to introduce the DevFinder project, a dynamic web application that leverages the power of Angular and the GitHub API to help you discover and connect with talented developers across the globe. DevFinder is designed to streamline the process of finding and exploring developer profiles with ease."
        },
        {
          route: 'Card',
          image: 'assets/_images/card.PNG',
          alt: 'Card',
          title: 'Card',
          github: 'https://github.com/GaelLouage/card/tree/main',
          site: '',
          tools:"Angular",
          about:"Card Exercise"
        },
        {
          route: 'countries',
          image: 'assets/_images/countries.PNG',
          alt: 'countries',
          title: 'countries',
          github: 'https://github.com/GaelLouage/Country/tree/main',
          site: '',
          tools:"API, Angular",
          about:"Countries api exercise"
        },
        {
          route: 'quotes',
          image: 'assets/_images/quote.PNG',
          alt: 'quotes',
          title: 'quotes',
          github: 'https://github.com/GaelLouage/Advice-generator/tree/main',
          site: 'https://gaellouage.github.io/Advice-generator/',
          tools:"API, Angular",
          about:"Countries api exercise"
        },
        {
          route: 'CodeExercises',
          image: 'assets/_images/codeExercises.PNG',
          alt: 'CodeE xercises',
          title: 'CodeExercises',
          github: 'https://github.com/GaelLouage/code-exercises',
          site: '',
          tools:"c#",
          about:"diverse coding exercise"
        },
      ]
    },
    {
      subheading: "Unity (Game development)",
      projects: [
        {
          route: '2DGame',
          image: 'assets/_images/game.png',
          alt: '2D Game',
          title: '2D Game',
          github: 'https://github.com/GaelLouage/2DGame',
          site: '',
          tools:"c#, Unity ",
          about:"Please note that this game is currently a work in progress and is not yet finished. I am actively developing and refining the game to bring you an exciting and immersive gaming experience. I am responsible for the code implementation and level design of the game. Leveraging my skills and expertise, I am crafting engaging gameplay mechanics, designing captivating levels, and ensuring smooth interactions within the game world. In addition, I am collaborating with a dedicated individual who is assisting with animations and sprites. While they may still be developing their skills in this area, we are working together to create visual assets that enhance the game experience. Together, we are striving to create an exceptional gaming experience that combines seamless gameplay and an immersive world. Although the game is still a work in progress, we are committed to delivering a final product that will captivate and entertain players like never before. Thank you for your interest in my 2D game project. Stay tuned for updates as we continue to work on bringing this game to completion "
        }
      ]
    },
    
  ];
  getProjects()
  {
    return this.projects;
  }
  getProjectByTitle(title: string) {
    // Flatten the list of projects (since they are categorized)
    const flattenedProjects: ProjectDetail[] = this.projects.reduce(
      (acc: ProjectDetail[], category: Project) => {
        return acc.concat(category.projects);
      },
      []
    );
  
    // Find the project with the matching title
    const project = flattenedProjects.find(project => project.title === title);
  
    return project; // Returns the project with the matching title, or undefined if not found
  }
  
}
