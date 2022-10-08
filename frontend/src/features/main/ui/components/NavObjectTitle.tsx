import { Html } from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';
import React, { useMemo } from 'react';
import * as THREE from 'three';

interface NavObjectTitleProps{
    position: Vector3,
    title: string
}

const NavObjectTitle: React.FC<NavObjectTitleProps> = ({position, title}) => {

    return (
        <Html rotation={[0, -Math.PI/2, 0]} transform position={position}>
            <div className='obj__title'>
                {title}
            </div>
        </Html>
    )
}

export default NavObjectTitle;