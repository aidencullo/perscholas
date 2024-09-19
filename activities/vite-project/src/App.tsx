import React from 'react';

import Line from './Line.tsx';

const lines = [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
];

function App() {
    const poem = lines.map((line, index) => {
	return <Line key={index} line={line} />;
        /* if (index === lines.length - 1) {
	 *     return <p key={index}>{line}</p>;
	 * } else {
	 *     return (
	 *         <React.Fragment key={index}>
	 *             <p>{line}</p>
	 *             <hr />
	 *         </React.Fragment>
	 *     );
	 * } */
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
