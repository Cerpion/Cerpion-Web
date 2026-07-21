import { useGLTF } from "@react-three/drei";

import { useEffect, useRef, forwardRef } from "react";

import * as THREE from "three";

const Character = forwardRef(
  (
    {
      character,
      pivotY = 0,
      showWireframe,
      showSolid,
      onAnimationStart,
      onAnimationsLoaded,
    },
    ref,
  ) => {
    const { scene, animations } = useGLTF(character);

    const groupRef = useRef();

    const meshesRef = useRef([]);

    const originalMaterialsRef = useRef(new Map());

    const solidMaterialsRef = useRef(new Map());

    const mixerRef = useRef(null);

    const actionsRef = useRef({});

    const currentActionRef = useRef(null);

    // ============================================
    // Guardar meshes y materiales
    // ============================================
    const saveMeshesAndMaterials = () => {
      if (!groupRef.current) return;

      meshesRef.current = [];

      originalMaterialsRef.current.clear();

      solidMaterialsRef.current.clear();

      groupRef.current.traverse((node) => {
        if (!node.isMesh) return;

        meshesRef.current.push(node);

        originalMaterialsRef.current.set(node.uuid, node.material);

        const solidMaterial = new THREE.MeshStandardMaterial({
          color: 0xaaaaaa,
          roughness: 0.7,
          metalness: 0,
        });

        solidMaterialsRef.current.set(node.uuid, solidMaterial);
      });
    };

    // ============================================
    // Crear wireframe
    // ============================================
    const createWireframeForMesh = (originalMesh) => {
      const geometry = originalMesh.geometry.clone();

      const position = geometry.attributes.position;
      const normal = geometry.attributes.normal;

      const offset = 0.001;

      const vertex = new THREE.Vector3();
      const vertexNormal = new THREE.Vector3();

      for (let i = 0; i < position.count; i++) {
        vertex.fromBufferAttribute(position, i);
        vertexNormal.fromBufferAttribute(normal, i);

        vertex.addScaledVector(vertexNormal, offset);

        position.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }

      const wireframeMaterial = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0x222222,
        transparent: true,
        opacity: 0.85,
      });

      const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);

      wireframeMesh.name = "wireframe";

      return wireframeMesh;
    };

    // ============================================
    // Mostrar / ocultar wireframe
    // ============================================
    const toggleWireframe = (isVisible) => {
      meshesRef.current.forEach((mesh) => {
        let wireframe = mesh.children.find(
          (child) => child.name === "wireframe",
        );

        if (isVisible) {
          if (!wireframe) {
            wireframe = createWireframeForMesh(mesh);

            mesh.add(wireframe);
          }

          wireframe.visible = true;
        } else {
          if (wireframe) {
            wireframe.visible = false;
          }
        }
      });
    };

    // ============================================
    // Cambiar material
    // ============================================
    const changeMaterial = (useSolid) => {
      meshesRef.current.forEach((mesh) => {
        const uuid = mesh.uuid;

        if (useSolid) {
          mesh.material = solidMaterialsRef.current.get(uuid);
        } else {
          mesh.material = originalMaterialsRef.current.get(uuid);
        }
      });
    };

    // ============================================
    // Resetear a T-Pose
    // ============================================
    const resetToTPose = () => {
      if (currentActionRef.current) {
        currentActionRef.current.stop();

        currentActionRef.current = null;
      }

      if (mixerRef.current) {
        mixerRef.current.stopAllAction();

        mixerRef.current.setTime(0);
      }
    };

    // ============================================
    // Reproducir animación
    // ============================================
    const playAnimation = (name) => {
      if (!mixerRef.current) return;

      if (name === "") {
        resetToTPose();

        return;
      }

      if (!actionsRef.current[name]) {
        console.log(`Animación "${name}" no encontrada`);

        return;
      }

      onAnimationStart?.();

      if (currentActionRef.current) {
        currentActionRef.current.stop();
      }

      const action = actionsRef.current[name];

      action.reset();

      action.play();

      currentActionRef.current = action;
    };

    // ============================================
    // Exponer funciones al padre
    // ============================================
    useEffect(() => {
      if (!ref) return;

      ref.current = {
        playAnimation,
      };

      return () => {
        ref.current = null;
      };
    }, [ref]);

    // ============================================
    // Inicializar modelo y animaciones
    // ============================================
    useEffect(() => {
      if (!groupRef.current) return;

      saveMeshesAndMaterials();

      mixerRef.current = new THREE.AnimationMixer(groupRef.current);

      actionsRef.current = {};

      animations.forEach((clip) => {
        const action = mixerRef.current.clipAction(clip);

        actionsRef.current[clip.name] = action;
      });

      // NUEVO
      const animationNames = animations.map((clip) => clip.name);

      onAnimationsLoaded?.(animationNames);

      console.log("Animaciones disponibles:", animationNames);

      return () => {
        mixerRef.current?.stopAllAction();

        mixerRef.current = null;
      };
    }, [scene, animations]);

    // ============================================
    // Loop de animación
    // ============================================
    useEffect(() => {
      let lastTime = performance.now();

      let frameId;

      const animate = (currentTime) => {
        const delta = (currentTime - lastTime) / 1000;

        lastTime = currentTime;

        if (mixerRef.current && delta < 0.1) {
          mixerRef.current.update(delta);
        }

        frameId = requestAnimationFrame(animate);
      };

      frameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(frameId);
      };
    }, []);

    // ============================================
    // Wireframe
    // ============================================
    useEffect(() => {
      toggleWireframe(showWireframe);

      if (showWireframe) {
        resetToTPose();
      }
    }, [showWireframe]);

    // ============================================
    // Material sólido
    // ============================================
    useEffect(() => {
      changeMaterial(showSolid);
    }, [showSolid]);

    // ============================================
    // Render
    // ============================================
    return (
      <primitive ref={groupRef} object={scene} position={[0, pivotY, 0]} />
    );
  },
);

Character.displayName = "Character";

export default Character;
