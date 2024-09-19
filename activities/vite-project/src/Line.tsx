interface LineProps {
    line: string;
    last?: boolean;
}

export default function Line({ line, last = false }: LineProps) {
    if (last) {
	return <p>{line}</p>;
    } else {
	return (
            <>
		<p>{line}</p>
            <hr />
            </>
	);
    }
}
