// 로또
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
		numListGroup.children[i].textContent = pickedNum[i];
		if (pickedNum[i] <= 10) {
			numListGroup.children[i].style.backgroundColor = "#FBC400";
		} else if (pickedNum[i] <= 20) {
			numListGroup.children[i].style.backgroundColor = "#69C8F2";
		} else if (pickedNum[i] <= 30) {
			numListGroup.children[i].style.backgroundColor = "#FE7272";
		} else if (pickedNum[i] <= 40) {
			numListGroup.children[i].style.backgroundColor = "#AAAAAA";
		} else {
			numListGroup.children[i].style.backgroundColor = "#B0D840";
		}
	}
	bonusNum.textContent = bonus;
	if (bonus <= 10) {
		bonusNum.style.backgroundColor = "#FBC400";
	} else if (bonus <= 20) {
		bonusNum.style.backgroundColor = "#69C8F2";
	} else if (bonus <= 30) {
		bonusNum.style.backgroundColor = "#FE7272";
	} else if (bonus <= 40) {
		bonusNum.style.backgroundColor = "#AAAAAA";
	} else if (bonus <= 45) {
		bonusNum.style.backgroundColor = "#B0D840";
	}
});

let groupBall;
let yearLotto = [];
// 연금복권
const yearContainer = () => {
	// 0~9 배열 생성
	yearLotto = Array(10)
		.fill()
		.map((e, i) => {
			return i;
		});
	// 1~5 배열 생성
	const group = [1, 2, 3, 4, 5];

	//조 랜덤으로 뽑기
	let randomBall = Math.floor(Math.random() * 5);
	groupBall = group[randomBall];
};

let yearGroup = document.querySelector(".yearGroup");
let groupSpan = document.querySelector("p.group span");
let yearBtn = document.querySelector(".yearPick");
yearBtn.addEventListener("click", () => {
	yearContainer();
	groupSpan.textContent = `${groupBall}조`;
	for (let i = 0; i < 6; i++) {
		// 숫자들 랜덤으로 뽑기
		let mixedNumber = Math.floor(Math.random() * 10);
		let mixedNumbers = yearLotto[mixedNumber];
		yearGroup.children[i].textContent = mixedNumbers;
		if (i == 0) {
			yearGroup.children[i].style.border = "5px solid #ff4c4c ";
		} else if (i == 1) {
			yearGroup.children[i].style.border = "5px solid #ff8e4f ";
		} else if (i == 2) {
			yearGroup.children[i].style.border = "5px solid #fcd153 ";
		} else if (i == 3) {
			yearGroup.children[i].style.border = "5px solid #3cbcff ";
		} else if (i == 4) {
			yearGroup.children[i].style.border = "5px solid #8d70da ";
		} else {
			yearGroup.children[i].style.border = "5px solid #777777 ";
		}
	}
});

// 탭메뉴 구현
let tabGroup = document.querySelectorAll(".tabGroup li");
let lottoContainer = document.querySelector("section.lotto");
let yearLottoContainer = document.querySelector("section.yearLotto");
for (let i = 0; i < tabGroup.length; i++) {
	tabGroup[i].addEventListener("click", (e) => {
		for (let i = 0; i < tabGroup.length; i++) {
			tabGroup[i].classList.remove("active");
		}
		e.target.classList.add("active");
		if (e.target.classList.contains("lottoTab")) {
			lottoContainer.style.display = "flex";
			yearLottoContainer.style.display = "none";
		} else {
			lottoContainer.style.display = "none";
			yearLottoContainer.style.display = "flex";
		}
	});
}
