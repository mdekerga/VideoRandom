const apiKey = '';

function getRandomYoutubeVideo(){

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.items.length);
        const videoID = data.items[randomIndex].id.videoId;

        const iframe = document.querySelector('#video-frame');
        iframe.src = `https://www.youtube.com/embed/${videoID}`;
        console.log(videoID);
        console.log(data);
    })
    .catch(error => {
        console.error("Erreur lors de la récupérations des vidéos Youtube",error)
    });


}

document.querySelector('.button').addEventListener('click',getRandomYoutubeVideo);
