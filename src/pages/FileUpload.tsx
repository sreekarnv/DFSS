import React from 'react';
import { AppContext } from '../context/AppContext';
import DefaultLayout from '../layouts/DefaultLayout';

interface FileUploadPageProps {}

const FileUploadPage: React.FC<FileUploadPageProps> = () => {
	const [description, setDescription] = React.useState('');
	const [file, setFile] = React.useState<File | null>(null);
	const [buffer, setBuffer] = React.useState<ArrayBuffer | null>(null);
	const { ipfs, storage, account } = React.useContext(AppContext);

	const handleFileUpload = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		event.preventDefault();
		const file = event.target.files![0];
		if (file) {
			const reader = new window.FileReader();

			reader.readAsArrayBuffer(file);
			reader.onloadend = () => {
				setFile(file);
				setBuffer(Buffer.from((reader as any).result));
			};
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!description) {
			window.alert('Please enter a description');
			return;
		}

		if (!file) {
			window.alert('Please select a file');
			return;
		}

		try {
			console.log('Uploading file...');

			ipfs.add(buffer, async (error: any, result: any) => {
				if (error) {
					console.error({ ...error });
					return;
				}

				console.log('Got IPFS result');

				// Assign value for the file without extension
				await storage.methods
					.uploadFile(
						result[0].hash,
						result[0].size,
						file.type,
						file.name,
						description
					)
					.send({ from: account })
					.on('transactionHash', (hash: string) => {
						window.location.href = '/';
					})
					.on('error', () => {
						window.alert('Could not upload file');
					});
			});
		} catch (err: any) {
			window.alert(err.message);
		}
	};

	return (
		<DefaultLayout>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='card'>
							<div className='card-header d-flex justify-content-between'>
								<div className='header-title'>
									<h4 className='card-title text-capitalize'>
										Upload a new file
									</h4>
								</div>
							</div>
							<div className='card-body'>
								<div className='new-user-info'>
									<form onSubmit={handleSubmit}>
										<div className='row'>
											<div className='form-group col-md-12'>
												<label htmlFor='cname'>
													File Description{' '}
													<span className='text-primary'>*</span>
												</label>
												<input
													type='text'
													className='form-control'
													id='description'
													placeholder='This is a photo of a cat...'
													onChange={(e) => setDescription(e.target.value)}
													value={description}
												/>
											</div>
											<div className='form-group col-md-12 mb-5'>
												<label htmlFor='formFile' className='form-label'>
													Attach File <span className='text-primary'> *</span>
												</label>
												<input
													className='form-control'
													type='file'
													id='formFile'
													onChange={handleFileUpload}
												/>
											</div>
										</div>
										<button type='submit' className='btn btn-primary'>
											<i className='ri-file-upload-line' />
											Upload
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default FileUploadPage;
