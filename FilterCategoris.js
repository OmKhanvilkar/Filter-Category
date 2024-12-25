Categories=[
    {
        Name:'All',
        id:1
    },
    {
        Name:'Male',
        id:2
    },
    {
        Name:'Female',
        id:3
    },
    {

        Name:'Others',
        id:4
    }
];

options=[
    {
        Name:'Om',
        id:2
    },
    {
        Name:'Sahil',
        id:2
    },
    {
        Name:'Prasad',
        id:2
    },
    {
        Name:'Female 1',
        id:3
    },
    {
        Name:'Female 2',
        id:3
    },
    {
        Name:'Female 3',
        id:3
    },
    {
        Name:'Angle Priya',
        id:4
    }
];

//Generating Html
let categoryhtml="";

Categories.forEach((category) => {
    categoryhtml+=
    `
    <button class="js-category-btn" data-id="${category.id}">
        ${category.Name}
    </button>
    `
});

document.querySelector('.js-Categories')
    .innerHTML=categoryhtml;

function filterCategories(options=filter){
    let optionsHtml='';
    options.forEach((option)=>{
        optionsHtml+=
        `
        <div class="options">
            ${option.Name}
        </div>
        `;
    });

    document.querySelector('.js-options')
        .innerHTML=optionsHtml;
}
filterCategories(options);


let button=document.querySelectorAll('.js-category-btn');

button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const btnId=btn.getAttribute('data-id');
        // console.log(btnId);

        if(btnId==1){
            filterCategories(options);
            return;
        }

        let filter=[];
        options.forEach((option)=>{ 
            
            if(option.id==btnId){
                filter.push(option);
                // console.log(option.Name);
            }
        });
        console.log(filter); 
        filterCategories(filter);
    });
});
