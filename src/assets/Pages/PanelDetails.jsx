import { useParams } from "react-router-dom";

export default function PanelDetails() {
  const { panelId } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>Panel Details</h2>
      <p>Panel ID: <strong>{panelId}</strong></p>
    </div>
  );
}
