import St from 'gi://St';

import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class RemoveClockExtension extends Extension {
    enable() {
        Main.panel.statusArea.dateMenu.container.hide();
    }

    disable() {
        Main.panel.statusArea.dateMenu.container.show();
    }
}
