import React from "react";

export default function Resume() {
  const resumePath = "/Nandan_Dave_Resume.pdf"; // No process.env needed in Vite

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-center text-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Resume</h1>
      <div className="flex flex-col items-center gap-4">
        <a
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          View Resume
        </a>
        <a
          href={resumePath}
          download
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

