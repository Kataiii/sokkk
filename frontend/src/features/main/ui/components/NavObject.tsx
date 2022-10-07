import {  ThreeElements, ThreeEvent, useThree } from '@react-three/fiber';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Vector3 } from 'three';
import NavObjectTitle from './NavObjectTitle';

interface NavObjectProps {
    children?: React.ReactElement<ThreeElements['group']>,
    navPath: string
}

const NavObject: React.FC<NavObjectProps> = ({ children, navPath }) => {

    const { gl } = useThree();
    const navigate = useNavigate();

    const childPosition = useMemo(() => children!.props!.position!, [children]);


    const events = {
        onClick: (event: ThreeEvent<MouseEvent> ) => {
            event.stopPropagation();
            navigate(navPath)
        },
        onPointerOver: (event: ThreeEvent<PointerEvent>) => {
            if (gl.domElement.style.cursor != 'grabbing') {
                event.stopPropagation();
                gl.domElement.style.cursor = 'pointer';
            }
        },
        onPointerOut: (event: ThreeEvent<PointerEvent>) => {
            if (gl.domElement.style.cursor != 'grabbing') {
                event.stopPropagation();
                gl.domElement.style.cursor = 'auto';
            }
        }
    }

    

    return (
        <group {...events}>
            {children}
           <NavObjectTitle title='ТЫКНИ' position={childPosition}></NavObjectTitle>
        </group>
    )
}

export default NavObject;