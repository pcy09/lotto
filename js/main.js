let pickedNum = [];
let bonus;

const pickNum = () => {
	const balls = Array(45)
		.fill()
		.map((e, i) => {
			return i + 1;
		});
	let suffled = [];
	while (balls.length > 0) {
		let mixedNum = balls.splice(Math.floor(Math.random() * balls.length), 1)[0];
		suffled.push(mixedNum);
	}
	pickedNum = suffled.slice(0, 6).sort(function (p, c) {
		return p - c;
	});
	bonus = suffled[suffled.length - 1];
};

let result_button = document.querySelector(".pick");
let numListGroup = document.querySelector(".lottoGroup");
let bonusNum = document.querySelector(".bonusNum span");
result_button.addEventListener("click", () => {
	pickNum();
	for (let i = 0; i < pickedNum.length; i++) {
		numListGroup.children[i].textContent = pickedNum[i];
	}
	bonusNum.textContent = bonus;
});
