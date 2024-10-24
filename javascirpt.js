// script.js

let selectedCourse = null;

function selectCourse(course) {
    const courseOptions = document.querySelectorAll('.course-option');

    courseOptions.forEach(option => {
        option.classList.remove('selected'); // Xóa class selected khỏi tất cả
    });

    // Thêm class selected vào phần được chọn
    const selectedOption = Array.from(courseOptions).find(option => option.textContent === course);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}
