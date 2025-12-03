// src/components/Skills.jsx
import { FaCheckCircle } from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Programming\n Skills',
    items: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React', level: 'Basic' },
      { name: 'Sql', level: 'Intermediate' },
      { name: 'Python', level: 'Basic' },
    ],
  },
  {
    title: 'Toolset',
    items: [
      { name: 'MySql\nCommunity Server', level: 'Intermediate' },
      { name: 'MongoDb Atlas', level: 'Basic' },
      { name: 'Git / GitHub', level: 'Intermediate' },
      { name: 'Microsoft Office', level: 'Intermediate' },
      { name: 'Tableau', level: 'Intermediate' },
      { name: 'Power BI', level: 'Basic' },
    ],
  },
  {
    title: 'Services &\nSoftwares',
    items: [
      { name: 'Data Cleaning', level: 'Intermediate' },
      { name: 'Data Visualization', level: 'Basic' },
      { name: 'Exploratory Data Analysis', level: 'Basic' },
      { name: 'Frontend Development', level: 'Intermediate' },
      { name: 'VS Code', level:'Intermediate'},
      { name: 'Virtual Box', level:'Basic'},
      { name: 'Anaconda Navigator', level:'Jupyter Notebook'},
      { name: 'UI/UX', level: 'Figma' },
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skillsSection">
      <div className="container">
        <h5 className="subtitle">Explore My</h5>
        <h2 className="title">Skill‑Set</h2>

        <div className="skillsGrid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skillCard">
              <h3 className="skillCardTitle">
                {group.title.split('\n').map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h3>

              <ul className="skillList">
                {group.items.map((item) => (
                  <li key={item.name} className="skillItem">
                    <FaCheckCircle className="tick" />
                    <div>
                      <strong>{item.name}</strong>
                      {item.level && <p className="level">{item.level}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
