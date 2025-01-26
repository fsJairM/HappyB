function playMusic() {
    const audio = document.getElementById("birthdaySong");
    audio.play();
    document.querySelector(".btn").style.display = "none"; // Oculta el botón después de reproducir
}