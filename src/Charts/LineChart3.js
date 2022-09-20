import React from "react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart3 = () => {
	const state = {
		labels: ['January', 'February', 'March',
			'April', 'May'],
		datasets: [
			{
				label: 'Rainfall',
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: [165, 259, 580, 381, 256]
			}
		],
		maintainAspectRatio: false
	}

	return (
		<div className="h-64 pb-6">
			<Line
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
					},
					maintainAspectRatio: false


				}}
			/>
		</div>
	)
}

export default LineChart3