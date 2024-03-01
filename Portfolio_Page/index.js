function switchLanguage(lang) {
    document.querySelectorAll('.language').forEach(function (el) {
        el.style.display = 'none' // Hide all language sections
    })
    document.getElementById('content-' + lang).style.display = 'block' // Show the selected language
}
