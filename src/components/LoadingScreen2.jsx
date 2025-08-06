import React, { useState, useEffect } from 'react';
import loadingGif from '../assets/logo.png';

export const LoadingScreen2 = ({ onComplete }) => {
    const [progress, setProgress] = useState(0); // Current percentage (0–100)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onComplete(); // Call parent callback when loading completes
                    }, 1000);
                    return 100;
                }
                return prev + 1; // Increase by 1% per tick (every 30ms)
            });
        }, 10); // Adjust to control speed of loading (100 * 30ms = 3s total)

        return () => clearInterval(interval); // Clean up
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center space-y-6">
            {/* Custom Image/GIF*/}
            <img
                src={loadingGif}
                alt="Loading animation"
                className="w-24 h-24 mt-4 object-contain"
            />

            {/* % Loading Text */}
            <div className="text-4xl font-Saira font-bold">
                {progress}%
            </div>

            {/* Progress Bar */}
            <div className="w-[200px] h-[2px] bg-gray-800 rounded overflow-hidden">
                <div
                    className="h-full bg-orange-500 shadow-[0_0_15px_#f6823b] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};