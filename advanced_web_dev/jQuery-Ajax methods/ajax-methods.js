console.log('connected');

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