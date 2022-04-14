import React, { useState } from 'react';

exports.Mypackagelog = function() {
    console.log("logged from my-package");
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    // myPackageLog();

    return (
        <div>
        <button onClick={increment}>Click Me</button>
        <p>You've pressed the button {counter} times.</p>
        </div>
    );
};