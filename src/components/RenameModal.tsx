import React from 'react';
import { AppContext } from '../context/AppContext';

interface RenameModalProps {
	fileId: string;
	originalName: string;
}

const RenameFileModal: React.FC<RenameModalProps> = ({
	fileId,
	originalName,
}) => {
	const { account, storage } = React.useContext(AppContext);
	const [fileName, setFileName] = React.useState(originalName);

	const onFileRename = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(fileId, fileName);
		await storage.methods.renameFile(fileId, fileName).send({ from: account });
		console.log('File rename Done!');
		window.location.href = '/';
	};

	return (
		<>
			<div
				className='modal fade'
				id={'renameFile' + fileId}
				tabIndex={-1}
				role='dialog'
				aria-labelledby='Add User to access this file'
				aria-hidden='true'>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Rename this file
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<form autoComplete='off' onSubmit={(e) => onFileRename(e)}>
							<div className='modal-body'>
								<div className='form-group'>
									<label htmlFor='account-address' className='form-label'>
										File Name
									</label>
									<input
										type='text'
										className='form-control'
										value={fileName}
										onChange={(e) => setFileName(e.target.value)}
									/>
								</div>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-outline-secondary'
									data-dismiss='modal'>
									Close
								</button>
								<button type='submit' className='btn btn-primary'>
									Rename
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default RenameFileModal;
