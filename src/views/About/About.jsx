import React from 'react';
import './About.css';
import Albert from '../../assets/Albert_graduation_Mom.jpg';

export default function AboutScreen() {
	return (
		<div className='screen-background'>
			<div className='intro-background'>
				<div className='intro-item'>
					<div style={{ 'text-align': 'center' }}>
						<img src={Albert} alt='' height={600} />
					</div>
				</div>
				<div className='intro-item'>
					Sup! Albert here! Here's my website that I made for the HCS Workshop
					1. Feel free to explore the links above!
				</div>
			</div>
		</div>
	);
}
