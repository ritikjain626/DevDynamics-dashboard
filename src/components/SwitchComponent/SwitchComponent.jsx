import { useState } from 'react';
import MetricComponent from '../MainScreenComponent/MetricComponent';
import AlertsComponent from '../MainScreenComponent/AlertsComponent';
import ProjectComponent from '../MainScreenComponent/ProjectComponent';
import OverviewComponent from '../MainScreenComponent/OverviewComponent';

function SwitchComponent() {
	const [page, setPage] = useState(0);

	const onOverviewClick = () => {
		if (page !== 0) {
			setPage(0);
		}
	}
	const onMetricClick = () => {
		if (page !== 1) {
			setPage(1);
		}
	}
	const onProjectClick = () => {
		if (page !== 2) {
			setPage(2);
		}
	}
	const onAlertClick = () => {
		if (page !== 3) {
			setPage(3);
		}
	}

	return (
		<div className='flex'>
			<div className='left-part bg-gray-100 min-h-full w-64 pl-8 pt-5 '>
				<div className='Heading text-2xl font-bold'>Project name</div>
				<div className='fields pt-12'>
					<ul className="space-y-2 text-lg ">
						<li><button onClick={onOverviewClick} style={{ fontWeight: page === 0 ? "600" : "300" }}>Overview</button></li>
						<li><button onClick={onMetricClick} style={{ fontWeight: page === 1 ? "600" : "300" }}>Metrics</button></li>
						<li><button onClick={onProjectClick} style={{ fontWeight: page === 2 ? "600" : "300" }}>Projects</button></li>
						<li><button onClick={onAlertClick} style={{ fontWeight: page === 3 ? "600" : "300" }}>Alerts</button></li>
					</ul>
				</div>
				<button className="mt-96">Log out</button>
			</div>
			<div>
				{page === 0 && <OverviewComponent />}
				{page === 1 && <MetricComponent />}
				{page === 2 && <ProjectComponent />}
				{page === 3 && <AlertsComponent />}
			</div>
		</div>
	)

}

export default SwitchComponent;
