module.exports = {
	title: 'QR Code Styling Docs',
	description:
		'This is the official documentation for the qr-code-styling library! An awesome qr-code generator built for the DOM',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/favicon.ico'
			}
		]
	],
	themeConfig: {
		logo: '/qr-code-styling.png',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Get-Started', link: '/guide/' },
			{ text: 'Examples', link: '/examples/' },
			{
				text: 'GitHub',
				link: 'https://github.com/kozakdenys/qr-code-styling/',
				target: '_blank',
				rel: 'noopener noreferrer'
			},
			{
				text: 'npm v1.3.1',
				link: 'https://www.npmjs.com/package/qr-code-styling/',
				target: '_blank',
				rel: 'noopener noreferrer'
			}
		],
		sidebar: {
			'/guide/': ['/guide/', '/options/', '/methods/', '/examples/'],
			'/options/': ['/guide/', '/options/', '/methods/', '/examples/'],
			'/methods/': ['/guide/', '/options/', '/methods/', '/examples/'],
			'/examples/': ['/guide/', '/options/', '/methods/', '/examples/']
		}
	}
}
