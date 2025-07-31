import React from "react";
import { FaUnity, FaJava, FaAndroid, FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiOpengl, SiCplusplus } from "react-icons/si";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const projects = [
  {
    title: "Compiler",
    icon: <FaJava className="text-orange-600 text-2xl" />,
    description:
      "Lexer, parser, and bytecode generator for a custom language using Java.",
    githubLink: "https://github.com/NandanDave/COP5556-PLP-Project", // Replace with your actual GitHub link
    liveLink: null, // Set to null if no live demo available
  },
  {
    title: "Unity Projects",
    icon: <FaUnity className="text-black text-2xl" />,
    description:
      "I have made multiple Unity projects and have tried to integrate them into 1 project.",
    githubLink: "https://nandandave.github.io/portfolio/", // Replace with your actual GitHub link
    liveLink: null, // Replace with itch.io or other game hosting link
  },
  {
    title: "ElderEase",
    icon: <FaAndroid className="text-green-500 text-2xl" />,
    description:
      "Android app for elderly users, with medication reminders and memory games.",
    githubLink: "https://github.com/NandanDave/Elder-Ease", // Replace with your actual GitHub link
    liveLink: null, // Replace with Play Store link or set to null
  },
  {
    title: "Hand Drawn Emoji Recognition",
    icon: <HiOutlineEmojiHappy className="text-yellow-500 text-2xl" />,
    description:
      "Machine learning model to recognize hand drawn emojis and classify them into 8 different categories",
    githubLink: "https://github.com/NandanDave/HandDrawnEmojiRecognition",
    liveLink: null,
  },  
  {
    title: "Ray Tracing",
    icon: <SiCplusplus className="text-blue-400 text-2xl" />,
    description:
      "Ray tracer with Phong, Lambert, and ambient shading using C++ and OpenGL.",
    githubLink: "https://github.com/NandanDave/Raytracer", // Replace with your actual GitHub link
    liveLink: null, // Set to null if no live demo available
  },
  {
    title: "Procedural Texture Generation",
    icon: <SiOpengl className="text-blue-500 text-2xl" />,
    description:
      "Generated terrain textures using Perlin Noise in OpenGL with C++.",
    githubLink: null, // Replace with your actual GitHub link
    liveLink: null, // Replace with demo link or set to null
  },  
  
];

export default function Projects() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#0f1419'}}>
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6" style={{color: '#14b8a6'}}>My Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#1c2128'}}
            >
              <div className="flex items-center mb-3 space-x-3" style={{color: '#f0f9ff'}}>
                {proj.icon}
                <h2 className="text-xl font-semibold">{proj.title}</h2>
              </div>
              <p className="mb-4" style={{color: '#64748b'}}>{proj.description}</p>
              
              {/* Project Links */}
              <div className="flex space-x-3">
                {proj.githubLink && (
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                    style={{backgroundColor: '#64748b'}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#14b8a6'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#64748b'}
                  >
                    <FaGithub className="text-sm" />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                
                {proj.liveLink && (
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                    style={{backgroundColor: '#14b8a6'}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#0f766e'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#14b8a6'}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}