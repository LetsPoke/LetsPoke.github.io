function switchLanguage(lang) {
    document.querySelectorAll('.language').forEach(function (el) {
        el.style.display = 'none'
        el.classList.remove('selected')
    })
    document.getElementById('content-' + lang).style.display = 'block'
    document.getElementById('content-' + lang).classList.add('selected')
}
