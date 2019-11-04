jQuery('#foo');
jQuery(function () {
    alert('Dom Ready!')
});

let cat = new Animal('Tom');

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

let settings: jQuery.AjaxSettings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/get_something', settings);
jQuery.fn.extend({
    check: function () {
        return this.each(function () {
            this.checked = true;
        });
    }
});
console.log(jQuery.version);
const e = new jQuery.Event();
e.blur(jQuery.EventType.CustomClick);

'bar'.prependHello();

foobar({});

import {qux} from 'node-plugin';

qux(global.process);