import formBuilder from "../form-builder/create-cart";

/**
 * Init function - creates form
 * @returns {void}
 */
function init() {
	formBuilder.buildAll();
}

$(document).ready(() => {
	init();
});

