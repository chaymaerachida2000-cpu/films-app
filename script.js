document.addEventListener('DOMContentLoaded', function() {
    // التعريفات
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.getElementById('search-box');
    const findBtn = document.getElementById('find-btn');
    const filmInput = document.getElementById('film-input');
    const myApiKey = "775cfb89";

    // 1. كود إظهار وإخفاء المربع (باستعمال الـ Class اللي صاوبتي)
    if (searchBtn && searchBox) {
        searchBtn.onclick = function() {
            searchBox.classList.toggle('active');
            console.log("Toggle Active Class");
        };
    }

    // 2. كود البحث
    if (findBtn) {
        findBtn.onclick = function() {
            const movieName = filmInput.value.trim();

            if (movieName === "") {
                alert("Please write a film name!");
                return;
            }

            console.log("Searching for:", movieName);

            fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${myApiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    // كيعطيك معلومات الفيلم في Alert
                    alert(`✅ Found!\nTitle: ${data.Title}\nYear: ${data.Year}\nRating:    ${data.imdbRating}  `);
                } else {
                    alert("❌ Film not found!");
                }
            })
            .catch(err => alert("Error: Check connection"));
        };
    }
});