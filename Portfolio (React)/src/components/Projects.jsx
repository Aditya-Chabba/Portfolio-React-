// src/components/Projects.jsx
import herbalHeal from '../assets/hh.jpg';
import homyz from '../assets/homyz.jpg';
import sneakCult from '../assets/sneak-cult.jpg';
import data_processing from '../assets/data_processing.jpg';
import tableau from '../assets/tableau.jpg';

const projects = [
  {
    title: 'Herbal Heal.',
    img: herbalHeal,
    desc: 'Online pharmacy for buying medicines and storing your health record.',
    demo: 'https://online-pharmacy-ejgi.onrender.com/',
    code: 'https://github.com/Aditya-Chabba/Online-Pharmacy',
  },
  {
    title: 'HOMYZ.',
    img: homyz,
    desc: 'Landing page for an ecommerce property dealing site',
    demo: 'https://homyze-commerce.netlify.app/',
    code: 'https://github.com/Aditya-Chabba/Ecommerce-Frontend',
  },
  {
    title: 'Sneak‑Cult',
    img: sneakCult,
    desc: 'Sneaker selling and buying site .',
    demo: 'https://sneakers-shop.onrender.com/',
    code: 'https://github.com/Aditya-Chabba/Sneaker-ecommerce',
  },
  {
    title: 'Data Processing',
    img: data_processing,
    desc: 'Data cleaning and Exlporatory data analysis.',
    demo: 'https://github.com/Aditya-Chabba/Working-on-Data-with-Microsoft-Excel',
    code: 'https://github.com/Aditya-Chabba/Data-Cleaning-Analysis-Sql',
    demoLabel: 'Github Excel',             // ← custom labels
    codeLabel: 'Github SQL',
  },
  {
    title: 'Data Visualization',
    img: tableau,
    desc: 'Interactive dashboard analysing airbnb listing.',
    demo: 'https://public.tableau.com/views/AirBnbProject_17472952839030/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    code: 'https://github.com/Aditya-Chabba/Tableau-Visualization',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projectsSection">
      <div className="container">
        <h2 className="title">Projects</h2>

        <div className="projectsGrid">
          {projects.map((p) => (
            <article key={p.title} className="projectCard">
              <div className="thumbWrap">
                <img src={p.img} alt={p.title.replace(/\n/g, ' ')} loading="lazy" />
              </div>

              <h3 className="projTitle">
                {p.title.split('\n').map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h3>

              {p.desc && <p className="desc">{p.desc}</p>}

              <div className="projLinks">
                <a href={p.code} target="_blank" rel="noreferrer">
                  {p.codeLabel || 'Github'}
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer">
                  {p.demoLabel || 'Live Demo'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
