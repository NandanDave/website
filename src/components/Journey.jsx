import React from 'react';

const milestones = [
  {
    year: '2015',
    title: "Wrote my first line of code",
    description: 'Wrote my first line of code in high school. GoOfer was the first language I learnt.',
  },
  {
    year: '2019',
    title: "Started Bachelor's Degree",
    description: 'Began my Undergrad at Bennett University in India.',
  },
  {
    year: '2022',
    title: 'Game Development Intern',
    description: 'Started my internship at StreakByte.',
  },
  {
    year: 'January 2023',
    title: "Exchange Student and Graduated from Undergrad",
    description: 'Came to University of Florida as an exchange student for my final semester and graduated from Bennett University with a Computer Science degree',
  },
  {
    year: 'August 2023',
    title: "Started Master's Degree",
    description: "Began my Master's degree at University of Florida",
  },
  {
    year: 'December 2023',
    title: 'Teaching Assistant',
    description: 'Got my first part time job as a Teaching Assistant',
  },
  {
    year: 'December 2024',
    title: 'Graduated from University of Florida',
    description: "Graduated from University of Florida with a Master's degree in Computer Science",
  },
  {
    year: '2025',
    title: 'Research Assistant University of Florida',
    description: "Started working at University of Florida as a Research Assistant.",
  },
];

const Journey = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#0f1419'}}>
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-extrabold mb-16 tracking-wide text-center font-sans" style={{color: '#14b8a6'}}>
          My Journey
        </h1>

        <div className="space-y-16">
          {milestones.map(({ year, title, description }, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center md:items-start md:space-x-8 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Circle */}
                <div className="flex-shrink-0 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-sm shadow-lg font-mono" style={{backgroundColor: '#14b8a6'}}>
                  <span className="text-center leading-tight px-1">
                    {year}
                  </span>
                </div>

                {/* Card */}
                <div className="p-6 rounded-lg shadow-lg max-w-lg mt-6 md:mt-0 font-sans" style={{backgroundColor: '#1c2128', color: '#64748b'}}>
                  <h3 className="text-2xl font-semibold mb-2 font-sans" style={{color: '#f0f9ff'}}>{title}</h3>
                  <p className="leading-relaxed font-light">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Journey;