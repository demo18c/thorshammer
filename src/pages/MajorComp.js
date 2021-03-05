import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import Model from "./Scene";

const MajorComp = () => {
    return (
        <Canvas
            pixelRatio={[1, 2]}
            camera={{ position: [-90, 0, 0], fov: 100 }}
        >
            <OrbitControls
                maxPolarAngle={Math.PI / 2}
                enableZoom={true}
                maxZoom={1}
                minZoom={3}
            />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                {/* <Environment files="royal_esplanade_1k.hdr" /> */}

                <Model
                    rotation={[0, Math.PI * 2.1, 0]}
                    position={[0, -10, 0]}
                    scale={[0.1, 0.1, 0.1]}
                />
            </Suspense>
        </Canvas>
    );
};

export default MajorComp;
