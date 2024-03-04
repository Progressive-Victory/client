import { BaseHelper } from './BaseHelper';

export class SubcommandHelper extends BaseHelper {
	subcomands: BaseHelper[];

	addSubcommand(helpInfo: BaseHelper | ((subcommandHelper: BaseHelper) => BaseHelper)) {
		if (typeof helpInfo === 'function') this.subcomands.push(helpInfo(new BaseHelper()));
		else this.subcomands.push(helpInfo);
		return this;
	}
}
