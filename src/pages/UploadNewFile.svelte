<script>
	import { onMount } from 'svelte';

	import { Web3 } from 'svelte-web3';
	import { ipfsClient } from '../store/contract';
	import { getAllContexts } from 'svelte';

	let buffer;
	let filename;
	let fileType;

	const readFile = async (event) => {
		const file = event.target.files[0];
		console.log(file);
		const reader = new window.FileReader();

		reader.readAsArrayBuffer(file);
		reader.onloadend = () => {
			buffer = window.Buffer.from(reader.result);
			filename = file.name;
			fileType = file.type;
			console.log('buffer', buffer);
		};
	};

	const uploadFile = async () => {
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);

		console.log(file);

		reader.onload = async () => {
			const buffer = Buffer.from(reader.result);
			const hash = await storage.upload(buffer);
			console.log(hash);
		};

		// $ipfsClient.add(file).then(async (res) => {
		// 	const hash = res[0].hash;
		// 	const buffer = await ipfs.cat(hash);
		// 	const hash2 = await storage.upload(buffer);
		// 	console.log({ hash2 });
		// });
	};
</script>

<div class="container">
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header d-flex justify-content-between">
					<div class="header-title">
						<h4 class="card-title text-capitalize">Upload a new file</h4>
					</div>
				</div>
				<div class="card-body">
					<div class="new-user-info">
						<form on:submit|preventDefault={uploadFile}>
							<div class="row">
								<div class="form-group col-md-12">
									<label for="cname"
										>File Description <span class="text-primary">*</span>
									</label>
									<input
										type="text"
										class="form-control"
										id="cname"
										placeholder="This is a photo of a cat..."
									/>
								</div>
								<div class="form-group col-md-12 mb-5">
									<label for="formFile" class="form-label"
										>Attach File <span class="text-primary"> *</span></label
									>
									<input
										on:change={(e) => {
											readFile(e);
										}}
										class="form-control"
										type="file"
										id="formFile"
									/>
								</div>
							</div>
							<button type="submit" class="btn btn-primary">
								<i class="ri-file-upload-line" />
								Upload</button
							>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
