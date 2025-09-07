import ProjectCard from '../../components/ProjectCardProps'

const projects = [
  {
    title: 'Project One',
    description: 'A cool project that does amazing things.',
    link: 'https://github.com/zara/project-one',
  },
  {
    title: 'Project Two',
    description: 'Another awesome project with great features.',
    link: 'https://github.com/zara/project-two',
  },
  {
    title: 'Project Three',
    description: 'A third project showcasing skills and creativity.',
    link: 'https://github.com/zara/project-three',
  },
  // Add more projects if you want
]

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}