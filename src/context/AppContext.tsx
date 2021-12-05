import React from 'react';
import Storage from '../contracts/build/Storage.json';
import Web3 from 'web3';
import iClient from 'ipfs-http-client';

interface AppContextProps {
	ipfs: any;
	account: string;
	storage: any;
	filesCount: number;
	files: any;
	totalFileSize: any;
}

export const AppContext = React.createContext<Partial<AppContextProps>>({});

const AppContextProvider: React.FC<any> = ({ children }) => {
	const [account, setAccount] = React.useState<string>();
	const [storage, setStorage] = React.useState<any>();
	const [filesCount, setFilesCount] = React.useState<number>(0);
	const [files, setFiles] = React.useState<any>([]);
	const [ipfs, setIpfs] = React.useState<any>();
	const [totalFileSize, setTotalFileSize] = React.useState<any>(0);

	const loadWeb3 = async () => {
		try {
			let w = window as any;
			if (w.ethereum) {
				w.web3 = new Web3(w.ethereum);
				await w.ethereum.enable();
			} else if (w.web3) {
				w.web3 = new Web3(w.web3.currentProvider);
			} else {
				w.alert(
					'Non-Ethereum browser detected. You should consider trying MetaMask!'
				);
			}
		} catch (err: any) {
			window.alert(err.message);
		}
	};

	const loadBlockchainData = React.useCallback(async () => {
		try {
			let w = window as any;
			const web3 = w.web3;
			const accounts = await web3.eth.getAccounts();
			setAccount(accounts[0]);
			const networkId = await web3.eth.net.getId();
			const networkData = (Storage as any).networks[networkId];
			if (networkData) {
				const dstorage = new web3.eth.Contract(
					Storage.abi,
					networkData.address
				);
				setStorage(dstorage);

				const filesCount = await dstorage.methods.fileCount().call();
				setFilesCount(filesCount);

				const newFiles = [...files];
				let fileSize = 0;
				for (let i = filesCount; i >= 1; i--) {
					const file = await dstorage.methods.files(i).call();

					fileSize += parseInt(file.fileSize);

					const sharedUsers = await dstorage.methods.getSharedUsers(i).call();

					if (!sharedUsers.includes(accounts[0])) {
						continue;
					}

					newFiles.push(file);
					setFiles(newFiles);
					setTotalFileSize(fileSize);
				}
			} else {
				w.alert('Storage contract not deployed to detected network.');
			}
		} catch (err: any) {
			window.alert(err.message);
		}

		// eslint-disable-next-line
	}, []);

	React.useEffect(() => {
		(async () => {
			await loadWeb3();
			await loadBlockchainData();
			const client = iClient({
				host: 'ipfs.infura.io',
				port: 5001,
				protocol: 'https',
			});
			setIpfs(client);
		})();
	}, [loadBlockchainData]);

	return (
		<AppContext.Provider
			value={{
				account,
				storage,
				filesCount,
				files,
				ipfs,
				totalFileSize,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
