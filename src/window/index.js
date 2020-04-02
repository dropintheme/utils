import React, { useState, useEffect } from 'react';
import _ from 'lodash';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', _.debounce(handleResize, 500));
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}