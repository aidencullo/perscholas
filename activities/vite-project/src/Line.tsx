interface LineProps {
    line: string;
}

export default function Line({ line }: LineProps) {
    return (
        <>
            <p>{line}</p>
            <hr />
        </>
    );
}
