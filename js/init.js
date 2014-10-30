function init()
{
	var menu = document.getElementById('bt-menu'),
	trigger = menu.querySelector('a.bt-menu-trigger'),
	//event type. if mobile, use touch events
	eventtype = mobilecheck() ? 'touchstart':'click',
	resetMenu = function() {
		classie.remove(menu, 'bt-menu-open');
		classie.add(menu, 'bt-menu-close');
	},
	closeClickFn = function(ev) {
		resetMenu();
		overlay.removeEventListener(eventtype, closeClickFn);
	};

	var overlay = document.createElement('div');
	overlay.className = 'bt-overlay';
	menu.appendChild(overlay);

	trigger.addEventListener(eventtype, function(ev)
	{
		ev.stopPropagation();
		ev.preventDefault();

		if(classie.has(menu, 'bt-menu-open'))
		{
			resetMenu();
		}
		else
		{
			classie.remove(menu, 'bt-menu-close');
			classie.add(menu, 'bt-menu-open');
			overlay.addEventListener(eventtype, closeClickFn);
		}
	});
}

init();