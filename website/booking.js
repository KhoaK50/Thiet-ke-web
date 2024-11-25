document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed'); // Kiểm tra DOM đã tải xong

    // Định nghĩa hàm generateCoupon
    function generateCoupon() {
        console.log('generateCoupon called'); // Kiểm tra hàm được gọi
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let couponCode = '';
        for (let i = 0; i < 8; i++) {
            couponCode += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        console.log('Generated coupon code:', couponCode); // Kiểm tra mã coupon
        document.getElementById('couponCode').textContent = couponCode;

        const modal = document.getElementById('couponModal');
        if (modal) {
            modal.style.display = 'flex';
            console.log('Modal displayed'); // Kiểm tra modal được hiển thị
        } else {
            console.error('Modal not found'); // Báo lỗi nếu không tìm thấy modal
        }

        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                console.log('Modal closed'); // Kiểm tra modal được đóng
            }
        });
    }

    // Gắn sự kiện cho nút bấm
    const rewardButton = document.querySelector('.reward__btn');
    if (rewardButton) {
        rewardButton.addEventListener('click', generateCoupon);
        console.log('Event listener attached to button'); // Kiểm tra sự kiện được gắn
    } else {
        console.error('Button not found'); // Báo lỗi nếu không tìm thấy nút
    }
});
