import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import Identicon from 'identicon.js';
import { AppContext } from '../context/AppContext';
import { convertBytes } from '../utils/bytes';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	const { totalFileSize, account } = React.useContext(AppContext);
	return (
		<>
			<div className='iq-sidebar sidebar-default '>
				<div className='iq-sidebar-logo d-flex align-items-center justify-content-between'>
					<Link to='/' className='header-logo'>
						<img
							src='../assets/images/logo.png'
							className='img-fluid rounded-normal light-logo'
							alt='logo'
						/>
					</Link>
					<div className='iq-menu-bt-sidebar'>
						<i className='las la-bars wrapper-menu' />
					</div>
				</div>
				<div className='data-scrollbar' data-scroll='1'>
					<div className='h-100'>
						<div>
							<div className='new-create select-dropdown input-prepend input-append'>
								<div className='btn-group'>
									<label htmlFor='' data-toggle='dropdown'>
										<div className='search-query selet-caption cursor-pointer'>
											<i className='las la-plus pr-2' />
											Create New
										</div>
										<span className='search-replace' />
										<span className='caret' />
									</label>
									<ul className='dropdown-menu'>
										<li>
											<Link to='/upload'>
												<div className='item'>
													<i className='ri-file-upload-line pr-3' />
													Upload Files
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<nav className='iq-sidebar-menu'>
								<ul id='iq-sidebar-toggle' className='iq-menu'>
									<li className='active'>
										<Link to='/' className=''>
											<i className='las la-home iq-arrow-left' />
											<span>My Files</span>
										</Link>
										<ul
											id='dashboard'
											className='iq-submenu collapse'
											data-parent='#iq-sidebar-toggle'
										/>
									</li>
								</ul>
							</nav>
						</div>

						<div className='sidebar-bottom'>
							<h4 className='mb-3'>
								<i className='las la-cloud mr-2' />
								Storage
							</h4>
							<p>{convertBytes(totalFileSize)} / 4 GB Used</p>
							<div className='iq-progress-bar mb-3'>
								<span
									className='bg-primary iq-progress progress-1'
									data-percent={
										(totalFileSize / 21474836480) * 100 < 0.1
											? '1'
											: (totalFileSize / 21474836480) * 100
									}
								/>
							</div>
							<p>
								{(totalFileSize / 21474836480) * 100 < 0.1
									? '1'
									: (totalFileSize / 21474836480) * 100}
								% Full - 3.9 GB Free
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='iq-top-navbar'>
				<div className='iq-navbar-custom'>
					<nav className='navbar navbar-expand-lg navbar-light p-0'>
						<div className='iq-navbar-logo d-flex align-items-center justify-content-between'>
							<i className='ri-menu-line wrapper-menu' />
							<a href='index.html' className='header-logo'>
								<img
									src='../assets/images/logo.png'
									className='img-fluid rounded-normal light-logo'
									alt='logo'
								/>
								<img
									src='../assets/images/logo-white.png'
									className='img-fluid rounded-normal darkmode-logo'
									alt='logo'
								/>
							</a>
						</div>
						<div />
						<div className='d-flex align-items-center'>
							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#navbarSupportedContent'
								aria-controls='navbarSupportedContent'
								aria-label='Toggle navigation'>
								<i className='ri-menu-3-line' />
							</button>
							<div
								className='collapse navbar-collapse'
								id='navbarSupportedContent'>
								<ul className='navbar-nav ml-auto navbar-list align-items-center'>
									<li className='nav-item nav-icon dropdown'>
										<a
											href='#1'
											style={{ visibility: 'hidden' }}
											className='search-toggle dropdown-toggle cursor-pointer'
											id='dropdownMenuButton02'
											data-toggle='dropdown'
											aria-expanded='false'>
											<i className='ri-settings-3-line' />
										</a>
									</li>
									<li className='nav-item nav-icon dropdown caption-content'>
										<span
											className='search-toggle dropdown-toggle cursor-pointer'
											id='dropdownMenuButton03'
											data-toggle='dropdown'
											aria-haspopup='true'
											aria-expanded='false'>
											{account && (
												<img
													alt='Account'
													className='ml-2'
													width='30'
													height='30'
													src={`data:image/png;base64,${new Identicon(
														account,
														30
													).toString()}`}
												/>
											)}
										</span>
										<div
											className='iq-sub-dropdown dropdown-menu'
											aria-labelledby='dropdownMenuButton03'>
											<div className='card mb-0'>
												<div className='card-header d-flex justify-content-between align-items-center mb-0'>
													<div className='header-title'>
														<h4 className='card-title mb-0'>Profile</h4>
													</div>
													<div className='close-data text-right badge badge-primary cursor-pointer '>
														<i className='ri-close-fill' />
													</div>
												</div>
												<div className='card-body'>
													<div className='profile-header'>
														<div className='cover-container text-center'>
															{account && (
																<img
																	alt='Account'
																	className='rounded-circle profile-icon bg-primary mx-auto d-block'
																	width='30'
																	height='30'
																	src={`data:image/png;base64,${new Identicon(
																		account,
																		30
																	).toString()}`}
																/>
															)}
															<div className='profile-detail mt-3'>
																<p>
																	<a
																		href={
																			'https://etherscan.io/address/' + account
																		}>
																		{account?.substring(0, 20)}...
																	</a>
																</p>
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
		</>
	);
};

export default Sidebar;
