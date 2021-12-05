import React from 'react';
import { AppContext } from '../context/AppContext';
import { convertBytes } from '../utils/bytes';
import ShareWithUserModal from './ShareWithUserModal';
import RenameModal from './RenameModal';

const colors = {
	primary: 'bg-primary',
	success: 'bg-success',
	danger: 'bg-danger',
	info: 'bg-info',
};

interface FileTableItemProps {
	color?: keyof typeof colors;
	file: any;
}

const FileTableItem: React.FC<FileTableItemProps> = ({
	color = 'primary',
	file,
}) => {
	const { account } = React.useContext(AppContext);
	async function downloadImage(imageSrc: string) {
		const image = await fetch(imageSrc);
		const imageBlog = await image.blob();
		const imageURL = URL.createObjectURL(imageBlog);

		const link = document.createElement('a');
		link.href = imageURL;
		link.download = file.fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	function copyLink(link: string) {
		navigator.clipboard.writeText(link);
	}

	return (
		<>
			<ShareWithUserModal fileId={file.fileId} />
			<RenameModal fileId={file.fileId} originalName={file.fileName} />
			<tr>
				<td>
					<div className='d-flex align-items-center'>
						<div className={`icon-small ${colors[color]} rounded mr-3`}>
							<i className='ri-file-download-line' />
						</div>
						<div
							data-load-file='file'
							data-load-target='#resolte-contaniner'
							data-url='../assets/vendor/doc-viewer/files/demo.docx'
							data-toggle='modal'
							data-target='#exampleModal'
							data-title='alexa6.docx'
							style={{ cursor: 'pointer' }}>
							{file.fileName}
						</div>
					</div>
				</td>
				<td>{file.fileId}</td>
				<td>{file.fileDescription}</td>
				<td>{file.fileType}</td>
				<td>{convertBytes(file.fileSize)}</td>
				<td>{file.uploader === account ? 'You' : file.uploader}</td>
				<td>
					<div className='dropdown'>
						<span
							className='dropdown-toggle'
							id='dropdownMenuButton11'
							data-toggle='dropdown'>
							<i className='ri-more-fill' />
						</span>
						<div
							className='dropdown-menu dropdown-menu-right'
							aria-labelledby='dropdownMenuButton11'>
							<a
								className='dropdown-item'
								href={'https://ipfs.infura.io/ipfs/' + file.fileHash}
								rel='noopener noreferrer'
								target='_blank'>
								<i className='ri-eye-fill mr-2' />
								View
							</a>
							{file.uploader === account && (
								<span
									className='dropdown-item cursor-pointer'
									data-toggle='modal'
									data-target={'#shareWithUser' + file.fileId}>
									<i className='ri-share-line mr-2' />
									Share
								</span>
							)}
							<span
								className='dropdown-item cursor-pointer'
								onClick={() => {
									copyLink('https://ipfs.infura.io/ipfs/' + file.fileHash);
								}}>
								<i className='ri-file-copy-line mr-2' />
								Copy Link
							</span>
							{file.uploader === account && (
								<span
									className='dropdown-item cursor-pointer'
									data-toggle='modal'
									data-target={'#renameFile' + file.fileId}>
									<i className='ri-pencil-line mr-2' />
									Rename
								</span>
							)}
							<span
								className='dropdown-item cursor-pointer'
								onClick={() =>
									downloadImage('https://ipfs.infura.io/ipfs/' + file.fileHash)
								}>
								<i className='ri-file-download-fill mr-2' />
								Download
							</span>
						</div>
					</div>
				</td>
			</tr>
		</>
	);
};

export default FileTableItem;
