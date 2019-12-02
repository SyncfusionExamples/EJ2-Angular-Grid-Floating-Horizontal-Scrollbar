import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { Ajax } from '@syncfusion/ej2-base';

export class ODataV4AdaptorWithCredentials extends ODataV4Adaptor {
	public beforeSend(args: DataManager, xhr: XMLHttpRequest, settings: Ajax) {
		debugger;
		//xhr.withCredentials = true;
		super.beforeSend(args, xhr, settings);
	}
}

