import { BaseHelper } from './BaseHelper';

export class SubcommandHelper extends BaseHelper {

	subcomands: BaseHelper[];

	addSubcommand(helpInfo: BaseHelper) {
		this.subcomands.push(helpInfo);
		return this;
	}
}
