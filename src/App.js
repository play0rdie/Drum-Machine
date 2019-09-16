import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Button } from './components/Button';

const buttons = [
	{
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
		id: 'Q',
		name: 'Heater 1'
	},
	{
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
		id: 'W',
		name: 'Heater 2'
	},
	{
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
		id: 'E',
		name: 'Heater 3'
	},
	{
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
		id: 'A',
		name: 'Heater 4'
	},
	{
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
		id: 'S',
		name: 'Clap'
	},
	{
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
		id: 'D',
		name: 'Open HH'
	},
	{
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
		id: 'Z',
		name: 'Kick n\'Hat'
	},
	{
		src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
		id: 'X',
		name: 'Kick'
	},
	{
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
		id: 'C',
		name: 'Closed HH'
	}
]

const App = () => {
	const [powerOn, setPowerOn] = useState(true);
	const [onDisplay, setOnDisplay] = useState('');

	return (
		<Layout>
			<div className='col-lg m-5'>
				<div className='row'>
					{buttons.map(elem => {
						return (
							<Button 
								audSrc={elem.src} 
								id={elem.id} 
								key={elem.id} 
								powerOn={powerOn}
								name={elem.name}
								setOnDisplay={setOnDisplay}	
							>
									{elem.id}
							</Button>
						)
					})}
				</div>
			</div>
			<div className='col-lg m-5'>
				<div className='row'>
					<button className='btn btn-primary btn-lg btn-block' onClick={(e) => {setPowerOn(!powerOn)}}>{powerOn ? 'Turn Off' : 'Turn On'}</button>
				</div>
				<div className='row'>
					<div id='display' className='col mt-5 pt-3 pb-3 text-white text-center bg-primary rounded'>
						{onDisplay}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default App;
