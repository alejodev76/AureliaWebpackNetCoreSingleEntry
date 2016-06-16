import {inject} from 'aurelia-framework';
import {Module2Service} from '../../Services/Module2Service';
import './Module2.scss';

@inject(Module2Service)
export class Module2
{
	constructor(service)
	{
		this.service = service;
		this.title = 'Module 2';
	}

	activate()
	{
		this.service.doSomething2();
	}

	configureRouter(config, router)
	{
		config.map([
			{route: ['', 'submodule1'], name: 'Submodule 1', moduleId: './SubModule1/SubModule1', nav: true, title: 'Submodule 1'},
			{route: 'submodule2', name: 'Submodule 2', moduleId: './SubModule2/SubModule2', nav: true, title: 'Submodule 2'}
		]);

		this.router = router;
	}
}