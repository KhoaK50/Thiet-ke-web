// Mã JavaScript gốc của bạn
(() => {
    const $ = document.querySelector.bind(document);

    let timeRotate = 7000; //7 giây
    let currentRotate = 0;
    let isRotating = false;
    const wheel = $('.wheel');
    const btnWheel = $('.btn--wheel');
    const showMsg = $('.msg');

    //=====< Danh sách phần thưởng >=====
	const listGift = [
		{
			text: 'GIẢM 20% TOUR VŨNG TÀU',
			percent: 15 / 100,
		},
		{
			text: 'GIẢM 10% TOUR BÌNH THUẬN',
			percent: 15 / 100,
		},
		{
			text: 'KEM CHỐNG NẮNG SUNPLAY',
			percent: 20 / 100,
		},
		{
			text: 'GIẢM 15% TOUR ĐÀ LẠT',
			percent: 15 / 100,
		},
		{
			text: '1.000.000 VNĐ',
			percent: 9 / 100,
		},
		{
			text: '500.000 VNĐ',
			percent: 15 / 100,
		},
		{
			text: 'VÉ ÂM NHẠC ',
			percent: 10 / 100,
		},
		{
			text: 'FREE TOUR!!!',
			percent: 1 /100,
		},
	];

	//=====< Số lượng phần thưởng >=====
	const size = listGift.length;

	//=====< Số đo góc của 1 phần thưởng chiếm trên hình tròn >=====
	const rotate = 360 / size;

	//=====< Số đo góc cần để tạo độ nghiêng, 90 độ trừ đi góc của 1 phần thưởng chiếm >=====
	const skewY = 90 - rotate;

	listGift.map((item, index) => {
		//=====< Tạo thẻ li >=====
		const elm = document.createElement('li');

		//=====< Xoay và tạo độ nghiêng cho các thẻ li >=====
		elm.style.transform = `rotate(${
			rotate * index
		}deg) skewY(-${skewY}deg)`;

		//=====< Thêm background-color so le nhau và căn giữa cho các thẻ text>=====
		if (index % 2 == 0) {
			elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
				rotate / 2
			}deg);" class="text text-1">
			<b>${item.text}</b>
		</p>`;
		} else {
			elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
				rotate / 2
			}deg);" class="text text-2">
		<b>${item.text}</b>
		</p>`;
		}

		//=====< Thêm vào thẻ ul >=====
		wheel.appendChild(elm);
	});
    //=====< Các logic của vòng quay >=====
    window.start = () => {
        showMsg.innerHTML = '';
        isRotating = true;

        // Logic ngẫu nhiên phần thưởng
        const random = Math.random();
        const gift = getGift(random);
        currentRotate += 360 * 10;
        rotateWheel(currentRotate, gift.index);
        showGift(gift);
    };

    const rotateWheel = (currentRotate, index) => {
        $('.wheel').style.transform = `rotate(${
            currentRotate - index * (360 / listGift.length) - (360 / listGift.length) / 2
        }deg)`;
    };

    const getGift = (randomNumber) => {
        let currentPercent = 0;
		let list = [];

		listGift.forEach((item, index) => {
			//=====< Cộng lần lượt phần trăm trúng của các phần thưởng >=====
			currentPercent += item.percent;

			//=====< Số ngẫu nhiên nhỏ hơn hoặc bằng phần trăm hiện tại thì thêm phần thưởng vào danh sách >=====
			if (randomNumber <= currentPercent) {
				list.push({ ...item, index });
			}
		});

		//=====< Phần thưởng đầu tiên trong danh sách là phần thưởng quay được>=====
		return list[0];
    };

    const showGift = (gift) => {
        let timer = setTimeout(() => {
            isRotating = false;
            showMsg.innerHTML = `Chúc mừng bạn đã nhận được "${gift.text}"`;
            clearTimeout(timer);
        }, timeRotate);
    };

    // Đừng thêm sự kiện click ở đây nữa!
})();

// Mã JavaScript bổ sung
(() => {
    // Tạo ô nhập mã và thông báo lỗi
    const codeInput = document.createElement("input");
    codeInput.id = "code-input";
    codeInput.placeholder = "Nhập mã 8 kí tự để quay";
    codeInput.style.marginTop = "1rem";
    codeInput.style.padding = "0.75rem";
    codeInput.style.width = "80%";
    codeInput.style.border = "1px solid #ccc";
    codeInput.style.borderRadius = "4px";
    codeInput.style.fontSize = "1rem";
    codeInput.style.boxSizing = "border-box"; // Đảm bảo padding không làm tăng kích thước
codeInput.style.display = "block"; // Đảm bảo nó là một khối
codeInput.style.maxWidth = "300px"; // Giới hạn chiều rộng tối đa
codeInput.style.minWidth = "300px"; // Giữ chiều rộng tối thiểu

    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.9rem";
    errorMessage.style.marginTop = "0.5rem";
    errorMessage.style.display = "none";

    // Chèn ô nhập mã và thông báo lỗi vào dưới nút quay
    const mainSection = document.querySelector(".main");
    mainSection.appendChild(codeInput);
    mainSection.appendChild(errorMessage);

    // Hàm kiểm tra mã
    const validateCode = () => {
        const code = codeInput.value.trim();
        if (code.length !== 8) {
            errorMessage.textContent = "Mã phải có đúng 8 ký tự!";
            errorMessage.style.display = "block";
            return false;
        }
        errorMessage.style.display = "none";
        return true;
    };

    // Thay đổi sự kiện nút quay
    const btnWheel = document.querySelector(".btn--wheel");
    btnWheel.addEventListener("click", () => {
        if (validateCode()) {
            start(); // Chỉ gọi hàm `start` khi mã hợp lệ
        }
    });
})();
