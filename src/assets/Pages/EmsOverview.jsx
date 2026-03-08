import Panel from "../../Components/ems/Panel";
import Meter from "../../Components/ems/Meter";
import Wire from "../../Components/ems/Wire";
import SplitPanel from "../../Components/ems/SplitPanel";
import ClickablePanel from "../../Components/ems/ClickablePanel";

import { LOCATIONS } from "../../Components/ems/emsLayout";
import { CONNECTIONS } from "../../Components/ems/emsConnections";
import {
  getLeftCenter,
  getRightCenter,
  getTopCenter,
  getBottomCenter
} from "../../Utils/emsHelpers";

import { useNavigate } from "react-router-dom";
import SvgButton from "../../Components/ems/SvgButton";




const getPoint = (panel, side) => {
  switch (side) {
    case "left": return getLeftCenter(panel);
    case "right": return getRightCenter(panel);
    case "top": return getTopCenter(panel);
    case "bottom": return getBottomCenter(panel);
    default: return getRightCenter(panel);
  }
};



export default function EmsOverview() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%", height: "90vh", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      
      
      <svg
        viewBox="0 0 2000 1200"
        width="90%"
        height="90%"
        preserveAspectRatio="xMidYMid meet"
      >


        {/* GRID – REMOVE LATER */}
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="1980" height="1200" fill="url(#grid)" />

      

        {/* WIRES */}
        {CONNECTIONS.map((c, i) => {
          const from = LOCATIONS[c.from];
          const to = LOCATIONS[c.to];

          return (
            <Wire
              key={i}
              type={c.type}
              from={getPoint(from, c.fromSide)}
              to={getPoint(to, c.toSide)}
              routing={c.routing}
              waypoints={c.waypoints}
            />
          );
        })}


        {Object.values(LOCATIONS).map(p => {
          // Skip all split panels and individual clickable panels – they render separately
          if (p.id === "HT-01" || p.id === "PCC-01" || p.id === "HT-02" || p.id === "PCC-02" || p.id === "HT-03" || p.id === "PCC-04" || p.id === "HT-04" || p.id === "PCC-06" || p.id === "MAIN 11KV SWB-1" || p.id === "MAIN 11KV SWB-2" || p.id === "PCC-03" || p.id === "PCC-05" || p.id === "PCC-07" || p.id === "PCC-08" || p.id === "Utility Area") {
            return null;
          }
          return (
            <Panel
              key={p.id}
              x={p.x}
              y={p.y}
              width={p.w}
              height={p.h}
              title={p.id}
            >
              <SvgButton
                x={10}
                y={p.h - 70}
                label="Details"
                onClick={() =>
                  navigate(`/ems/panel/${p.id}/details`)
                }
              />

              <SvgButton
                x={100}
                y={p.h - 70}
                label="Alarms"
                onClick={() =>
                  navigate(`/ems/panel/${p.id}/alarms`)
                }
              />

              <g transform={`translate(10, ${p.h - 70})`}>
                <rect
                  width="80"
                  height="26"
                  rx="4"
                  fill="#e5e7eb"
                  stroke="#111827"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    console.log("Details clicked:", p.id);
                    navigate(`/ems/panel/${p.id}/details`);
                  }}
                />
                <text
                  x="40"
                  y="18"
                  fontSize="12"
                  textAnchor="middle"
                  pointerEvents="none"
                >
                  Details
                </text>
              </g>


              <g transform={`translate(100, ${p.h - 70})`}>
                <rect
                  width="80"
                  height="26"
                  rx="4"
                  fill="#fee2e2"
                  stroke="#991b1b"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    console.log("Alarms clicked:", p.id);
                    navigate(`/ems/panel/${p.id}/alarms`);
                  }}
                />
                <text
                  x="40"
                  y="18"
                  fontSize="12"
                  textAnchor="middle"
                  fill="#991b1b"
                  pointerEvents="none"
                >
                  Alarms
                </text>
              </g>

            </Panel>
          );
        })}

        {/* Render Split Panel for HT-01 and PCC-01 */}
        <SplitPanel
          x={LOCATIONS.HT01.x}
          y={LOCATIONS.HT01.y}
          width={LOCATIONS.HT01.w + LOCATIONS.PCC01.w}
          height={LOCATIONS.HT01.h} 
          part1Title="HT-01"
          part2Title="PCC-01"
          onPart1Click={() => {
            console.log("HT-01 clicked");
            navigate(`/ems/panel/${LOCATIONS.HT01.id}/details`);
          }}
          onPart2Click={() => {
            console.log("PCC-01 clicked");
            navigate(`/ems/panel/${LOCATIONS.PCC01.id}/details`);
          }}
        />

        {/* Render Split Panel for HT-03 and PCC-04 */}
        <SplitPanel
          x={LOCATIONS.HT03.x}
          y={LOCATIONS.HT03.y}
          width={LOCATIONS.HT03.w + LOCATIONS.PCC04.w}
          height={LOCATIONS.HT03.h}
          part1Title="HT-03"
          part2Title="PCC-04"
          onPart1Click={() => {
            console.log("HT-03 clicked");
            navigate(`/ems/panel/${LOCATIONS.HT03.id}/details`);
          }}
          onPart2Click={() => {
            console.log("PCC-04 clicked");
            navigate(`/ems/panel/${LOCATIONS.PCC04.id}/details`);
          }}
        />

        {/* Render Split Panel for HT-02 and PCC-02 */}
        <SplitPanel
          x={LOCATIONS.HT02.x}
          y={LOCATIONS.HT02.y}
          width={LOCATIONS.HT02.w + LOCATIONS.PCC02.w}
          height={LOCATIONS.HT02.h}
          part1Title="HT-02"
          part2Title="PCC-02"
          onPart1Click={() => {
            console.log("HT-02 clicked");
            navigate(`/ems/panel/${LOCATIONS.HT02.id}/details`);
          }}
          onPart2Click={() => {
            console.log("PCC-02 clicked");
            navigate(`/ems/panel/${LOCATIONS.PCC02.id}/details`);
          }}
        />

        {/* Render Split Panel for HT-04 and PCC-06 */}
        <SplitPanel
          x={LOCATIONS.HT04.x}
          y={LOCATIONS.HT04.y}
          width={LOCATIONS.HT04.w + LOCATIONS.PCC06.w}
          height={LOCATIONS.HT04.h}
          part1Title="HT-04"
          part2Title="PCC-06"
          onPart1Click={() => {
            console.log("HT-04 clicked");
            navigate(`/ems/panel/${LOCATIONS.HT04.id}/details`);
          }}
          onPart2Click={() => {
            console.log("PCC-06 clicked");
            navigate(`/ems/panel/${LOCATIONS.PCC06.id}/details`);
          }}
        />

        {/* Render Split Panel for MAIN 11KV SWB-1 and MAIN 11KV SWB-2 */}
        <SplitPanel
          x={LOCATIONS.MAIN_11KV_SWB1.x}
          y={LOCATIONS.MAIN_11KV_SWB1.y}
          width={LOCATIONS.MAIN_11KV_SWB1.w + LOCATIONS.MAIN_11KV_SWB2.w}
          height={LOCATIONS.MAIN_11KV_SWB1.h}
          part1Title="MAIN 11KV SWB-1"
          part2Title="MAIN 11KV SWB-2"
          onPart1Click={() => {
            console.log("MAIN 11KV SWB-1 clicked");
            navigate(`/ems/panel/${LOCATIONS.MAIN_11KV_SWB1.id}/details`);
          }}
          onPart2Click={() => {
            console.log("MAIN 11KV SWB-2 clicked");
            navigate(`/ems/panel/${LOCATIONS.MAIN_11KV_SWB2.id}/details`);
          }}
        />

        {/* Render individual clickable panels for PCC-03, PCC-05, PCC-07, PCC-08 */}
        <ClickablePanel
          x={LOCATIONS.PCC03.x}
          y={LOCATIONS.PCC03.y}
          width={LOCATIONS.PCC03.w}
          height={LOCATIONS.PCC03.h}
          title={LOCATIONS.PCC03.id}
          onClick={() => {
            console.log("PCC-03 clicked");
            navigate(`/ems/panel/${LOCATIONS.PCC03.id}/details`);
          }}
        />

        <ClickablePanel
          x={LOCATIONS.PCC05.x}
          y={LOCATIONS.PCC05.y}
          width={LOCATIONS.PCC05.w}
          height={LOCATIONS.PCC05.h}
          title={LOCATIONS.PCC05.id}
          onClick={() => {
            console.log("PCC-05 clicked");
            navigate(`/ems/panel/${LOCATIONS.PCC05.id}/details`);
          }}
        />

        <ClickablePanel
          x={LOCATIONS.PCC07.x}
          y={LOCATIONS.PCC07.y}
          width={LOCATIONS.PCC07.w}
          height={LOCATIONS.PCC07.h}
          title={LOCATIONS.PCC07.id}
          onClick={() => {
            console.log("PCC-07 clicked");
            navigate(`/ems/panel/${LOCATIONS.PCC07.id}/details`);
          }}
        />

        <ClickablePanel
          x={LOCATIONS.PCC08.x}
          y={LOCATIONS.PCC08.y}
          width={LOCATIONS.PCC08.w}
          height={LOCATIONS.PCC08.h}
          title={LOCATIONS.PCC08.id}
          onClick={() => {
            console.log("PCC-08 clicked");
            navigate(`/ems/panel/${LOCATIONS.PCC08.id}/details`);
          }}
        />

        <ClickablePanel
          x={LOCATIONS.Utility_Area.x}
          y={LOCATIONS.Utility_Area.y}
          width={LOCATIONS.Utility_Area.w}
          height={LOCATIONS.Utility_Area.h}
          title={LOCATIONS.Utility_Area.id}
          onClick={() => {
            console.log("Utility Area clicked");
            navigate(`/ems/panel/${LOCATIONS.Utility_Area.id}/details`);
          }}
        />


      </svg>


    </div>
  );
}
