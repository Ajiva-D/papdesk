let isShow = false;
function hideDetails(id) {
	const varId = id.id;
	isShow = !isShow;
	isShow
		? (this.document.querySelector(`#${varId}`).innerHTML = `<i class="fas fa-minus"></i
		> Hide details`)
		: (this.document.querySelector(`#${varId}`).innerHTML = `<i class="fas fa-plus"></i
		> See details`);
	// console.log(id);
}
