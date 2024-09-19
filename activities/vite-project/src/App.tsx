import React from 'react';

import Line from './Line.tsx';

const lines = [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
];

function App() {
    const poem = lines.map((line, index) => {
	if (index === lines.length - 1) {
	    return <Line key={index} line={line} last={true} />;
	}
	return <Line key={index} line={line} />;
    });

    return (
        <>
            <article>
                {poem}
            </article>
        </>
    );
}

export default App;
