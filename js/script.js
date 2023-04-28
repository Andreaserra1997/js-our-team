/*
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/
// const eleName = document.querySelector('#name');
// const eleSurname = document.querySelector('#surname');
// const eleJob = document.querySelector('#job');
// const elePhoto = document.querySelector('#photo');

const eleList = document.querySelector('#date-list')

const arrTeam = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        job: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        job: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        job: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        job: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        job: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        job: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
];

print(arrTeam, eleList);

function print(arr, eleContainer) {
	eleContainer.innerHTML = '';
	for (let i = 0; i < arr.length; i++) {
		let date = arr[i];
		eleContainer.innerHTML += `<li>${date.firstName} ${date.lastName} ${date.job} ${date.photo}</li>`;
	}
};

console.log(arrTeam);