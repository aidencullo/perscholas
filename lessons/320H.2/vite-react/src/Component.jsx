const Container = (props) => {
  const style = {
    width: "90%",
    margin: "auto",
    border: "1px solid green"
  }
  return <div style={style}> {props.children} </div>
}

const App = (props) => {
  return <Container><h1>Hello World</h1></Container>
}

export default App;
