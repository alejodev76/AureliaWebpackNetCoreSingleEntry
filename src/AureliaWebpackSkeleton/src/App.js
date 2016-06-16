class App
{
	configureRouter(config, router)
	{
		config.title = 'Bare Bone Webpack/Aurelia';
		config.map([
				{route: ['', 'Module1'], name: 'Module1', moduleId: './Modules/Module1/Module1', nav: true, title: 'Page 1'},
				{route: 'Module2', name: 'Module2', moduleId: './Modules/Module2/Module2', nav: true, title: 'Page 2'}
		]);

		this.router = router;
	}
}

export default App;