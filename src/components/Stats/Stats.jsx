import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.section} id="stats">
      <h2 className={styles.heading}>🌟 My Stats</h2>
      <img
        src="https://komarev.com/ghpvc/?username=VishalBhat07&label=Profile%20views&color=0e75b6&style=flat"
        alt="Profile Views"
        className={styles.profileViews}
      />
      <div className={styles.statsImages}>
        <img
          src="https://github-readme-stats.vercel.app/api?username=VishalBhat07&show_icons=true&theme=tokyonight&rank_icon=github&hide_border=true"
          alt="GitHub Stats"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=VishalBhat07&layout=compact&theme=tokyonight&hide_border=true"
          alt="Top Languages"
        />
      </div>
      <h3 className={styles.heading}>🚀 LeetCode Stats:</h3>
      <img
        src="https://leetcard.jacoblin.cool/VishalBhat07?theme=dark&font=Fira%20Code&ext=activity"
        alt="LeetCode Stats"
        style={{
          maxWidth: "100%",
          borderRadius: 10,
          boxShadow: "0 0 12px var(--color-neon-yellow)",
        }}
      />
    </section>
  );
}
