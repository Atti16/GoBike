document.addEventListener("DOMContentLoaded", function() {
    // Header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-md', 'navbar-light', 'fixed-top', 'topnav');
    header.appendChild(nav);

    const brandLink = document.createElement('a');
    brandLink.classList.add('navbar-brand');
    brandLink.href = 'home.html';
    brandLink.textContent = 'Go-Bicikli';
    nav.appendChild(brandLink);

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('navbar-toggler');
    toggleButton.type = 'button';
    toggleButton.setAttribute('data-toggle', 'collapse');
    toggleButton.setAttribute('data-target', '#navbarNav');
    const toggleIcon = document.createElement('span');
    toggleIcon.classList.add('navbar-toggler-icon');
    toggleButton.appendChild(toggleIcon);
    nav.appendChild(toggleButton);

    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add('collapse', 'navbar-collapse');
    navbarCollapse.id = 'navbarNav';
    nav.appendChild(navbarCollapse);

    const ulNav = document.createElement('ul');
    ulNav.classList.add('navbar-nav', 'mr-auto');
    navbarCollapse.appendChild(ulNav);

    const pages = [
        { name: 'Főoldal', link: 'home.html' },
        { name: 'Kategóriák', link: 'category.html' },
        { name: 'Bolt', link: 'shop.html' },
        { name: 'Kapcsolat', link: 'contact.html' }
    ];

    pages.forEach(page => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = page.link;
        a.textContent = page.name;
        li.appendChild(a);
        ulNav.appendChild(li);
    });

    const shoppingCart = document.createElement('ul');
    shoppingCart.classList.add('navbar-nav');
    navbarCollapse.appendChild(shoppingCart);

    const cartItem = document.createElement('li');
    cartItem.classList.add('nav-item');
    const cartLink = document.createElement('a');
    cartLink.classList.add('nav-link');
    cartLink.href = 'shopping-cart.html';
    const cartImg = document.createElement('img');
    cartImg.style.height = '30px';
    cartImg.src = 'assets/icons/shopping-cart-white.png';
    cartLink.appendChild(cartImg);
    cartItem.appendChild(cartLink);
    shoppingCart.appendChild(cartItem);

    document.body.appendChild(header);

    // Categories Section
    const container = document.createElement('div');
    container.classList.add('container-fluid');
    document.body.appendChild(container);

    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    const sidebar = document.createElement('div');
    sidebar.classList.add('col-12', 'col-sm-3', 'col-md-3', 'col-lg-3', 'pt-2', 'p-0');
    row.appendChild(sidebar);

    const verticalNav = document.createElement('ul');
    verticalNav.classList.add('vertical-nav', 'navbar-nav');
    sidebar.appendChild(verticalNav);

    const categoryHeader = document.createElement('h2');
    categoryHeader.classList.add('vertical-nav-element');
    categoryHeader.style.backgroundColor = '#D8D2CB';
    const small = document.createElement('small');
    small.textContent = 'Kategóriák:';
    categoryHeader.appendChild(small);
    verticalNav.appendChild(categoryHeader);

    const categories = [
        { name: 'Hegyi', link: 'categories/mountain.html' },
        { name: 'Gravel', link: 'categories/gravel.html' },
        { name: 'Út', link: 'categories/road.html' },
        { name: 'Városi', link: 'categories/city.html' },
        { name: 'Elektromos', link: 'categories/electric.html' }
    ];

    categories.forEach(category => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = category.link;
        a.textContent = category.name;
        li.appendChild(a);
        verticalNav.appendChild(li);
    });

    const content = document.createElement('div');
    content.classList.add('col-12', 'col-sm-9', 'col-md-9', 'col-lg-9', 'pt-2', 'pt-4');
    row.appendChild(content);

    const bikeCategories = [
        {
            title: 'Hegyi Kerékpárok',
            description: 'A hegyi kerékpárok tökéletesek azok számára, akik kényelmes közlekedést...',
            items: [
                { name: 'Marin Bolinas Ridge 1', imgSrc: 'assets/images/Marin Bolinas Ridge 1 Blue.jpg', link: 'single-item.html', id: 1 },
                { name: 'Marin Bolinas Ridge 2', imgSrc: 'assets/images/Marin Bolinas Ridge 2 Black.jpg', link: 'single-item.html', id: 2 }
            ]
        },
        {
            title: 'Gravel Kerékpárok',
            description: 'Könnyű, gyors és agilis, teljesítményorientált kerékpárjaink...',
            items: [
                { name: 'Marin Gestalt', imgSrc: 'assets/images/Marin Gestalt Blue.jpg', link: 'single-item.html', id: 3 }
            ]
        },
        {
            title: 'Út Kerékpárok',
            description: 'Az úti kerékpárok tökéletesek azoknak, akik egyszerűen csak pedálozni szeretnének...',
            items: [
                { name: 'Polygon Strattos S5 - Shimano 105', imgSrc: 'assets/images/Polygon Strattos S5 - Shimano 105.jpg', link: 'single-item.html', id: 4 }
            ]
        },
        {
            title: 'Városi Kerékpárok',
            description: 'Ha a tengerpart mentén szeretnél tekerni, vagy egyszerűen csak kényelmesen eljutni...',
            items: [
                { name: 'Marin Kentfield CS2 ST', imgSrc: 'assets/images/Marin Kentfield CS2 ST Grey.jpg', link: 'single-item.html', id: 5 },
                { name: 'Polygon Sierra Deluxe Sport', imgSrc: 'assets/images/Polygon Sierra Deluxe Sport.jpg', link: 'single-item.html', id: 6 }
            ]
        },
        {
            title: 'Elektromos Kerékpárok',
            description: 'A Polygon Mt Bromo N7 erőssége és tartóssága nem csorbult...',
            items: [
                { name: 'Polygon Mt Bromo N7', imgSrc: 'assets/images/Polygon Mt Bromo N7.jpg', link: 'single-item.html', id: 7 },
                { name: 'Polygon Mt Bromo N8', imgSrc: 'assets/images/Polygon Mt Bromo N8.jpg', link: 'single-item.html', id: 8 }
            ]
        }
    ];

    bikeCategories.forEach(category => {
        const categoryDiv = document.createElement('div');
        content.appendChild(categoryDiv);

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.title;
        categoryDiv.appendChild(categoryTitle);

        const hr = document.createElement('hr');
        categoryDiv.appendChild(hr);

        const description = document.createElement('p');
        description.textContent = category.description;
        categoryDiv.appendChild(description);

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('container', 'mb-3');
        categoryDiv.appendChild(itemContainer);

        const itemRow = document.createElement('div');
        itemRow.classList.add('row');
        itemContainer.appendChild(itemRow);

        category.items.forEach(item => {
            const col = document.createElement('div');
            col.classList.add('col-12', 'col-lg-4', 'col-md-5', 'col-sm-12', 'col-xl-3', 'mb-2');
            itemRow.appendChild(col);

            const card = document.createElement('div');
            card.classList.add('galery-card');
            col.appendChild(card);

            const img = document.createElement('img');
            img.src = item.imgSrc;
            img.alt = item.name;
            img.classList.add('galery-card-photo');
            card.appendChild(img);

            const itemName = document.createElement('h5');
            itemName.textContent = item.name;
            card.appendChild(itemName);

            const button = document.createElement('a');
            button.classList.add('btn', 'btn-secondary', 'btn-block');
            button.href = item.link;
            button.setAttribute('onclick', `setIdOfItemToShow(${item.id})`);
            button.textContent = 'Tovább';
            card.appendChild(button);
        });
    });

    // Footer
    const footer = document.createElement('footer');
    footer.classList.add('page-footer', 'font-small');
    document.body.appendChild(footer);

    const copyright = document.createElement('div');
    copyright.classList.add('footer-copyright', 'text-center', 'py-3');
    copyright.textContent = '© 2025 Copyright';
    footer.appendChild(copyright);
});
