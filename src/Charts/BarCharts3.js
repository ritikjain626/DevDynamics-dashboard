import React from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart3 = () => {
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
			}
		],
		maintainAspectRatio: false

	}

	return (
		<div className="h-64">
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
					},
					maintainAspectRatio: false

				}}
			/>
		</div>
	)
}

export default BarChart3