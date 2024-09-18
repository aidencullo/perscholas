const Parent = props =>
      <>
	<Child
	  person = "john"
	  size = "large"
	  isSepia = {true}
	  thickBorder = {false}
	/>
	<Child2
	  person = "john"
	  size = "large"
	  isSepia = {true}
	  thickBorder = {false}
        />
      </>

function Child({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

function Child2(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

const Avatar = ({ person, size, isSepia, thickBorder }) => {
  return (
    <p> {person} {size} {isSepia} {thickBorder} </p>
  );
}

export default Parent
