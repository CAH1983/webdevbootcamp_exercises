console.log('connected');

//ajax method
$('#btn').click(function() {
    $.ajax({
        method: 'GET',
        url: 'https://baconipsum.com/api/?type=meat-and-filler',
        dataType: 'json'
    })
    .done(addParagraph)
    .fail(function() {
        alert('oh no! failed!');
    })
});

function addParagraph(data) {
    console.log('done');
    console.log(data);
    $('p').text(data[0]);
}

//jQuery get, post, get JSOn methods
$('#getBtn').click(function() {
    $.get('https://pokeapi.co/api/v2/')
    .done(function(data) {
        console.log(data);
    })
    .fail(function() {
        console.log('error');
    })
})

$('#postBtn').click(function() {
    let data = {
        name: 'Charlie',
        city: 'Florence'
    }
    
    $.post('www.catsarecoolandsoaredogs.com')
    .done(function(data) {
        console.log('Hi');
    })
    .fail(function() {
        console.log('error!');
    })
});

$('#getJSONBtn').click(function() {

})

