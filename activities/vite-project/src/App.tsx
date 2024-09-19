import React from 'react';

const lines = [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
];

function App() {
    const poem = lines.map((line, index) => {
        if (index === lines.length - 1) {
            return <p key={index}>{line}</p>;
        } else {
            return (
                <React.Fragment key={index}>
                    <p>{line}</p>
                    <hr />
                </React.Fragment>
            );
        }
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
