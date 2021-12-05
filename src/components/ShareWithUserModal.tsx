import React from 'react';
import { AppContext } from '../context/AppContext';

interface ShareWithUserModalProps {
	fileId: string;
}

const ShareWithUserModal: React.FC<ShareWithUserModalProps> = ({ fileId }) => {
	const { account, storage } = React.useContext(AppContext);
	const [userAddress, setUserAddress] = React.useState<string>('');
	const [sharedUsers, setSharedUsers] = React.useState([]);

	const onFileShare = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await storage.methods
			.addSharedUser(fileId, userAddress)
			.send({ from: account });
		console.log('File Share Done!');
	};

	React.useEffect(() => {
		(async () => {
			const users = await storage.methods.getSharedUsers(fileId).call();
			setSharedUsers(users);
		})();
	}, [fileId, storage]);

	return (
		<>
			<div
				className='modal fade'
				id='shareWithUser'
				tabIndex={-1}
				role='dialog'
				aria-labelledby='Add User to access this file'
				aria-hidden='true'>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Share This file
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<form autoComplete='off' onSubmit={(e) => onFileShare(e)}>
							<div className='modal-body'>
								<div>
									<h5>Shared with</h5>
									<ul>
										{sharedUsers.map((el) => {
											return <li>{el}</li>;
										})}
									</ul>
								</div>
								<div className='form-group'>
									<label htmlFor='account-address' className='form-label'>
										Account Address
									</label>
									<input
										type='text'
										className='form-control'
										value={userAddress}
										onChange={(e) => setUserAddress(e.target.value)}
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
									Share
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShareWithUserModal;
