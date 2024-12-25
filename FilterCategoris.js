Categories=[
    {
        Name:'Male',
        id:1
    },
    {
        Name:'Female',
        id:2
    },
    {
        Name:'Others',
        id:3
    },
    {
        Name:'All',
        id:4
    }
];

options=[
    {
        Name:'Om',
        id:1
    },
    {
        Name:'Sahil',
        id:1
    },
    {
        Name:'Prasad',
        id:1
    },
    {
        Name:'Female 1',
        id:2
    },
    {
        Name:'Female 2',
        id:2
    },
    {
        Name:'Female 3',
        id:2
    },
    {
        Name:'Angle Priya',
        id:3
    }
];

//Generating Html
let categoryhtml="";

Categories.forEach((category) => {
    categoryhtml+=
    `<button class="js-category-btn" data-id="${category.id}">
        ${category.Name}
    </button>`
});

document.querySelector('.js-Categories')
    .innerHTML=categoryhtml;

const catBtn=document.querySelectorAll('.js-category-btn');
catBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const categoryId = btn.getAttribute('data-id');
        filterOptionsByCategory(categoryId);
    });
});
    
function filterOptionsByCategory(categoryId){
    let filteredOptions = options.filter(option => option.id == categoryId);
    let optionshtml="";
    filteredOptions.forEach((option) => {
        optionshtml += `<button>${option.Name}</button>`;
    });

    document.querySelector('.js-options').innerHTML = optionshtml;
}

filterOptionsByCategory([1]);


