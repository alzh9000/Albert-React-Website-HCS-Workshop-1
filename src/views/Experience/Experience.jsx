import React, { useState } from 'react';
import './Experience.css';

function TimeLineItem(props) {
	return (
		<div
			className='timeline-item'
			onClick={() => {
				props.setActiveTitle(props.title);
				props.setActiveDescription(props.description);
			}}
		>
			<div className='experience-info'>
				<h4>{props.title}</h4>
			</div>
		</div>
	);
}

export default function ExperienceScreen() {
	const [activeTitle, setActiveTitle] = useState('');
	const [activeDescription, setActiveDescription] = useState('');
	return (
		<div className='screen-background'>
			<div className='experience-background'>
				<div className='timeline-background'>
					<TimeLineItem
						title={'Harvard Research Assistant'}
						description={
							'Help develop reinforcement learning agents for Atari games to explore new mechanism designs using resource constraints'
						}
						setActiveTitle={setActiveTitle}
						setActiveDescription={setActiveDescription}
					/>
					<TimeLineItem
						title={'PLP Software Engineer'}
						description={
							'Enhanced our Request for Pricing capabilities for Premier Logistics Partners (PLP)'
						}
						setActiveTitle={setActiveTitle}
						setActiveDescription={setActiveDescription}
					/>
					<TimeLineItem
						title={'Programming Competitions'}
						description={
							'Platinum Rank - United States of America Computing Olympiad (USACO), competed in Python and Java'
						}
						setActiveTitle={setActiveTitle}
						setActiveDescription={setActiveDescription}
					/>
				</div>
				<div className='highlight-background'>
					<h1>{activeTitle}</h1>
					<p>{activeDescription}</p>
				</div>
			</div>
		</div>
	);
}
