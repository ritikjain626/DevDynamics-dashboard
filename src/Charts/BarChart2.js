import React from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart2 = () => {
	const state = {
		labels: ['January', 'February', 'March',
			'April', 'May'],
		datasets: [
			{
				label: 'Rainfall',
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: [65, 59, 80, 81, 56]
			},

			{
				data: [55, 48, 90, 78, 86],
				borderColor: "#8e5ea2",
				fill: false
			}
		]

	}

	return (
		<div >
			<Bar
				data={state}
				options={{
					title: {
						display: true,
						text: 'Average Rainfall per month',
						fontSize: 20
					},
					legend: {
						display: true,
						position: 'right'
					}

				}}
			/>
		</div>
	)
}

export default BarChart2