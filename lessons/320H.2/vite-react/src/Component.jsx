const Parent = props => <Child cheese="gouda" />

const Child = props => <GrandChild data={props.cheese} />

const GrandChild = props => <h1>{props.data}</h1>

export default Parent
