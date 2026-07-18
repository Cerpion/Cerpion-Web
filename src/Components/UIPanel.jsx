import "./UIPanel.css";

import WireframeIcon from "../assets/Models/UI/Wire.svg";
import SolidIcon from "../assets/Models/UI/Solid.svg";
import ResetCameraIcon from "../assets/Models/UI/Reset.svg";
import PerspectiveIcon from "../assets/Models/UI/Perspective.svg";
import OrthographicIcon from "../assets/Models/UI/Orthographic.svg";

function UIPanel({
  showWireframe,
  setShowWireframe,
  showSolid,
  setShowSolid,
  isPerspective,
  setIsPerspective,
  selectedAnimation,
  setSelectedAnimation,
  animations,
  onPlayAnimation,
  onResetCamera,
}) {
  return (
    <div className="viewer-ui">
      {/* =========================
          BOTONES SUPERIORES
      ========================== */}
      <div className="top-right">
        <button
          className="icon-btn"
          onClick={onResetCamera}
          title="Reset Camera"
        >
          <img src={ResetCameraIcon} alt="Reset Camera" />
        </button>

        <button
          className={`icon-btn ${isPerspective ? "active" : ""}`}
          onClick={setIsPerspective}
          title="Perspective / Orthographic"
        >
          <img
            src={isPerspective ? PerspectiveIcon : OrthographicIcon}
            alt={isPerspective ? "Perspective" : "Orthographic"}
          />
        </button>
      </div>

      {/* =========================
          BARRA INFERIOR
      ========================== */}
      <div className="bottom-panel">
        <div className="animation-player">
          {/* Play */}
          <button
            className="play-btn"
            onClick={() => onPlayAnimation(selectedAnimation)}
          >
            ▶
          </button>

          {/* Selector automático de animaciones */}
          <select
            className="animation-select"
            value={selectedAnimation}
            onChange={(e) => setSelectedAnimation(e.target.value)}
          >
            <option value="">T-Pose</option>

            {animations.map((animationName) => (
              <option key={animationName} value={animationName}>
                {animationName}
              </option>
            ))}
          </select>

          {/* =========================
              BOTONES AL FINAL
          ========================== */}
          <div className="bottom-buttons">
            <button
              className={`icon-btn ${showWireframe ? "active" : ""}`}
              onClick={() => setShowWireframe(!showWireframe)}
              title="Wireframe"
            >
              <img src={WireframeIcon} alt="Wireframe" />
            </button>

            <button
              className={`icon-btn ${showSolid ? "active" : ""}`}
              onClick={() => setShowSolid(!showSolid)}
              title="Solid"
            >
              <img src={SolidIcon} alt="Solid" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIPanel;
