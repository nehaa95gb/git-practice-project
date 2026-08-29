import './GitBasics.css'

const steps = [
  ['01', 'Working Directory', 'Where you edit your files.'],
  ['02', 'Staging Area', 'Where you choose which changes are ready to save.'],
  ['03', 'Commit', 'A saved snapshot of your changes.'],
  ['04', 'Local Repository', "Your project's Git history stored on your computer."],
]

function BasicStep({ step }) {
  const [number, title, copy] = step
  return <article className="basic-step"><span className="step-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>
}

function Connector({ direction }) {
  return <div className={`basic-connector basic-connector-${direction}`} aria-hidden="true"><span>{direction === 'right' ? '→' : '↓'}</span></div>
}

function GitBasics() {
  return <section className="section" id="basics"><div className="section-heading"><span className="eyebrow">The mental model</span><h2>Your changes have a journey.</h2><p>Git gives changes a few deliberate stops before they become part of your project history.</p></div><div className="basics-flow"><BasicStep step={steps[0]} /><Connector direction="right" /><BasicStep step={steps[1]} /><Connector direction="down first" /><BasicStep step={steps[2]} /><Connector direction="down second" /><BasicStep step={steps[3]} /></div></section>
}

export default GitBasics
