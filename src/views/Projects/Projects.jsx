import React from 'react';
import Project from '../../components/Project/Project';

export default function ProjectsScreen() {
	return (
		<div className='screen-background'>
			<Project
				title='DAINCE'
				description='DAINCE uses artificial intelligence to detect people’s dance moves and help them dance better. Dance + AI!'
				link='https://github.com/alzh9000/Same-Home-Different-Hacks-CSSI-2020-Team-1'
			/>
			<Project
				title='COVID-19 Map'
				description='This is a map of COVID-19 Cases in the world. You can zoom in and zoom out on this map. This was my final project for Google CSSI! :)'
				link='https://github.com/alzh9000/COVID19-Map-CSSI'
			/>
			<Project
				title='Tender: Find your match!'
				description='Tinder for food - the fastest, most convenient way to find the perfect recipe match for you! '
				link='https://github.com/alzh9000/Def-Hacks-CSSI-2020-Team-1'
			/>
			<Project
				title='Dropredictor'
				description='A web app that uses AI and machine learning to predict future droughts and teaches people how to contribute to water sustainability to combat droughts.'
				link='https://github.com/alzh9000/NotUniversityHacks-CSSI2020'
			/>
		</div>
	);
}
