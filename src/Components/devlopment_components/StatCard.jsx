export default function StatCard({ label, value, unit }) {

  return (
    <div className="stat-card">

      <div className="label">{label}</div>

      <div className="value">
        {value} <span>{unit}</span>
      </div>

    </div>
  );
}