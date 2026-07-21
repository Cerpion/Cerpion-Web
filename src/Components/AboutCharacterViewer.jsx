import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function AboutCharacter({
  character,
  headBoneName,
  mousePosition,
  idleAnimationName = "Idle",
}) {
  const { scene, animations } = useGLTF(character);

  const { actions } = useAnimations(animations, scene);

  const headBone = useRef(null);

  const MAX_HORIZONTAL_ROTATION = 0.7;
  const MAX_VERTICAL_ROTATION = 0.5;

  const currentRotation = useRef({
    x: 0,
    y: 0,
  });

  // =====================================================
  // HEAD BONE
  // =====================================================

  useEffect(() => {
    headBone.current = scene.getObjectByName(headBoneName);

    if (!headBone.current) {
      console.warn(`Head bone "${headBoneName}" was not found.`);
    }
  }, [scene, headBoneName]);

  // =====================================================
  // IDLE ANIMATION
  // =====================================================

  useEffect(() => {
    if (!actions) return;

    const idleAction = actions[idleAnimationName];

    if (!idleAction) {
      console.warn(`Idle animation "${idleAnimationName}" was not found.`);

      return;
    }

    idleAction.reset().fadeIn(0.5).play();

    return () => {
      idleAction.fadeOut(0.5);
    };
  }, [actions, idleAnimationName]);

  // =====================================================
  // HEAD LOOK AT MOUSE
  // =====================================================

  useFrame(() => {
    if (!headBone.current) return;

    currentRotation.current.y = THREE.MathUtils.lerp(
      currentRotation.current.y,
      mousePosition.current.x * MAX_HORIZONTAL_ROTATION,
      0.08,
    );

    currentRotation.current.x = THREE.MathUtils.lerp(
      currentRotation.current.x,
      mousePosition.current.y * MAX_VERTICAL_ROTATION,
      0.08,
    );

    headBone.current.rotation.y = currentRotation.current.y;

    headBone.current.rotation.x = currentRotation.current.x;
  });

  return <primitive object={scene} position={[0, -0.5, 0]} />;
}

// =====================================================
// VIEWER
// =====================================================

function AboutCharacterViewer({
  character,
  headBoneName = "Head",
  idleAnimationName = "Idle",
}) {
  const containerRef = useRef(null);

  const mousePosition = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;

      const centerY = rect.top + rect.height / 2;

      const normalizedX =
        (event.clientX - centerX) / (window.innerWidth * 0.25);

      const normalizedY =
        (event.clientY - centerY) / (window.innerHeight * 0.25);

      mousePosition.current.x = THREE.MathUtils.clamp(normalizedX, -1, 1);

      mousePosition.current.y = THREE.MathUtils.clamp(normalizedY, -1, 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 3.2],
          fov: 20,
        }}
        gl={{
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.NoToneMapping,
        }}
      >
        <AboutCharacter
          character={character}
          headBoneName={headBoneName}
          mousePosition={mousePosition}
          idleAnimationName={idleAnimationName}
        />
      </Canvas>
    </div>
  );
}

export default AboutCharacterViewer;
