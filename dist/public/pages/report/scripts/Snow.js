"use strict";
function createSnowflake() {
    var _a;
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.width = `${Math.random() * 10 + 5}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    (_a = document.getElementById('snowflakes-container')) === null || _a === void 0 ? void 0 : _a.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}
function startSnowfall() {
    setInterval(createSnowflake, 100);
}
startSnowfall();
