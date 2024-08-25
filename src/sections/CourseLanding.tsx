import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from "@/assets/images/grain.jpg"
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Meet Your",
    year: "Instructor",
    title: "Shaheen Hyder",
    results: [
      { title: "Python Developer Software Engineer" },
      { title: "Founder & CEO Pygrammers" },
      { title: "Trained 500+ Students" },
    ],
    link: "https://www.linkedin.com/in/shaheen-hyder",
    image: darkSaasLandingPage,
  },
];

const syllabus = [
  {
    company: "What You’ll Learn:",
    year: "",
    title: "Introduction to Python",
    results: [
      { title: "Learn about Python’s scope, setting up your IDE, and running your first program." },
    
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "",
    year: "",
    title: "Master Variables & Data Types",
    results: [
      { title: "Dive into lists, sets, tuples, dictionaries, and strings" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
  {
    company: "",
    year: "",
    title: "Control Flow & Loops",
    results: [
      { title: "Understand conditional statements and loops like a pro!" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
  {
    company: "",
    year: "",
    title: "Functions & Scopes",
    results: [
      { title: "Build reusable code and learn about variable scopes and importing files." },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
  {
    company: "",
    year: "",
    title: "Python Libraries & Pip",
    results: [
      { title: "Explore how to use external libraries for endless possibilities." },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
  {
    company: "",
    year: "",
    title: "File & Exception Handling",
    results: [
      { title: "Manage files and handle errors effortlessly." },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
  {
    company: "",
    year: "",
    title: "Object-Oriented Programming (OOP)",
    results: [
      { title: "Grasp the core principles of OOP and apply them in your Python projects." },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
]

export const CourseLanding = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">മലയാളത്തിൽ പഠിക്കാം!</p>

        </div>
         <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">14-Day Live Python Bootcamp in Malayalam!</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg-text-xl  max-w-md mx-auto">Are you ready to master Python in just 14 days? 🚀</p>
        
    {/* Mentor Card */}

        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProjects.map(project => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pt-8 px-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16">
             <div className="absolute inset-0 -z-10 opacity-5" style={{
              backgroundImage: `url(${grainImage.src})`,
              
             }}></div>
             <div className="lg:grid lg:grid-cols-2">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span> 
                  <span>{project.year}</span> 
                </div>
          
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"  />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
          {project.results.map(result => (
            <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
              {/* <CheckCircleIcon className="size-5 md:size-6"/> */}
              <span>{result.title}</span></li>
          ))} 
              </ul>
              {/* <a href={project.link}> */}
              <Link href='/python'>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8" >
                <span>LinkedIn Profile</span>
                <ArrowUpRightIcon className="size-4"/>
                </button>
                </Link>
              {/* </a> */}
              </div>
              <div>
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0"/>
            </div>
            </div>
            </div>
          ))}
        </div>


        {/* Course */}

        

        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {syllabus.map(project => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pt-8 px-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16">
             <div className="absolute inset-0 -z-10 opacity-5" style={{
              backgroundImage: `url(${grainImage.src})`,
              
             }}></div>
             <div className="lg:grid lg:grid-cols-2">
              <div className="lg:pb-16">
                {/* <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span> 
                  <span>{project.year}</span> 
                </div> */}
          
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"  />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
          {project.results.map(result => (
            <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
              <CheckCircleIcon className="size-5 md:size-6"/>
              <span>{result.title}</span></li>
          ))} 
              </ul>
              {/* <a href={project.link}> */}
              {/* <Link href='/python'>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8" >
                <span>View Live Course</span>
                <ArrowUpRightIcon className="size-4"/>
                </button>
                </Link> */}
              {/* </a> */}
              </div>
              {/* <div>
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0"/>
            </div> */}
            </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
