import './SubModule1.scss';

export class SubModule1
{
	constructor()
	{
		this.title = 'SubModule 1';
	}

	activate()
	{
		console.log(`${this.title} activation`);
	}
}