const stats = [
  { value: "1.2k", label: "Commits", color: "text-tokyo-cyan", border: "" },
  {
    value: "C++",
    label: "Primary Engine",
    color: "text-tokyo-purple",
    border: "border-b-2 border-tokyo-purple",
  },
  {
    value: "450+",
    label: "Algorithms",
    color: "text-tokyo-yellow",
    border: "",
  },
  {
    value: "50+",
    label: "Deployments",
    color: "text-white",
    border: "border-b-2 border-tokyo-cyan",
  },
];

export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`glass-card p-6 rounded-xl text-center ${stat.border}`}
        >
          <p className={`text-3xl font-bold terminal-text ${stat.color}`}>
            {stat.value}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-tokyo-text-dim mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
