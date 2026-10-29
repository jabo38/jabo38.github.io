document.querySelector('.tedx-preview').addEventListener('click', function () {
    const video = document.createElement('iframe');
    video.src = 'https://www.youtube.com/embed/pjvE3um_wj4?autoplay=1';
    video.title = 'TEDx Talk by Jeff McDonald';
    video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    video.allowFullscreen = true;
    this.replaceWith(video);
    video.focus();
});
