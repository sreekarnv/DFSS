import React from 'react';
import FileTableItem from '../components/FileTableItem';
import { AppContext } from '../context/AppContext';
import DefaultLayout from '../layouts/DefaultLayout';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	const { files } = React.useContext(AppContext);

	return (
		<DefaultLayout>
			<div className='row'>
				<div className='col-lg-12'>
					<div className='card card-block card-stretch card-transparent'>
						<div className='card-header d-flex justify-content-between pb-0'>
							<div className='header-title'>
								<h4 className='card-title'>Files</h4>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-12'>
					<div
						className='card card-block c
		ard-stretch card-height'>
						<div className='card-body'>
							<div className='table-responsive'>
								<table className='table mb-0 table-borderless tbl-server-info'>
									<thead>
										<tr>
											<th scope='col'>Name</th>
											<th scope='col'>ID</th>
											<th scope='col'>Description</th>
											<th scope='col'>Type</th>
											<th scope='col'>File Size</th>
											<th scope='col'>Uploader</th>``
											<th scope='col' />
										</tr>
									</thead>
									<tbody>
										{files?.map((file: any, i: number) => {
											const vals = ['', 'primary', 'success', 'info', 'danger'];
											const rndInt = Math.floor(Math.random() * 4) + 1;
											return (
												<FileTableItem
													file={file}
													color={vals[rndInt] as any}
													key={i}
												/>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default HomePage;
