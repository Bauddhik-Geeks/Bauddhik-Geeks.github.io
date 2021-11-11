var teamMember = [{
        name: 'Keval Vavaliya',
        image: 'https://avatars.githubusercontent.com/u/72963356?v=4',
        github: 'https://github.com/kevalvavaliya',
        twitter: 'https://twitter.com/keval_vavaliya'
    }, {
        name: 'Nitesh Thapliyal',
        image: 'https://avatars.githubusercontent.com/u/53345517?v=4dis',
        github: 'https://github.com/Nitesh-thapliyal',
        twitter: 'https://twitter.com/Bauddhik_Geek'
    },
    {
        name: 'Aditya Mangal',
        image: 'https://github.com/adityamangal1.png?size=460',
        github: 'https://github.com/adityamangal1',
        twitter: 'https://twitter.com/AdityaM44382015'
    }, {
        name: 'Piyush Chandel',
        image: 'https://github.com/Piyush-Codes7.png?size=460',
        github: 'https://github.com/Piyush-Codes7',
        twitter: 'https://twitter.com/Piyush_Chandel7'
    },
    {
        name: 'Harikrushn Kanani',
        image: 'https://github.com/harikanani.png?size=460',
        github: 'https://github.com/harikanani',
        twitter: 'https://twitter.com/Harikrushn9'
    }, {
        name: 'Kamlesh Joshi',
        image: 'https://github.com/kamleshjoshi8102.png',
        github: 'https://github.com/kamleshjoshi8102',
        twitter: 'https://twitter.com/spyd3r17'
    },
    {
        name: 'Abhi Goyani',
        image: 'https://github.com/abhigoyani.png',
        github: 'https://github.com/abhigoyani',
        twitter: 'https://twitter.com/abhigoyani_'
    }, {
        name: 'Raja Harsh Vardhan Singh',
        image: 'https://github.com/rhvsingh.png',
        github: 'https://github.com/rhvsingh',
        twitter: 'https://twitter.com/rhvsingh'
    }, {
        name: 'Rajkumar Khistariya',
        image: 'https://github.com/Rajkumar-justcoder.png',
        github: 'https://github.com/Rajkumar-justcoder',
        twitter: 'https://twitter.com/Rajkumar_THM'
    }
];

var contriMember = [
    /* {
            name: 'Keval Vavaliya',
            image: 'https://avatars.githubusercontent.com/u/72963356?v=4',
            github: 'https://github.com/kevalvavaliya'
        }, {
            name: 'Nitesh Thapliyal',
            image: 'https://avatars.githubusercontent.com/u/53345517?v=4dis',
            github: 'https://github.com/Nitesh-thapliyal'
        },
        {
            name: 'Aditya Mangal',
            image: 'https://github.com/adityamangal1.png?size=460',
            github: 'https://github.com/adityamangal1'
        }, {
            name: 'Piyush Chandel',
            image: 'https://github.com/Piyush-Codes7.png?size=460',
            github: 'https://github.com/Piyush-Codes7'
        },
        {
            name: 'Harikrushn Kanani',
            image: 'https://github.com/harikanani.png?size=460',
            github: 'https://github.com/harikanani'
        }, {
            name: 'Kamlesh Joshi',
            image: 'https://github.com/kamleshjoshi8102.png',
            github: 'https://github.com/kamleshjoshi8102'
        }, */
    {
        name: 'Rushil Makvana',
        image: 'https://github.com/rushilmakvana.png',
        github: 'https://github.com/rushilmakvana'
    }, {
        name: 'Atharva Ikhar',
        image: 'https://github.com/iatharva.png',
        github: 'https://github.com/iatharva'
    }, {
        name: 'Aayush Jain',
        image: 'https://github.com/aayush89890.png',
        github: 'https://github.com/aayush89890'
    }, {
        name: 'Arnav Sharma',
        image: 'https://github.com/arnav1776.png',
        github: 'https://github.com/arnav1776'
    },
    /*  {
            name: 'Rajkumar Khistariya',
            image: 'https://github.com/Rajkumar-justcoder.png',
            github: 'https://github.com/Rajkumar-justcoder'
        }, {
            name: 'Abhi Goyani',
            image: 'https://github.com/abhigoyani.png',
            github: 'https://github.com/abhigoyani'
        }, {
            name: 'Raja Harsh Vardhan Singh',
            image: 'https://github.com/rhvsingh.png',
            github: 'https://github.com/rhvsingh'
        }, */
    {
        name: 'Stuti Mongia',
        image: 'https://github.com/stutimongia2024.png',
        github: 'https://github.com/stutimongia2024'
    }, {
        name: 'Dhruva Bhattacharya',
        image: 'https://github.com/dhruvaop.png',
        github: 'https://github.com/dhruvaop'
    }, {
        name: 'Mrinank',
        image: 'https://github.com/EFFLUX110.png',
        github: 'https://github.com/EFFLUX110'
    }, {
        name: 'Mayank Mamgain',
        image: 'https://github.com/Mayank17M.png',
        github: 'https://github.com/Mayank17M'
    }, {
        name: 'Raj Mahadevwala',
        image: 'https://github.com/rajmahadev8.png',
        github: 'https://github.com/rajmahadev8'
    }
];

var contributors1 = document.querySelectorAll('.contributors')[0];
var contributors2 = document.querySelectorAll('.contributors')[1];

for (let i = 0; i < teamMember.length; i++) {
    let divCreate = document.createElement('div');
    divCreate.className = 'contri_box';
    divCreate.innerHTML = '<div class="contri-card"><div class="contri-card-inner"><div class="contri-card-front"><img src="' + teamMember[i].image + '" alt="' + teamMember[i].name + '" /></div><div class="contri-card-back"><div style="position:relative;transform-style:preserve-3d;"><span>' + teamMember[i].name + '</span><div> <li><a href="' + teamMember[i].github + '" target="_blank"><i class="fab fa-github"></i></a></li><li><a href="' + teamMember[i].twitter + '" target="_blank"><i class="fab fa-twitter"></i></a></li></div></div></div></div></div>';
    contributors1.append(divCreate);
}

for (let i = 0; i < contriMember.length; i++) {
    let divCreate = document.createElement('div');
    divCreate.className = 'contri_box';
    divCreate.innerHTML = '<div class="contri-card"><div class="contri-card-inner"><div class="contri-card-front"><img src="' + contriMember[i].image + '" alt="' + contriMember[i].name + '" /></div><div class="contri-card-back"><div><span>' + contriMember[i].name + '</span><div> <li><a href="' + contriMember[i].github + '" target="_blank"><i class="fab fa-github"></i></a></li></div></div></div></div></div>';
    contributors2.append(divCreate);
}