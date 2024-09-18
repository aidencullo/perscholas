const Parent = props => <Child name="John" age={30} />

const Child = ({ name, age = 0 }) => (
  <div>
    <h1>{name}</h1>
    <h2>{age}</h2>
  </div>
)

export default Parent
