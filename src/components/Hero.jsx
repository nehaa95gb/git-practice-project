function Hero() {
  const commits = [['c1', 'first commit'], ['c2', 'edit'], ['c3', 'status'], ['c4', 'main'], ['c5', 'branch'], ['c6', 'feature'], ['c7', 'merged']]
  return <section className="hero-section" id="top">
    <div className="hero-copy"><span className="eyebrow">Git made visual</span><h1>Stop memorizing Git.<br /><span>Start understanding it.</span></h1><p>GitQuest is an interactive visual guide to Git and GitHub, built for beginners. See how your code moves, learn the ideas behind every command, then practice with confidence.</p><div className="hero-actions"><a className="button button-primary" href="#learn">Start Learning <span>→</span></a><a className="button button-secondary" href="#commands">Explore Commands</a></div><p className="hero-note"><b>●</b> No setup needed to begin your quest</p></div>
    <div className="git-hero-visual" aria-label="An animated illustration of a Git branch with commits">
      <div className="visual-platform"><div className="terminal-top"><span className="terminal-dot" /><span className="terminal-dot" /><span className="terminal-dot" /><span className="terminal-title">my-project · git graph</span></div><div className="graph"><i className="branch-line main" /><i className="branch-line up" /><i className="branch-line top" /><i className="branch-line down" />{commits.map(([className, label]) => <i className={`commit ${className}`} data-label={label} key={className} />)}<span className="branch-badge badge-main">main</span><span className="branch-badge badge-feature">feature/login</span><span className="branch-badge badge-merged">✓ merged</span></div></div>
    </div>
  </section>
}
export default Hero
