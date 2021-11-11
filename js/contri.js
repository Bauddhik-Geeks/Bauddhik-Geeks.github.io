var teamMember = [{
    name: 'Raja',
    image: 'https://github.com/rhvsingh.png',
    github: 'https://github.com/rhvsingh',
    twitter: 'rhvsingh'
}, {
    name: 'Raj Kumar',
    image: 'https://github.com/rhvsingh.png',
    github: 'rajkumar',
    twitter: 'rajkumar'
}];


var contriMember = [{}];

var contributors1 = document.querySelectorAll('.contributors')[0];
var contributors2 = document.querySelectorAll('.contributors')[1];

for (let i = 0; i < teamMember.length; i++) {
    let divCreate = document.createElement('div');
    divCreate.className = 'contri_box';
    divCreate.innerHTML = '<div class="contri-card"><div class="contri-card-inner"><div class="contri-card-front"><img src="' + teamMember[i].image + '" alt="' + teamMember[i].name + '" /></div><div class="contri-card-back"><span>' + teamMember[i].name + '</span><div> <li><a href="' + teamMember[i].github + '" target="_blank"><i class="fab fa-github"></i></a></li><li><a href="' + teamMember[i].twitter + '" target="_blank"><i class="fab fa-twitter"></i></a></li></div></div></div></div>';
    contributors1.append(divCreate);
}