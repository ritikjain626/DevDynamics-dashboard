import React from "react";
import BarChart1 from "../../Charts/BarChart1";
import BarChart2 from "../../Charts/BarChart2";
import BarChart3 from "../../Charts/BarCharts3";
import LineChart1 from "../../Charts/LineChart1";
import LineChart2 from "../../Charts/LineChart2";
import LineChart3 from "../../Charts/LineChart3";


const MainScreen = () => {
	const [turn, setTurn] = React.useState(0)

	const onClickButton1 = () => {
		if (turn === 0) {
			return;
		} else {
			setTurn(0);
		}
	}

	const onClickButton2 = () => {
		if (turn === 1) {
			return;
		} else {
			setTurn(1);
		}
	}

	return (
		<div className='right-part bg-gray-300 w-full justify-items-end'>
			<div className="toggle w-44 mt-16 ml-[850px]">
				<button onClick={onClickButton1} className="line bg-blue-500 m-2 rounded-md w-14 hover:bg-white " sty>LINE</button>
				<button onClick={onClickButton2} className="bar bg-white m-2 rounded-md w-14 hover:bg-blue-500">BAR</button>
			</div>
			{/* style={{
					color: ? turn === 0 ? 'bg-blue-500' : 'bg-white'
			}} */}

			<div className="flex mt-16 pl-16">
				<div className="graph1 w-96 h-48 bg-white ml-16 rounded-lg shadow-md shadow-black">{turn === 0 ? <LineChart1 /> : <BarChart1 />} </div>
				<div className="graph2 w-96 h-48 bg-white ml-32 rounded-lg shadow-md shadow-black">{turn === 0 ? <LineChart2 /> : <BarChart2 />}</div>
			</div>
			<div className="graph3 my-16 ml-32 w-[900px] h-64 bg-white rounded-lg shadow-md shadow-black">{turn === 0 ? <LineChart3 /> : <BarChart3 />}</div>

		</div>


	);
}

export default MainScreen;
