import {inject} from 'aurelia-framework';
import {Module1Service} from '../../Services/Module1Service';
import './Module1.scss';

@inject(Module1Service)
export class Module1
{
	constructor(service)
	{
		this.service = service;
		this.title = 'Module 1';
	}

	activate()
	{
		this.service.doSomething();
	}
}
