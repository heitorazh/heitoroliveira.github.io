const products = [
    // ... outros produtos
    {
    id: 0,
image: '../images/ita1.jpg',
title: 'Smart Fit Itaquera',
price: 109,
category: 'Smart Fit',
keywords:['smart','fit','itaquera'],
link: 'https://www.smartfit.com.br/academias/smart-fit-itaquera'
},
{
    id: 1,
    image: '../images/2.jpg',
    title: 'Smart Fit Sábbado D’Angelo',
    price: 9,
    category: 'Smart Fit',
    keywords:['smart','fit','itaquera'],
    link: 'https://www.smartfit.com.br/academias/smart-fit-sabbado-dangelo'
    },
    {
        id: 2,
        image: '../images/argos1.jpg',
        title: 'Argos Fitness Academia-Itaquera',
        price: 69,
        category: 'Fitness',
        category: 'Lutas',
        keywords:['fit','argos','muay thai','itauquera','itaquera'],
        link: '../html/argos.html'
        },
        
    
    {
        id: 3,
        image: '../images/Bluefit2-saude.jpg',
        title: 'Blue-Fit Saúde',
        price: 119,
        category: 'Fitness',
        category: 'Blue-Fit',
        keywords: ['blue', 'fit', 'saude', 'saúde'],
        link: '../html/bluefit-saude.html'
    },
    {
        id: 4,
        image: '../images/livino0.jpg',
        title: 'Blue-Fit Liveiro',
        price: 119,
        category: 'Fitness',
        category: 'Blue-Fit',
        keywords: ['blue', 'fit', 'liveiro','liviro'],
        link: '../html/bluefit-liveiro.html'
    },
    {
        id: 5,
        image: '../images/heli0.jpg',
        title: 'Blue-Fit Hélio Pelegrino',
        price: 119,
        category: 'Lutas',
        category: 'Blue-Fit',
        keywords: ['blue', 'fit', 'helio pelegrino', 'lutas', 'muay-thai'],
        link: '../html/bluefit-heliopele.html'
    },
    {
    id: 6,
image: '../images/pano1.jpg',
title: 'Panobianco Itaquera',
price: 109,
category: 'Fitness', 
category:'Lutas',
keywords: ['blue', 'fit', 'saude', 'saúde'],
link: '../html/paranobianco.html'
},
{
    id: 7,
    image: '../images/vila0.jpg',
    title: 'Blue-Fit Vila Mercês',
    price: 119,
    category: 'Lutas',
    category: 'Blue-Fit',
    keywords: ['blue', 'fit', 'vila merces','vila','04165-011','04165011'],
    link: '../html/bluefit-vila-merces.html'
},
{
    id: 8,
    image: '../images/tancredo.png',
    title: 'Blue-Fit Vila Tancredo',
    price: 119,
    
    category: 'Blue-Fit',
    keywords: ['blue', 'fit', 'tancredo','trancedo','04287-010','04287010','muay thai','Lutas'],
    link: '../html/bluefit-tancredo.html'
},
{
    id: 9,
    image: '../images/ye0.jpg',
    title: 'Blue-Fit  Yervant',
    price: 119,
    category: 'Lutas',
    category: 'Blue-Fit',
    keywords: ['blue', 'fit', 'yervant','ervant','04429-000','04429000'],
    link: '../html/bluefit-yervant.html'
},
{
    id: 10,
    image: '../images/olimpia.jpg',
    title: 'Blue-Fit Olímpia',
    price: 119,
    category: 'Lutas',
    category: 'Blue-Fit',
    keywords: ['blue', 'fit', 'olimpia','olimpiaa','04548-004','04548004'],
    link: '../html/bluefit-olimpia.html'
},
{
    id: 11,
    image: '../images/bl1.jpg',
    title: 'Blue-Fit Brooklin',
    price: 119,
    category1: 'Lutas',
    category: 'Blue-Fit',
    keywords: ['blue', 'fit', 'brooklin','broklin','brolynk','04548-004','04548004'],
    link: '../html/bluefit-olimpia.html'
},


  // Certifique-se de não alterar ou excluir nenhum ID existente
];

const keywordCorrections = {
    'saude': 'saúde',
    // Adicione mais correções conforme necessário
};

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        const { image, title, price, link } = item;
        return (
            `<div class='box' onclick="window.location.href='${link}'">
                <div class='img-box'>
                    <img class='images' src=${image} alt="${title}"></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button>Ver mais</button>
                </div>
            </div>`
        );
    }).join('');
};

document.getElementById('searchBar').addEventListener('input', (e) => {
    const searchData = e.target.value.toLowerCase();
    const correctedSearchData = correctKeywords(searchData);
    const filteredData = products.filter((item) => {
        return item.keywords.some(keyword => keyword.includes(correctedSearchData));
    });
    displayItem(filteredData);
});

function correctKeywords(keyword) {
    return keywordCorrections[keyword] || keyword;
}

// Adiciona um seletor de categoria
const categorySelector = document.getElementById('categorySelector');
const allCategories = ['Todos', 'Smart Fit', 'Fitness', 'Lutas', 'Cross Fit', 'Blue-Fit', /* Adicione mais categorias aqui */];

allCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelector.appendChild(option);
});


// Adiciona um ouvinte de evento para o seletor de categoria
categorySelector.addEventListener('change', () => {
    const selectedCategory = categorySelector.value;
    
    if (selectedCategory === 'Todos') {
        displayItem(products);
    } else {
        const filteredByCategory = products.filter(product => product.category === selectedCategory);
        displayItem(filteredByCategory);
    }
});

// Adiciona um botão "Limpar Filtro"
const clearFilterButton = document.getElementById('clearFilterButton');
clearFilterButton.addEventListener('click', () => {
    categorySelector.value = 'Todos';
    displayItem(products);
});
displayItem(products);
