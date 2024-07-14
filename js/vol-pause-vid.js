document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video-container video');
    const playIcons = document.querySelectorAll('.play-icon');
    const volumeIcons = document.querySelectorAll('.volume-icon');

    playIcons.forEach(function (playIcon) {
        playIcon.addEventListener('click', function () {
            const videoId = playIcon.getAttribute('data-video-id');
            const video = document.getElementById(videoId);

            // Toggle between video play and pause
            if (video.paused) {
                video.play();
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');
            } else {
                video.pause();
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
            }
        });
    });

    volumeIcons.forEach(function (volumeIcon) {
        volumeIcon.addEventListener('click', function () {
            const videoId = volumeIcon.getAttribute('data-video-id');
            const video = document.getElementById(videoId);

            // Toggle between audio on and off
            video.muted = !video.muted;

            if (video.muted) {
                volumeIcon.classList.remove('fa-volume-up');
                volumeIcon.classList.add('fa-volume-off');
            } else {
                volumeIcon.classList.remove('fa-volume-off');
                volumeIcon.classList.add('fa-volume-up');
            }
        });
    });
});




// icon changer vol/pause-play

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the play and volume icons
    const playIcon = document.getElementById('play-icon');
    const volumeIcon = document.getElementById('volume-icon');

    // Add click event listener to the play icon
    playIcon.addEventListener('click', function () {
        // Toggle the 'fa-play' and 'fa-pause' classes for the play icon
        playIcon.classList.toggle('fa-play');
        playIcon.classList.toggle('fa-pause');
    });

    // Add click event listener to the volume icon
    volumeIcon.addEventListener('click', function () {
        // Toggle the 'fa-volume-up' and 'fa-volume-off' classes for the volume icon
        volumeIcon.classList.toggle('fa-volume-up');
        volumeIcon.classList.toggle('fa-volume-off');
    });
});


//video play/pause press
document.addEventListener('DOMContentLoaded', function () {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(function (videoContainer) {
        const video = videoContainer.querySelector('video');
        const playIcon = videoContainer.querySelector('.play-icon');

        // Video container click event
        videoContainer.addEventListener('click', function (event) {
            // Check if it's a mobile device or if the click was on the video itself
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile || event.target.tagName === 'VIDEO') {
                // Toggle between video play and pause
                if (video.paused) {
                    video.play();
                    playIcon.classList.remove('fa-play');
                    playIcon.classList.add('fa-pause');
                } else {
                    video.pause();
                    playIcon.classList.remove('fa-pause');
                    playIcon.classList.add('fa-play');
                }
            }
        });
    });
});


