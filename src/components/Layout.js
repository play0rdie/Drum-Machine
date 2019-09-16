import React from 'react';

export const Layout = ({ children }) => {
    return (
		<div className='container'>
			<div className='row vh-100 align-items-center'>
				<div className='row justify-content-around w-100 bg-light rounded' id='drum-machine'>
					{children}
				</div>
			</div>
		</div>        
    )
}