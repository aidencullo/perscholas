import '../App.css';
import randomLibrary from "randomLibrary";

function Main() {

  const [text,setText ]=useState({text:"Level 1 done"})
  


  setText('')
  return (
    <div className="App">
  {text.text.level1.main}
  {text}
    </div>
  );
}

export default Main;
