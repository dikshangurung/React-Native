export function getFormattedDate(date) {
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	return `${day}/${month + 1}/${year}`;
}
