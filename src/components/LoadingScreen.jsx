import React, { useState, useEffect } from 'react';

export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState(""); // Currently displayed text
    const fullText="<Hello World />"; // Full text (end state)

    useEffect(() => {
        let index = 0; // Number of characters revealed

        // Sets up 100ms interval
        const interval = setInterval(() => {
            // Update the displayed text from beginning to current index
            setText(fullText.substring(0, index));
            index++;

            // If all characters displayed
            if (index > fullText.length) {
                clearInterval(interval); // Stop typing interval
                setTimeout(() => { // Wait 1000 ms
                    onComplete() // Remove loading screen
                }, 1000);
            }
        }, 100); // An interval is 100ms (typing speed)

        // If component unmounts early (before index > fullText.length), clear interval
        return () => clearInterval(interval); // Avoid memory leaks
    }, [onComplete]); // Dependency array: re-run useEffect only if onComplete function changes. This is how we unmount
    // Alternatively, use an empty dependency array to only run once on mount

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-orange-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>


        </div>
    )
}