function Welcome(props) {
  return <h1 style={props.style}>Hello, {props.name}</h1>;
}

export default function App() {
  const element = <Welcome name="Sara" style={{ color: "red" }} />;
  return element;
}
