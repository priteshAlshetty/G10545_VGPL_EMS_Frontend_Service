import { useParams } from "react-router-dom";

export default function PanelAlarms() {
  const { panelId } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>Panel Alarms</h2>
      <p>Panel ID: <strong>{panelId}</strong></p>
    </div>
  );
}
