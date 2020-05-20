let classArray= ['George', 'Carl', 'Jeffrey', 'Cody', 'Kevin', 'Ashton', 'John', 'Kathleen', 'Brent', 'Cody', 'Ryan', 'Ricardo', 'Sarah', 'Keith', 'Cole', 'Matt']

// function shuffle() {
// 	let group = document.getElementById('text1').innerText
// 	let arra1 = group.split(' ')
// 	let ctr = arra1.length, temp, index
// 	while (ctr > 0) {
// 		index = Math.floor(Math.random() * ctr)
// 		ctr--
// 		temp = arra1[ctr]
// 		arra1[ctr] = arra1[index]
// 		arra1[index] = temp
// 	}
//
// 	let newText = arra1.join(' ')
// 	document.getElementById('text1').innerText = newText

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
shuffle(classArray)