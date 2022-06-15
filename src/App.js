import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fetchData = async () => {
	const {data} = await axios.get("https://api.adviceslip.com/advice");
	
  return data.slip;
};
function App() {
	const getData = async () => {
		const slip = await fetchData();
    
		setNumber(slip.id);
		setText(slip.advice);
	};
	const [number, setNumber] = useState(0);
	const [text, setText] = useState("Kattints a gombra hogy új idézetet kapj");
	return (
		<div className="App">
			<div className="container">
				<div className="text-container" style={{ width: "100%" }}>
					<span class="advice-number">Advice #{number}</span>
					<p >{text}
          
          
          </p>
          <div className="line" >
          <i style={{position: "absolute", padding:"0 10px",backgroundColor:"hsl(217, 19%, 24%)", top:"-8px", left:"50%", transform: "translateX(-50%)",color:"hsl(217, 19%, 24)"}} className="fa-solid fa-pause"></i>
					</div>
						
					<button onClick={()=>{getData()}}>
						<i className="fa-solid fa-dice-five"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
