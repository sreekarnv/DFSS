<script lang="ts">
	import { Link } from 'svelte-navigator';
</script>

<div class="iq-sidebar sidebar-default ">
	<div
		class="iq-sidebar-logo d-flex align-items-center justify-content-between"
	>
		<Link to="/" class="header-logo">
			<img
				src="../assets/images/logo.png"
				class="img-fluid rounded-normal light-logo"
				alt="logo"
			/>
		</Link>
		<div class="iq-menu-bt-sidebar">
			<i class="las la-bars wrapper-menu" />
		</div>
	</div>
	<div class="data-scrollbar" data-scroll="1">
		<div class="h-100">
			<div>
				<div class="new-create select-dropdown input-prepend input-append">
					<div class="btn-group">
						<label for="" data-toggle="dropdown">
							<div class="search-query selet-caption cursor-pointer">
								<i class="las la-plus pr-2" />Create New
							</div>
							<span class="search-replace" />
							<span class="caret" />
						</label>
						<ul class="dropdown-menu">
							<li>
								<Link to="/upload">
									<div class="item">
										<i class="ri-file-upload-line pr-3" />Upload Files
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<nav class="iq-sidebar-menu">
					<ul id="iq-sidebar-toggle" class="iq-menu">
						<li class="active">
							<Link to="/" class="">
								<i class="las la-home iq-arrow-left" /><span>My Files</span>
							</Link>
							<ul
								id="dashboard"
								class="iq-submenu collapse"
								data-parent="#iq-sidebar-toggle"
							/>
						</li>
						<li class=" ">
							<Link to="/shared" class="">
								<i class="lar la-file-alt iq-arrow-left" /><span
									>Shared With Me</span
								>
							</Link>
							<ul
								id="page-files"
								class="iq-submenu collapse"
								data-parent="#iq-sidebar-toggle"
							/>
						</li>
					</ul>
				</nav>
			</div>

			<div class="sidebar-bottom">
				<h4 class="mb-3"><i class="las la-cloud mr-2" />Storage</h4>
				<p>17.1 / 20 GB Used</p>
				<div class="iq-progress-bar mb-3">
					<span class="bg-primary iq-progress progress-1" data-percent="67" />
				</div>
				<p>75% Full - 3.9 GB Free</p>
			</div>
		</div>
	</div>
</div>
<div class="iq-top-navbar">
	<div class="iq-navbar-custom">
		<nav class="navbar navbar-expand-lg navbar-light p-0">
			<div
				class="iq-navbar-logo d-flex align-items-center justify-content-between"
			>
				<i class="ri-menu-line wrapper-menu" />
				<a href="index.html" class="header-logo">
					<img
						src="../assets/images/logo.png"
						class="img-fluid rounded-normal light-logo"
						alt="logo"
					/>
					<img
						src="../assets/images/logo-white.png"
						class="img-fluid rounded-normal darkmode-logo"
						alt="logo"
					/>
				</a>
			</div>
			<div />
			<div class="d-flex align-items-center">
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-label="Toggle navigation"
				>
					<i class="ri-menu-3-line" />
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto navbar-list align-items-center">
						<li class="nav-item nav-icon dropdown">
							<a
								href="#"
								class="search-toggle dropdown-toggle"
								id="dropdownMenuButton02"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i class="ri-settings-3-line" />
							</a>
						</li>
						<li class="nav-item nav-icon dropdown caption-content">
							<a
								href="#"
								class="search-toggle dropdown-toggle"
								id="dropdownMenuButton03"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<div class="caption bg-primary line-height">P</div>
							</a>
							<div
								class="iq-sub-dropdown dropdown-menu"
								aria-labelledby="dropdownMenuButton03"
							>
								<div class="card mb-0">
									<div
										class="card-header d-flex justify-content-between align-items-center mb-0"
									>
										<div class="header-title">
											<h4 class="card-title mb-0">Profile</h4>
										</div>
										<div
											class="close-data text-right badge badge-primary cursor-pointer "
										>
											<i class="ri-close-fill" />
										</div>
									</div>
									<div class="card-body">
										<div class="profile-header">
											<div class="cover-container text-center">
												<div
													class="rounded-circle profile-icon bg-primary mx-auto d-block"
												>
													P
													<a href="#" />
												</div>
												<div class="profile-detail mt-3">
													<h5>
														<a href="../app/user-profile-edit.html"
															>Panny Marco</a
														>
													</h5>
													<p>pannymarco@gmail.com</p>
												</div>
												<a href="auth-sign-in.html" class="btn btn-primary"
													>Sign Out</a
												>
											</div>
											<div class="profile-details mt-4 pt-4 border-top">
												<div class="media align-items-center mb-3">
													<div
														class="rounded-circle iq-card-icon-small bg-primary"
													>
														A
													</div>
													<div class="media-body ml-3">
														<div class="media justify-content-between">
															<h6 class="mb-0">Anna Mull</h6>
															<p class="mb-0 font-size-12"><i>Signed Out</i></p>
														</div>
														<p class="mb-0 font-size-12">annamull@gmail.com</p>
													</div>
												</div>
												<div class="media align-items-center mb-3">
													<div
														class="rounded-circle iq-card-icon-small bg-success"
													>
														K
													</div>
													<div class="media-body ml-3">
														<div class="media justify-content-between">
															<h6 class="mb-0">King Poilin</h6>
															<p class="mb-0 font-size-12"><i>Signed Out</i></p>
														</div>
														<p class="mb-0 font-size-12">
															kingpoilin@gmail.com
														</p>
													</div>
												</div>
												<div class="media align-items-center">
													<div
														class="rounded-circle iq-card-icon-small bg-danger"
													>
														D
													</div>
													<div class="media-body ml-3">
														<div class="media justify-content-between">
															<h6 class="mb-0">Devid Worner</h6>
															<p class="mb-0 font-size-12"><i>Signed Out</i></p>
														</div>
														<p class="mb-0 font-size-12">
															devidworner@gmail.com
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</div>
