import React from "react"

export function RandomNames (){
	function RandomizeNames () {
		let classArray = ['George', 'Carl', 'Jeffrey', 'Cody', 'Kevin', 'Ashton', 'John', 'Kathleen', 'Brent', 'Mauricio', 'Ryan', 'Ricardo', 'Sarah', 'Keith', 'Cole', 'Matt']

		function shuffle (array) {
			for (let i = array.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		}

		let newNames = shuffle(classArray)
		document.getElementById('target').innerHTML = newNames
	}

	return (
		<>
		<p id='target'></p>
			<button onClick={RandomNames}><strong>Random Me</strong></button>
		</>
	)
}