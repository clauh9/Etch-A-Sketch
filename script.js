const container = document.querySelector(".container");
let gcontainer = document.querySelector(".grid-container");
let repeat = 0;
let currentColor = document.getElementById("colorpicker");

function clear_grid() {
	container.removeChild(gcontainer);
	gcontainer = document.createElement("div");
	gcontainer.classList = "grid-container";
	container.appendChild(gcontainer);
}

//creates a grid is num_squares
function create_grid(num_squares) {
	if (repeat > 0) {
		clear_grid();
	}

	for (let i = 1; i <= num_squares * num_squares; i++) {
		gcontainer.style.gridTemplateColumns = `repeat(${num_squares}, 25px [col-start])`;
		gcontainer.style.gridTemplateRows = `repeat(${num_squares}, 25px [col-start])`;
		container.appendChild(gcontainer);

		const div = document.createElement("div");
		div.className = `div${i} squares`;
		div.style.cssText = "border: 1px solid black; height: 25px;";
		gcontainer.appendChild(div);
	}

	repeat = repeat + 1;

	start_drawing();
}

//allows you to mouseover and turn the boxes black
function start_drawing() {
	let squares = Array.from(document.querySelectorAll(`.squares`));
	const rainbow = document.getElementById("rainbow");

	squares.forEach((square) => {
		square.addEventListener(
			"mouseover",
			() => ((square.style = "background-color: red;"), false)
		);

		square.addEventListener(
			"mouseout",
			() => ((square.style.backgroundColor = currentColor.value), false)
		);


		rainbow.addEventListener("click", () => {
			const randomR = Math.floor(Math.random() * 256);
			const randomG = Math.floor(Math.random() * 256);
			const randomB = Math.floor(Math.random() * 256);

			square.addEventListener(
				"mouseout",
				() => ((square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`), false)
			);
		}
		);


	});
}

//subtmit button and get the number of squares
const submit = document.querySelector("button");
submit.addEventListener("click", () =>
	create_grid(document.getElementById("fsquare").value)
);
//clear screen while mantaining the previous grid
const clear = document.getElementById("clear");
clear.addEventListener("click", () =>
	create_grid(document.getElementById("fsquare").value)
);

