import React from 'react';
import School from '../../components/School/School';

export default function SchoolScreen() {
	return (
		<div className='screen-background'>
			Click the name of each school for more information about my education!{' '}
			<br />
			<School
				name='Harvard University'
				description="Pursuing a B.A. in Applied Mathematics: Economics & Computer Science and hopefully a M.S. in Computer Science (Planned Concurrent Master's Degree)"
			/>
			<School
				name='Georgia Tech'
				description='Pursued Dual Enrollment – Distance Math at Georgia Tech.'
			/>
			<School
				name='Northview High School'
				description='Graduated in Spring of 2020. Loved my time here!'
			/>
		</div>
	);
}
