import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Scene3D = () => {
  return (
    <Canvas>
      {/* Basic rotating box */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
    </Canvas>
  );
};

export default Scene3D;