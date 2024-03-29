$('.card').on('click', function () {
    var artist = $(this).data('artist')

    $('#column-right').empty()

    if (artist === 'nirvana') {
        $('#column-right').css('background-image', 'url("https://people.com/thmb/FM0c0-njIY8t6hF8V4YmbW8b-o0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/nirvana-660-0269944e1daa401199afb0b9b4a8706e.jpg")')
    }

    if (artist === 'blink-182') {
        $('#column-right').css('background-image', 'url("https://upload.wikimedia.org/wikipedia/en/2/21/Blink-182_-_Dude_Ranch_cover.jpg")')
    }

    if (artist === 'radiohead') {
        $('#column-right').css('background-image', 'url("https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png")')
    }

    if (artist === 'The 1975') {
        $('#column-right').css('background-image', 'url("https://upload.wikimedia.org/wikipedia/en/d/d7/The_1975_-_Being_Funny_in_a_Foreign_Language.png")')
    }
})