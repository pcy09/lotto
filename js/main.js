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

let result_button = document.querySelector(".lottoPick");
let numListGroup = document.querySelector(".lottoGroup");
let bonusNum = document.querySelector(".bonusNum span");
result_button.addEventListener("click", () => {
	pickNum();
	for (let i = 0; i < pickedNum.length; i++) {
		if (pickedNum[i] <= 10) {
			numListGroup.children[i].style.backgroundColor = "#FBC400";
			numListGroup.children[i].textContent = pickedNum[i];
		} else if (pickedNum[i] <= 20) {
			numListGroup.children[i].style.backgroundColor = "#69C8F2";
			numListGroup.children[i].textContent = pickedNum[i];
		} else if (pickedNum[i] <= 30) {
			numListGroup.children[i].style.backgroundColor = "#FE7272";
			numListGroup.children[i].textContent = pickedNum[i];
		} else if (pickedNum[i] <= 40) {
			numListGroup.children[i].style.backgroundColor = "#AAAAAA";
			numListGroup.children[i].textContent = pickedNum[i];
		} else {
			numListGroup.children[i].style.backgroundColor = "#B0D840";
			numListGroup.children[i].textContent = pickedNum[i];
		}
	}
	if (bonus <= 10) {
		bonusNum.style.backgroundColor = "#FBC400";
		bonusNum.textContent = bonus;
	} else if (bonus <= 20) {
		bonusNum.style.backgroundColor = "#69C8F2";
		bonusNum.textContent = bonus;
	} else if (bonus <= 30) {
		bonusNum.style.backgroundColor = "#FE7272";
		bonusNum.textContent = bonus;
	} else if (bonus <= 40) {
		bonusNum.style.backgroundColor = "#AAAAAA";
		bonusNum.textContent = bonus;
	} else if (bonus <= 45) {
		bonusNum.style.backgroundColor = "#B0D840";
		bonusNum.textContent = bonus;
	}
});
