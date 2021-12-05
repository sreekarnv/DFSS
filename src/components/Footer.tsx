import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<>
			<footer className='iq-footer'>
				<div className='container-fluid'>
					<div className='text-center'>
						<small>
							Developed By{' '}
							<a href='https://github.com/sreekarnv'>Sreekar V Nutulapati</a>,{' '}
							<a href='https://github.com/sidharth-anand'>Sidharth Anand</a>,
							and <a href='https://github.com/saiankit'>Sai Ankit B</a>
						</small>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
