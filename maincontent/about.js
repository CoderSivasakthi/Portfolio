document.addEventListener('DOMContentLoaded', function() {
    const skillBoxes = document.querySelectorAll('.skill-box');

    skillBoxes.forEach(box => {
        const level = box.getAttribute('data-level');
        const circleOuter = box.querySelector('.circle-outer::after');
        
        const rotation = (level / 100) * 360;
        circleOuter.style.transform = `rotate(${rotation}deg)`;
    });
});
