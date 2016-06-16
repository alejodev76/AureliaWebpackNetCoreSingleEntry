import './SubModule2.scss';

export class SubModule2
{
	constructor()
	{
		this.title = 'Sub Module 2';
	}

	activate()
	{
		console.log(`${this.title} activation`);
	}
}