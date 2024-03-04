import { SubcommandHelper } from './SubcommandHelper';

export class ChatInputHelper extends SubcommandHelper {
	subcomandGroups: SubcommandHelper[];

	addSubcomandGroup(helpInfo: SubcommandHelper | ((subcommandHelper: SubcommandHelper) => SubcommandHelper)) {
		if (typeof helpInfo === 'function') this.subcomandGroups.push(helpInfo(new SubcommandHelper()));
		else this.subcomandGroups.push(helpInfo);
		return this;
	}
}
