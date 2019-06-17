$('#nickSubmit').submit(event => {
    event.preventDefault();
    const user = $('#nickname').val();
    const nick = $('#nick');
    nick.css('display', 'none');
    $('#user-top').append(`<strong><h4> ${user}</h4></strong> `);
    $('#user').val(user);
    console.log(user);
});