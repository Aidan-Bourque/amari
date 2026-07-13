const NAV_ITEMS = [
	{ href: 'index.html', label: 'Home' },
	{ href: 'about.html', label: 'About Us' },
	{ href: 'services.html', label: 'Services' },
	{ href: 'contact.html', label: 'Contact' },
];

const SOCIAL_LINKS = [
	{ href: 'https://www.facebook.com/', label: 'Facebook', icon: 'assets/facebook.png' },
	{ href: 'https://www.instagram.com/', label: 'Instagram', icon: 'assets/instagram.png' },
	{ href: 'https://www.tiktok.com/', label: 'TikTok', icon: 'assets/tiktok.png' },
	{ href: 'https://twitter.com/', label: 'Twitter', icon: 'assets/twitter.png' },
];

function getCurrentPage() {
	const path = window.location.pathname;
	const page = path.split('/').pop();

	return page || 'index.html';
}

function buildNavbar() {
	const currentPage = getCurrentPage();

	const navItems = NAV_ITEMS.map((item) => {
		const isActive = item.href === currentPage;

		return `
			<li class="nav-item">
				<a class="nav-link${isActive ? ' active' : ''}" href="${item.href}"${isActive ? ' aria-current="page"' : ''}>${item.label}</a>
			</li>
		`;
	}).join('');

	const socialLinks = SOCIAL_LINKS.map((item) => `
		<a class="navbar-social-link" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${item.label}">
			<img src="${item.icon}" alt="" aria-hidden="true">
		</a>
	`).join('');

	return `
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<a class="navbar-brand d-flex align-items-center gap-3" href="index.html">
					<img src="assets/logo1.png" alt="Carrara Logo" id="logo">
					<span class="d-none d-md-inline text-uppercase text-light fw-semibold" style="letter-spacing: 0.16em; font-size: 0.72rem;">Carrara Concierge</span>
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav me-lg-auto">
						${navItems}
					</ul>
					<div class="navbar-socials">
						${socialLinks}
					</div>
				</div>
			</div>
		</nav>
	`;
}

function injectNavbar() {
	const navbarMount = document.querySelector('[data-navbar]');

	if (!navbarMount) {
		return;
	}

	navbarMount.innerHTML = buildNavbar();
}

injectNavbar();
