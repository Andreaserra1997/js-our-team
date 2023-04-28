const eleList = document.querySelector('#date-list')

const arrTeam = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        job: 'Founder & CEO',
        photo: '<img src="img/wayne-barnett-founder-ceo.jpg" alt="">',
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        job: 'Chief Editor',
        photo: '<img src="img/angela-caroll-chief-editor.jpg" alt="">',
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        job: 'Office Manager',
        photo: '<img src="img/walter-gordon-office-manager.jpg" alt="">',
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        job: 'Social Media Manager',
        photo: '<img src="img/angela-lopez-social-media-manager.jpg" alt="">',
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        job: 'Developer',
        photo: '<img src="img/scott-estrada-developer.jpg" alt="">',
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        job: 'Graphic Designer',
        photo: '<img src="img/barbara-ramos-graphic-designer.jpg" alt="">',
    },
];

print(arrTeam, eleList);

function print(arr, eleContainer) {
	eleContainer.innerHTML = '';
	for (let i = 0; i < arr.length; i++) {
		let date = arr[i];
		eleContainer.innerHTML += `<li>${date.photo} ${date.firstName} ${date.lastName} ${date.job}</li>`;
	}
};

console.log(arrTeam);