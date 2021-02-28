import React from 'react';

function Elements(props) {
	console.log(props.eleData);
	return (
		<>
			<div className="element">
				<div className="container-fluid">
					<div className="row">
						{props.eleData.map((dl) => {
							return (
								<div
									className="col-lg-2"
									style={{
										backgroundColor: `#${dl.dyColor}`,
										padding: 20,
										width: 250,
										display: 'flex',
									}}
									key={dl.id}
								>
									<h1>{dl.dyColor}</h1>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			;
		</>
	);
}

export default Elements;
