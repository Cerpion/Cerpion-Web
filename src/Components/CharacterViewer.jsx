import Character from "./Character";
import UIPanel from "./UIPanel";
import "./CharacterViewer.css";

import { Canvas } from "@react-three/fiber";

import {
  PerspectiveCamera,
  OrthographicCamera,
  OrbitControls,
} from "@react-three/drei";

import { useRef, useState } from "react";

function CharacterViewer({
  character,
  pivotY = 0,
  cameraDistance = 4,
  cameraFov = 20,
  cameraZoom = 400,
}) {
  const [showWireframe, setShowWireframe] = useState(false);

  const [showSolid, setShowSolid] = useState(false);

  const [isPerspective, setIsPerspective] = useState(true);

  const [selectedAnimation, setSelectedAnimation] = useState("");

  // NUEVO
  const [animations, setAnimations] = useState([]);

  const controlsRef = useRef();
  const characterRef = useRef();

  const perspectiveCameraRef = useRef();
  const orthographicCameraRef = useRef();

  // ============================================
  // Resetear cámara
  // ============================================
  const resetCamera = () => {
    controlsRef.current?.reset();
  };

  // ============================================
  // Reproducir animación
  // ============================================
  const handlePlayAnimation = (animName) => {
    characterRef.current?.playAnimation(animName);
  };

  // ============================================
  // Cuando comienza una animación
  // ============================================
  const handleAnimationStart = () => {
    setShowWireframe(false);
  };

  // ============================================
  // NUEVO
  // Recibir animaciones desde Character
  // ============================================
  const handleAnimationsLoaded = (animationNames) => {
    setAnimations(animationNames);

    // Seleccionar automáticamente la primera
    // animación si existe
    if (animationNames.length > 0) {
      setSelectedAnimation(animationNames[0]);
    }
  };

  // ============================================
  // Cambiar perspectiva
  // ============================================
  const handleChangeProjection = () => {
    setIsPerspective((prev) => !prev);
  };

  return (
    <div className="character-viewer">
      <Canvas>
        <ambientLight intensity={0.8} />

        <directionalLight position={[5, 8, 5]} intensity={2} />

        {/* =========================
            CÁMARA PERSPECTIVA
        ========================== */}
        <PerspectiveCamera
          ref={perspectiveCameraRef}
          makeDefault={isPerspective}
          position={[0, 0, cameraDistance]}
          fov={cameraFov}
        />

        {/* =========================
            CÁMARA ORTOGRÁFICA
        ========================== */}
        <OrthographicCamera
          ref={orthographicCameraRef}
          makeDefault={!isPerspective}
          position={[0, 0, cameraDistance]}
          zoom={cameraZoom}
        />

        {/* =========================
            CONTROLES
        ========================== */}
        <OrbitControls ref={controlsRef} minDistance={1} maxDistance={8} />

        {/* =========================
            PERSONAJE
        ========================== */}
        <Character
          ref={characterRef}
          character={character}
          pivotY={pivotY}
          showWireframe={showWireframe}
          showSolid={showSolid}
          onAnimationStart={handleAnimationStart}
          onAnimationsLoaded={handleAnimationsLoaded}
        />
      </Canvas>

      {/* =========================
          UI
      ========================== */}
      <UIPanel
        showWireframe={showWireframe}
        setShowWireframe={setShowWireframe}
        showSolid={showSolid}
        setShowSolid={setShowSolid}
        isPerspective={isPerspective}
        setIsPerspective={handleChangeProjection}
        selectedAnimation={selectedAnimation}
        setSelectedAnimation={setSelectedAnimation}
        animations={animations}
        onPlayAnimation={handlePlayAnimation}
        onResetCamera={resetCamera}
      />
    </div>
  );
}

export default CharacterViewer;
