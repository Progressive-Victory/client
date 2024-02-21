import { SubcommandHelper } from './SubcommandHelper';

export class ChatInputHelper extends SubcommandHelper {

	subcomandGroups: SubcommandHelper[];

	addSubcomandGroup(helpInfo: SubcommandHelper) {
		this.subcomandGroups.push(helpInfo);
		return this;
	}
}
