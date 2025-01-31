function createSnowflake(): void {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.width = `${Math.random() * 10 + 5}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.getElementById('snowflakes-container')?.appendChild(snowflake);

    setTimeout((): void => {
        snowflake.remove();
    }, 5000);
}

function startSnowfall(): void {
    setInterval(createSnowflake, 100);
}

// Call startSnowfall to begin the snowfall effect
startSnowfall();