import React from 'react'

const Login = () => {
  return (
   <div className="min-h-screen bg-zinc-100 text-zinc-800 px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">{portfolio.name}</h1>
        <p className="text-lg text-zinc-600">{portfolio.title}</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-zinc-700 leading-relaxed">{portfolio.about}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Job Experience</h2>
        <ul className="space-y-4">
          {portfolio.jobExperience.map((job, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">{job.role} - {job.company}</h3>
              <p className="text-sm text-zinc-500">{job.duration} | {job.location}</p>
              <p className="mt-2 text-zinc-700">{job.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          {portfolio.projects.map((project, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-zinc-700">{project.description}</p>
              <p className="text-sm text-zinc-500">Tech Stack: {project.techStack.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
        <ul className="list-disc pl-6 text-zinc-700">
          {portfolio.achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Accomplishments</h2>
        <ul className="list-disc pl-6 text-zinc-700">
          {portfolio.accomplishments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="text-center mt-12 text-sm text-zinc-600">
        <div className="space-x-4">
          <a href={portfolio.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href={portfolio.socialMedia.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href={portfolio.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
          <a href={portfolio.socialMedia.email} className="hover:underline">Email</a>
          <a href={portfolio.socialMedia.resume} target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
        </div>
        <p className="mt-4">&copy; 2025 {portfolio.name}</p>
      </footer>
    </div>
  )
}

export default Login
