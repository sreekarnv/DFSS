import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
	return (
		<div className='wrapper'>
			<div className='container'>
				<div className='row no-gutters height-self-center'>
					<div className='col-sm-12 text-center align-self-center'>
						<div className='iq-error position-relative'>
							<img
								src='/assets/images/404.png'
								className='img-fluid iq-error-img'
								alt=''
							/>
							<h2 className='mb-0 mt-4'>Oops! This Page is Not Found.</h2>
							<p>The requested page dose not exist.</p>
							<Link
								to='/'
								className='btn btn-primary d-inline-flex align-items-center mt-3'>
								<i className='ri-home-4-line'></i>Back to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
