import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export const Home = () => null;

export const ProjectsPage = () => (
  <>
    <h2 className="page-title">projects</h2>
    <div className="entry-list">
      {projects.map((project) => (
        <article className="entry" key={project.number}>
          <h3>{project.name}</h3>
          <p className="entry-meta">{project.tagline}</p>
          <p>{project.description}</p>
          <p className="entry-meta">
            {project.status} · {project.associated}
          </p>
          {project.href && (
            <p>
              <a href={project.href} target="_blank" rel="noreferrer">
                yorkeandtoni.com
              </a>
            </p>
          )}
        </article>
      ))}
    </div>
  </>
);

const experiences = [
  {
    year: "2024 – present",
    role: "Co-Founder & Co-CEO",
    company: "YT Groups · Accra, Ghana",
    description:
      "Leading a tech consultancy delivering tailored software solutions, with a focus on database systems, strategic planning, and project coordination for African businesses.",
  },
  {
    year: "2024 – present",
    role: "Intern",
    company: "Iridis Labs · Legon, Ghana",
    description:
      "Supporting government and private-sector projects across database systems, workflow optimization, and project management.",
  },
  {
    year: "2022 – 2023",
    role: "Secretary General",
    company: "Presec Robotics & Programming Club",
    description:
      "Led administration, communications, and event coordination for robotics competitions and workshops.",
  },
];

export const ExperiencePage = () => (
  <>
    <h2 className="page-title">experience</h2>
    <div className="entry-list">
      {experiences.map((item) => (
        <article className="entry" key={`${item.company}-${item.role}`}>
          <p className="entry-meta">{item.year}</p>
          <h3>{item.role}</h3>
          <p className="entry-meta">{item.company}</p>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </>
);

export const AboutPage = () => (
  <>
    <h2 className="page-title">about</h2>
    <div className="bio-copy">
      <p>
        My name is Kobby. I’m co-founder and co-CEO of YT Groups, and I build
        machine learning products from raw data to a live deployment.
      </p>
      <p>
        Out of every twenty people who’ll sell you AI, maybe one has shipped it.
        The rest are speculators: founders trying to get between you and the
        people who actually build, to take some of the money that ought by
        rights go to the work. Even if you find one with funding who means to
        ship, he’ll maybe know nothing about machine learning, and he’ll have
        to hire the build out on contract. Then you’re depending on an agency
        that’s rushing the job so it can land the next one just as quick as it
        can. The model gets trained on whatever data was easiest, the demo gets
        polished, the handoff gets signed. This is the way this works.
      </p>
      <p>
        I do my own building, and the people who work with me are people I
        know. Pipeline, model, API and interface all pass through my hands, so
        I know what the model is doing and why it’s right. Nothing gets lost
        between people, and nothing gets watered down on the way to production.
      </p>
      <p>
        SCOUT, my football analytics product, is live. ALPHA, my Monte Carlo
        and synthetic-data engine, is built for people who can’t afford to be
        wrong. Python, FastAPI, Postgres, React: I don’t stop at one layer,
        because the job doesn’t stop at one layer.
      </p>
      <p>
        Whatever the others promise you, when it comes to the showdown, they
        won’t be there. I’ll be the one with it running.
      </p>
      <p>
        <a href="https://yorkeandtoni.com" target="_blank" rel="noreferrer">
          YT Groups — yorkeandtoni.com
        </a>
      </p>
    </div>
    <p><Link to="/experience">View experience</Link></p>
  </>
);

export const AwardsPage = () => (
  <>
    <h2 className="page-title">education & awards</h2>
    <div className="entry-list">
      <article className="entry">
        <h3>Presbyterian Boys Secondary School</h3>
        <p className="entry-meta">2021 – 2023</p>
        <p>Time management, public speaking, leadership, and team collaboration.</p>
      </article>
      <article className="entry">
        <h3>Innovative Student of the Year</h3>
        <p className="entry-meta">Computer Science Department · 2025</p>
      </article>
      <article className="entry">
        <h3>Cybercrime Awareness Workshop</h3>
        <p>U.S. Department of State, Bureau of International Narcotics and Law Enforcement Affairs.</p>
        <p className="entry-meta">November 2022</p>
      </article>
    </div>
  </>
);

export const ContactPage = () => (
  <>
    <h2 className="page-title">contact</h2>
    <div className="entry-list">
      <p>
        <a href="mailto:kobbyawesome@gmail.com">kobbyawesome@gmail.com</a>
      </p>
      <p>
        <a href="https://yorkeandtoni.com" target="_blank" rel="noreferrer">
          YT Groups — yorkeandtoni.com
        </a>
      </p>
      <p>
        <a href="https://linkedin.com/in/kobby-essel" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
      <p>
        <a href="https://github.com/kolbyblack" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </div>
  </>
);
