import React from "react";
import { FaLinkedin, FaGithub, FaGamepad } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen text-white px-6 py-20 md:px-16" style={{backgroundColor: '#0f1419'}}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6" style={{color: '#14b8a6'}}>About Me</h1>
        <p className="text-lg leading-relaxed" style={{color: '#64748b'}}>
          Hi, I'm <span className="font-semibold" style={{color: '#f0f9ff'}}>Nandan Dave</span>, a software developer with a passion for building things that blend creativity and logic — from custom compilers to full-fledged video games. I'm kidding. I'll leave all that boring stuff for my resume.
        </p>
        <p className="text-lg leading-relaxed mt-4" style={{color: '#64748b'}}>
          Aside from coding, I enjoy things that challenge me, whether it's something intellectual or physical. This is how I got into gaming. Without too many requirements, I could just keep practicing until I got good at it. I also can't stop until I get good at it. I have ~21,000 chess games on chess.com (and still playing more) because I'm still not good enough.
        </p>
        <p className="text-lg leading-relaxed mt-4" style={{color: '#64748b'}}>
          I also hate to lose. I'm willing to lose a million times just for that one victory. That's how my gym journey began. I couldn't lift the 20 kg (yeah, I use kg) bar, and now 3 years later I'm still competing with it.
        </p>
        <p className="text-lg leading-relaxed mt-4" style={{color: '#64748b'}}>
         I also enjoy watching anime, playing badminton and trying various cuisines. I'm always up for an adventure, whether it's tackling new challenges at work or exploring something completely different outside of it.
        </p>
        {/* Socials */}
        <div className="mt-8 flex space-x-6">
          <a
            href="https://www.linkedin.com/in/nandan-dave-b4018b194/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
            style={{color: '#f0f9ff'}}
            onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
            onMouseLeave={(e) => e.target.style.color = '#f0f9ff'}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/NandanDave"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
            style={{color: '#f0f9ff'}}
            onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
            onMouseLeave={(e) => e.target.style.color = '#f0f9ff'}
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://nandandave.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
            style={{color: '#f0f9ff'}}
            onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
            onMouseLeave={(e) => e.target.style.color = '#f0f9ff'}
            aria-label="Game Dev Site"
          >
            <FaGamepad size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;