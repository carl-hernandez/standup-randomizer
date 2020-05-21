import React from "react"

export function RandomNames (){
	// function RandomizeNames () {
	// 	let classArray = ['George', 'Carl', 'Jeffrey', 'Cody', 'Kevin', 'Ashton', 'John', 'Kathleen', 'Brent', 'Mauricio', 'Ryan', 'Ricardo', 'Sarah', 'Keith', 'Cole', 'Matt']
	//
	// 	function shuffle (array) {
	// 		for (let i = array.length - 1; i > 0; i--) {
	// 			let j = Math.floor(Math.random() * (i + 1));
	// 			[array[i], array[j]] = [array[j], array[i]];
	// 		}
	// 	}
	//
	// 	let newNames = shuffle(classArray)
	// 	document.getElementById('target').innerHTML = newNames
	// }

	function shuffle() {
		let group = document.getElementById('target').innerText
		let arra1 = group.split(' ')
		let ctr = arra1.length, temp, index
		while (ctr > 0) {
			index = Math.floor(Math.random() * ctr)
			ctr--
			temp = arra1[ctr]
			arra1[ctr] = arra1[index]
			arra1[index] = temp
		}

		let newText = arra1.join(' ')
		document.getElementById('target').innerText = newText
	}

	return (
		<>
		<p id='target'>Ashton, Brent, Carl, Cody, Cole, George, Jeffrey, John, Kathleen, Keith, Kevin, Matt, Mauricio, Ricardo, Ryan, Sarah</p>
			<button onClick={RandomNames}><strong>Random Me</strong></button>
		</>
	)
}