<script>
	import { Router, Route } from 'svelte-navigator';
	import Sidebar from './components/Sidebar.svelte';
	import Footer from './components/ui/Footer.svelte';
	import Loader from './components/ui/Loader.svelte';
	import UploadNewFile from './pages/UploadNewFile.svelte';
	import Home from './pages/Home.svelte';
	import Shared from './pages/Shared.svelte';
	import { onMount } from 'svelte';
	import { Web3 } from 'svelte-web3';
	import StorageContract from './../contracts/build/Storage.json';
	import { account, storage } from './store/contract';
	import { Buffer } from 'buffer';
	// import IPFSComponent from 'ipfs-svelte-component';

	// Connect Metamask Wallet
	const connectWallet = async () => {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			window.ethereum.enable();
		}
	};

	// Get Contract Data
	const connectStorageContract = async () => {
		const web3 = window.web3;
		const accounts = await web3.eth.getAccounts();
		console.log(accounts);
		if (accounts[0]) {
			account.update(() => accounts[0]);
		}

		const networkId = await web3.eth.net.getId();
		const deployedNetwork = StorageContract.networks[networkId];

		const contract = new web3.eth.Contract(
			StorageContract.abi,
			deployedNetwork && deployedNetwork.address
		);
		storage.update(() => contract);
	};

	onMount(async () => {
		await connectWallet();
		await connectStorageContract();

		import('ipfs-http-client').then(async (module) => {
			const ipfs = module.default({
				host: 'ipfs.infura.io',
				port: 5001,
				protocol: 'https',
			});
			console.log(ipfs);
			ipfsClient.update(() => ipfs);
		});

		if (typeof window !== 'undefined' && typeof Buffer === 'undefined') {
			window.Buffer = Buffer;
		}
	});
</script>

<Loader />
<!-- <IPFSComponent /> -->
<Router primary={false}>
	<Sidebar />

	<div class="wrapper">
		<div class="content-page">
			<div class="container-fluid">
				<Route path="/">
					<Home />
				</Route>

				<Route path="/shared">
					<Shared />
				</Route>

				<Route path="/upload">
					<UploadNewFile />
				</Route>
			</div>
		</div>
		<Footer />
	</div>
</Router>
