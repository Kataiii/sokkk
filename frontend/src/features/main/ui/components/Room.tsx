import * as THREE from 'three';
import React, { Suspense, useEffect, useRef } from "react";
import { Loader, useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { AnimationClip } from 'three';
import NavObject from './NavObject';

type GLTFResult = GLTF & {
    nodes: {
        Object_12: THREE.SkinnedMesh;
        Object_14: THREE.SkinnedMesh;
        Circle001_0: THREE.SkinnedMesh;
        Circle004_0: THREE.SkinnedMesh;
        Circle004_2: THREE.SkinnedMesh;
        Circle001_1: THREE.SkinnedMesh;
        Circle004_1: THREE.SkinnedMesh;
        Object_1001: THREE.Mesh;
        Object_1001_1: THREE.Mesh;
        Cube003: THREE.Mesh;
        Cube003_1: THREE.Mesh;
        Cube003_2: THREE.Mesh;
        Cube003_3: THREE.Mesh;
        Cube003_4: THREE.Mesh;
        Cube003_5: THREE.Mesh;
        Cube003_6: THREE.Mesh;
        Cube_1: THREE.Mesh;
        Cube_2: THREE.Mesh;
        Cube_3: THREE.Mesh;
        Cube_4: THREE.Mesh;
        Cube_5: THREE.Mesh;
        Cube_6: THREE.Mesh;
        Plane004: THREE.Mesh;
        Plane004_1: THREE.Mesh;
        Plane004_2: THREE.Mesh;
        Plane004_3: THREE.Mesh;
        Plane004_4: THREE.Mesh;
        Cube004: THREE.Mesh;
        Cube004_1: THREE.Mesh;
        Cube004_2: THREE.Mesh;
        Cube004_3: THREE.Mesh;
        Cube004_4: THREE.Mesh;
        Cube004_5: THREE.Mesh;
        Cube004_6: THREE.Mesh;
        Cylinder007: THREE.Mesh;
        Cylinder007_1: THREE.Mesh;
        Cylinder007_2: THREE.Mesh;
        Cylinder007_3: THREE.Mesh;
        SM_Prop_Chair_04_2: THREE.Mesh;
        SM_Prop_Chair_04_2_1: THREE.Mesh;
        SM_Prop_Chair_04_2_2: THREE.Mesh;
        SM_Prop_Chair_04_2_3: THREE.Mesh;
        SM_Prop_Chair_04_2_4: THREE.Mesh;
        SM_Prop_Chair_04_2_5: THREE.Mesh;
        SM_Prop_Chair_04_2_6: THREE.Mesh;
        SM_Prop_Chair_04_2_7: THREE.Mesh;
        SM_Prop_Chair_04_2_8: THREE.Mesh;
        SM_Prop_Chair_04_2_9: THREE.Mesh;
        Object_5002: THREE.Mesh;
        Object_5002_1: THREE.Mesh;
        Object_5002_2: THREE.Mesh;
        Object_5002_3: THREE.Mesh;
        Object_5002_4: THREE.Mesh;
        Object_5002_5: THREE.Mesh;
        Object_5002_6: THREE.Mesh;
        Cube001: THREE.Mesh;
        Cube001_1: THREE.Mesh;
        Cube001_2: THREE.Mesh;
        Cube001_3: THREE.Mesh;
        GLTF_created_0_rootJoint: THREE.Bone;
        Armature_rootJoint: THREE.Bone;
    };
    materials: {
        Grey: THREE.MeshStandardMaterial;
        Material_105: THREE.MeshStandardMaterial;
        Green: THREE.MeshStandardMaterial;
        Brown: THREE.MeshStandardMaterial;
        LightBrown: THREE.MeshStandardMaterial;
        ["Material.004"]: THREE.MeshStandardMaterial;
        ["Material.002"]: THREE.MeshStandardMaterial;
        Black: THREE.MeshStandardMaterial;
        Pink: THREE.MeshStandardMaterial;
        Blue: THREE.MeshStandardMaterial;
        LigthBlue: THREE.MeshStandardMaterial;
        White: THREE.MeshStandardMaterial;
        LigthGreen: THREE.MeshStandardMaterial;
        Red: THREE.MeshStandardMaterial;
        Yellow: THREE.MeshStandardMaterial;
        DarkBlue: THREE.MeshStandardMaterial;
    };
};

type ActionName = "Animation";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;


const MODEL_PATH = '/models/Room.glb';

const Room: React.FC = () => {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials, animations } = useGLTF(MODEL_PATH) as unknown as GLTFResult;
    const { actions } = useAnimations<AnimationClip>(animations, group);

    useEffect(() => {
        actions.Animation!.play();
    }, [])

    return (
        <Suspense fallback={<></>}>
            <group ref={group} position={[-0.8, -1.8, 0.5]} rotation={[0, 2.3, 0]} dispose={null}>
                <group name="Scene">
                    <group
                        name="Cat"
                        position={[2.17, 3.28, 2.17]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        userData={{ name: "Cat" }}
                    >
                        <group name="root" userData={{ name: "root" }}>
                            <group
                                name="GLTF_SceneRootNode"
                                rotation={[Math.PI / 2, 0, 0]}
                                userData={{ name: "GLTF_SceneRootNode" }}
                            >
                                <group
                                    name="RootNode_(gltf_orientation_matrix)_0"
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    userData={{ name: "RootNode (gltf orientation matrix)_0" }}
                                >
                                    <group
                                        name="RootNode_(model_correction_matrix)_1"
                                        userData={{ name: "RootNode (model correction matrix)_1" }}
                                    >
                                        <group
                                            name="catfbx_2"
                                            rotation={[Math.PI / 2, 0, 0]}
                                            userData={{ name: "cat.fbx_2" }}
                                        >
                                            <group name="_3" userData={{ name: "_3" }}>
                                                <group
                                                    name="RootNode_4"
                                                    userData={{ name: "RootNode_4" }}
                                                >
                                                    <group name="_5" userData={{ name: "_5" }}>
                                                        <group
                                                            name="GLTF_created_0"
                                                            rotation={[-Math.PI, 1.14, -Math.PI]}
                                                            scale={0.02}
                                                            userData={{ name: "GLTF_created_0" }}
                                                        >
                                                            <primitive
                                                                object={nodes.GLTF_created_0_rootJoint}
                                                            />
                                                            <group name="_10" userData={{ name: "_10" }} />
                                                            <group name="_8" userData={{ name: "_8" }} />
                                                            <group name="_9" userData={{ name: "_9" }} />
                                                            <skinnedMesh
                                                                name="Object_12"
                                                                geometry={nodes.Object_12.geometry}
                                                                material={materials.Grey}
                                                                skeleton={nodes.Object_12.skeleton}
                                                                userData={{ name: "Object_12" }}
                                                            />
                                                            <skinnedMesh
                                                                name="Object_14"
                                                                geometry={nodes.Object_14.geometry}
                                                                material={materials.Material_105}
                                                                skeleton={nodes.Object_14.skeleton}
                                                                userData={{ name: "Object_14" }}
                                                            />
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                    <group
                        name="Plant"
                        position={[-2.18, 1.3, 3.58]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.17}
                        userData={{ name: "Plant" }}
                    >
                        <group name="Root" userData={{ name: "Root" }}>
                            <group name="Armature" userData={{ name: "Armature" }}>
                                <primitive object={nodes.Armature_rootJoint} />
                                <group name="Circle001" userData={{ name: "Circle.001" }} />
                                <group name="Circle004" userData={{ name: "Circle.004" }} />
                                <skinnedMesh
                                    name="Circle001_0"
                                    geometry={nodes.Circle001_0.geometry}
                                    material={materials.Green}
                                    skeleton={nodes.Circle001_0.skeleton}
                                    userData={{ name: "Circle.001_0" }}
                                />
                                <skinnedMesh
                                    name="Circle004_0"
                                    geometry={nodes.Circle004_0.geometry}
                                    material={materials.Brown}
                                    skeleton={nodes.Circle004_0.skeleton}
                                    userData={{ name: "Circle.004_0" }}
                                />
                                <skinnedMesh
                                    name="Circle004_2"
                                    geometry={nodes.Circle004_2.geometry}
                                    material={materials.LightBrown}
                                    skeleton={nodes.Circle004_2.skeleton}
                                    userData={{ name: "Circle.004_2" }}
                                />
                                <skinnedMesh
                                    name="Circle001_1"
                                    geometry={nodes.Circle001_1.geometry}
                                    material={materials["Material.004"]}
                                    skeleton={nodes.Circle001_1.skeleton}
                                    userData={{ name: "Circle.001_1" }}
                                />
                                <skinnedMesh
                                    name="Circle004_1"
                                    geometry={nodes.Circle004_1.geometry}
                                    material={materials["Material.002"]}
                                    skeleton={nodes.Circle004_1.skeleton}
                                    userData={{ name: "Circle.004_1" }}
                                />
                            </group>
                        </group>
                    </group>
                    <NavObject navPath='/market'>
                        <group
                            name="Pig"
                            position={[2.69, 1.16, 0.72]}
                            rotation={[Math.PI, -0.87, Math.PI]}
                            scale={0.14}
                            userData={{ name: "Pig" }}
                        >

                            <mesh
                                name="Object_1001"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1001.geometry}
                                material={materials.Black}
                            />
                            <mesh
                                name="Object_1001_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1001_1.geometry}
                                material={materials.Pink}
                            />
                        </group>
                    </NavObject>
                    <NavObject navPath='/'>
                        <group
                            name="GameMashine"
                            position={[2.67, 0, -2.22]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[0.45, 0.45, 0.04]}
                            userData={{ name: "GameMashine" }}
                        >
                            <mesh
                                name="Cube003"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube003.geometry}
                                material={materials.LightBrown}
                            />
                            <mesh
                                name="Cube003_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube003_1.geometry}
                                material={materials.Blue}
                            />
                            <mesh
                                name="Cube003_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube003_2.geometry}
                                material={materials.Black}
                            />
                            <mesh
                                name="Cube003_3"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube003_3.geometry}
                                material={materials.LigthBlue}
                            />
                            <mesh
                                name="Cube003_4"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube003_4.geometry}
                                material={materials.White}
                            />
                            <mesh
                                name="Cube003_5"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube003_5.geometry}
                                material={materials.LigthGreen}
                            />
                            <mesh
                                name="Cube003_6"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube003_6.geometry}
                                material={materials.Red}
                            />
                        </group>
                    </NavObject>
                    <group
                        name="CoffeeMachine"
                        position={[1.74, 0.01, 0.82]}
                        rotation={[0, -Math.PI / 2, 0]}
                        scale={[0.42, 0.84, 0.42]}
                        userData={{ name: "CoffeeMachine" }}
                    >
                        <mesh
                            name="Cube_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_1.geometry}
                            material={materials.Brown}
                        />
                        <mesh
                            name="Cube_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_2.geometry}
                            material={materials.LightBrown}
                        />
                        <mesh
                            name="Cube_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_3.geometry}
                            material={materials.Black}
                        />
                        <mesh
                            name="Cube_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_4.geometry}
                            material={materials.Red}
                        />
                        <mesh
                            name="Cube_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_5.geometry}
                            material={materials.Grey}
                        />
                        <mesh
                            name="Cube_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_6.geometry}
                            material={materials.White}
                        />
                    </group>
                    <group
                        name="Cups"
                        position={[1.69, 2.35, 1.18]}
                        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        scale={0.01}
                        userData={{ name: "Cups" }}
                    >
                        <mesh
                            name="Plane004"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane004.geometry}
                            material={materials.Yellow}
                        />
                        <mesh
                            name="Plane004_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane004_1.geometry}
                            material={materials.LigthBlue}
                        />
                        <mesh
                            name="Plane004_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane004_2.geometry}
                            material={materials.LightBrown}
                        />
                        <mesh
                            name="Plane004_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane004_3.geometry}
                            material={materials.Brown}
                        />
                        <mesh
                            name="Plane004_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane004_4.geometry}
                            material={materials.White}
                        />
                    </group>
                    <group
                        name="TableWithBooks"
                        position={[0.06, 0, -1.37]}
                        rotation={[0, Math.PI / 9, 0]}
                        scale={[0.22, 0.29, 0.22]}
                        userData={{ name: "TableWithBooks" }}
                    >
                        <mesh
                            name="Cube004"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004.geometry}
                            material={materials.Red}
                        />
                        <mesh
                            name="Cube004_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_1.geometry}
                            material={materials.LightBrown}
                        />
                        <mesh
                            name="Cube004_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_2.geometry}
                            material={materials.Brown}
                        />
                        <mesh
                            name="Cube004_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_3.geometry}
                            material={materials.Yellow}
                        />
                        <mesh
                            name="Cube004_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_4.geometry}
                            material={materials.Blue}
                        />
                        <mesh
                            name="Cube004_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_5.geometry}
                            material={materials.LigthBlue}
                        />
                        <mesh
                            name="Cube004_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_6.geometry}
                            material={materials.LigthGreen}
                        />
                    </group>
                    <group
                        name="Table"
                        position={[0.18, 0.4, 1.14]}
                        scale={[0.04, 0.38, 0.04]}
                        userData={{ name: "Table" }}
                    >
                        <mesh
                            name="Cylinder007"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder007.geometry}
                            material={materials.White}
                        />
                        <mesh
                            name="Cylinder007_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder007_1.geometry}
                            material={materials.LightBrown}
                        />
                        <mesh
                            name="Cylinder007_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder007_2.geometry}
                            material={materials.Black}
                        />
                        <mesh
                            name="Cylinder007_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder007_3.geometry}
                            material={materials.Blue}
                        />
                    </group>
                    <group
                        name="Room"
                        rotation={[Math.PI / 2, 0, Math.PI / 6]}
                        scale={0.00272}
                        userData={{ name: "Room" }}
                    >
                        <mesh
                            name="SM_Prop_Chair_04_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2.geometry}
                            material={materials.White}
                        />
                        <mesh
                            name="SM_Prop_Chair_04_2_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2_1.geometry}
                            material={materials.Grey}
                        />
                        <mesh
                            name="SM_Prop_Chair_04_2_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2_2.geometry}
                            material={materials.Black}
                        />
                        <mesh
                            name="SM_Prop_Chair_04_2_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2_3.geometry}
                            material={materials.LigthBlue}
                        />
                        <mesh
                            name="SM_Prop_Chair_04_2_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2_4.geometry}
                            material={materials.White}
                        />
                        <mesh
                            name="SM_Prop_Chair_04_2_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2_5.geometry}
                            material={materials.LightBrown}
                        />
                        <mesh
                            name="SM_Prop_Chair_04_2_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2_6.geometry}
                            material={materials.Brown}
                        />
                        <mesh
                            name="SM_Prop_Chair_04_2_7"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2_7.geometry}
                            material={materials.Green}
                        />
                        <mesh
                            name="SM_Prop_Chair_04_2_8"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2_8.geometry}
                            material={materials.LigthGreen}
                        />
                        <mesh
                            name="SM_Prop_Chair_04_2_9"
                            castShadow
                            receiveShadow
                            geometry={nodes.SM_Prop_Chair_04_2_9.geometry}
                            material={materials.Blue}
                        />
                    </group>
                    <group
                        name="Shop"
                        position={[-0.31, 3.5, 3.33]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                        scale={0.01}
                        userData={{ name: "Shop" }}
                    >
                        <mesh
                            name="Object_5002"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5002.geometry}
                            material={materials.Brown}
                        />
                        <mesh
                            name="Object_5002_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5002_1.geometry}
                            material={materials.Blue}
                        />
                        <mesh
                            name="Object_5002_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5002_2.geometry}
                            material={materials.DarkBlue}
                        />
                        <mesh
                            name="Object_5002_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5002_3.geometry}
                            material={materials.Green}
                        />
                        <mesh
                            name="Object_5002_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5002_4.geometry}
                            material={materials.LightBrown}
                        />
                        <mesh
                            name="Object_5002_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5002_5.geometry}
                            material={materials.Yellow}
                        />
                        <mesh
                            name="Object_5002_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5002_6.geometry}
                            material={materials.LigthBlue}
                        />
                    </group>
                    <group
                        name="Cube"
                        position={[0.24, 3, 1.78]}
                        rotation={[Math.PI / 2, 0, -2.35]}
                        scale={[0.15, 0.04, 0.15]}
                        userData={{ name: "Cube" }}
                    >
                        <mesh
                            name="Cube001"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube001.geometry}
                            material={materials.Black}
                        />
                        <mesh
                            name="Cube001_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube001_1.geometry}
                            material={materials.White}
                        />
                        <mesh
                            name="Cube001_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube001_2.geometry}
                            material={materials.LigthBlue}
                        />
                        <mesh
                            name="Cube001_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube001_3.geometry}
                            material={materials.Blue}
                        />
                    </group>
                </group>
            </group>
        </Suspense>
    );
}

useGLTF.preload(MODEL_PATH);


export default Room;