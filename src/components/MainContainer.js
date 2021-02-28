import { useState, useEffect } from 'react';
import Elements from './Elements';

function MainContainer() {
	const [data, setData] = useState([]);
	const eleArr = [];
	useEffect(() => {
		for (let i = 1; i <= 100; i++) {
			eleArr.push({
				id: i,
				eleName: 'div',
				dyColor: Math.floor(Math.random() * 16777215).toString(16),
			});
		}
		setData(eleArr);
	}, []);

	return (
		<div className="content">
			<Elements eleData={data} />
		</div>
	);
}

export default MainContainer;
