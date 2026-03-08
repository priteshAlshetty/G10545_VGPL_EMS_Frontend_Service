import StatCard from "./StatCard";
import "./StatGroup.css";
export default function StatGroup({ title, items }) {

  return (
    <div className="stat-group">

      <h3>{title}</h3>

      <div className="card-container">

        {items.map((item, i) => (
          <StatCard key={i} {...item}/>
        ))}

      </div>

    </div>
  );
}