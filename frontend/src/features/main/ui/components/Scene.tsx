import React from 'react';
import { Canvas, DirectionalLightProps } from '@react-three/fiber';
import { AccumulativeShadows, ContactShadows, OrbitControls, Plane, PresentationControls, RandomizedLight } from '@react-three/drei';
import '../styles.css'
import Room from './Room';


const dirLightOneConfig: DirectionalLightProps = {
    castShadow: true,
    position: [3, 5, 10],
    intensity: 1.8,
    color: '#E3E2B9',
}

const dirLightTwoConfig: DirectionalLightProps = {
    castShadow: true,
    // position: [4, 5, -5],
    position: [-13, 6, 6],
    intensity: 2,
    color: '#1141D3'
}

const dirLightThreeConfig: DirectionalLightProps = {
    castShadow: true,
    position: [8, 2.5, -4],
    intensity: 1.5,
    color: '#F21BB6'
}

const Scene: React.FC = () => {

    return (
        <Canvas shadows style={{ background: "#EBF0FB" }}>
            <OrbitControls
                enablePan={false}
                maxDistance = {5}
                minDistance = {3}
                maxPolarAngle = {Math.PI/2}
                minAzimuthAngle = {-Math.PI / 3}
                maxAzimuthAngle ={Math.PI / 3}
            />
            <Room />
            <directionalLight {...dirLightOneConfig} />
            <directionalLight {...dirLightTwoConfig} />
            <directionalLight {...dirLightThreeConfig} />
            <ContactShadows opacity={0.25} scale={10} blur={1.5} far={0.8} position={[0, 0, 0]}></ContactShadows>
        </Canvas>

    )
}

export default Scene;