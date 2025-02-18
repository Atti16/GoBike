document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    
    // Header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-md', 'navbar-light', 'fixed-top', 'topnav');

    const navbarBrand = document.createElement('a');
    navbarBrand.classList.add('navbar-brand');
    navbarBrand.setAttribute('href', 'home.html');
    navbarBrand.textContent = 'Go-Bicikli';
    
    const navbarToggler = document.createElement('button');
    navbarToggler.classList.add('navbar-toggler');
    navbarToggler.setAttribute('type', 'button');
    navbarToggler.setAttribute('data-toggle', 'collapse');
    navbarToggler.setAttribute('data-target', '#navbarNav');
    navbarToggler.innerHTML = '<span class="navbar-toggler-icon"></span>';
    
    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add('collapse', 'navbar-collapse');
    navbarCollapse.setAttribute('id', 'navbarNav');
    
    const navbarNav = document.createElement('ul');
    navbarNav.classList.add('navbar-nav', 'mr-auto');
    
    const navItems = [
        { href: 'home.html', text: 'Főoldal' },
        { href: 'category.html', text: 'Kategóriák', active: true },
        { href: 'shop.html', text: 'Bolt' },
        { href: 'contact.html', text: 'Kapcsolat' },
    ];
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        
        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.setAttribute('href', item.href);
        a.textContent = item.text;
        
        if (item.active) a.classList.add('active');
        
        li.appendChild(a);
        navbarNav.appendChild(li);
    });
    
    const cartNavItem = document.createElement('li');
    cartNavItem.classList.add('nav-item');
    const cartLink = document.createElement('a');
    cartLink.classList.add('nav-link');
    cartLink.setAttribute('href', 'shopping-cart.html');
    cartLink.innerHTML = '<img style="height: 30px;" src="assets/icons/shopping-cart-white.png">';
    cartNavItem.appendChild(cartLink);
    navbarNav.appendChild(cartNavItem);

    navbarCollapse.appendChild(navbarNav);
    
    nav.appendChild(navbarBrand);
    nav.appendChild(navbarToggler);
    nav.appendChild(navbarCollapse);
    header.appendChild(nav);
    body.appendChild(header);

    // Categories Section
    const categoriesSection = document.createElement('div');
    categoriesSection.classList.add('container-fluid');
    
    const row = document.createElement('div');
    row.classList.add('row');
    
    const colLeft = document.createElement('div');
    colLeft.classList.add('col-12', 'col-sm-3', 'col-md-3', 'col-lg-3', 'pt-2', 'p-0');
    
    const verticalNav = document.createElement('ul');
    verticalNav.classList.add('vertical-nav', 'navbar-nav');
    
    const categoriesHeader = document.createElement('h2');
    categoriesHeader.classList.add('vertical-nav-element');
    categoriesHeader.style.backgroundColor = '#D8D2CB';
    categoriesHeader.innerHTML = '<small>Kategóriák:</small>';
    
    verticalNav.appendChild(categoriesHeader);
    
    const categories = [
        { href: 'categories/mountain.html', text: 'Hegyi' },
        { href: 'categories/gravel.html', text: 'Gravel' },
        { href: 'categories/road.html', text: 'Út' },
        { href: 'categories/city.html', text: 'Városi' },
        { href: 'categories/electric.html', text: 'Elektromos' },
    ];
    
    categories.forEach(cat => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', cat.href);
        a.textContent = cat.text;
        li.appendChild(a);
        verticalNav.appendChild(li);
    });
    
    colLeft.appendChild(verticalNav);
    row.appendChild(colLeft);
    
    // Main content area for bikes
    const colRight = document.createElement('div');
    colRight.classList.add('col-12', 'col-sm-9', 'col-md-9', 'col-lg-9', 'pt-2', 'pt-4');
    
    const bikeSections = [
        {
            title: 'Hegyi Kerékpárok',
            description: 'A hegyi kerékpárok tökéletesek azok számára, akik kényelmes közlekedést, családi kirándulásokat és kalandokat keresnek az ismeretlen úton.',
            items: [
                { img: 'assets/images/Marin Bolinas Ridge 1 Blue.jpg', name: 'Marin Bolinas Ridge 1', id: 1 },
                { img: 'assets/images/Marin Bolinas Ridge 2 Black.jpg', name: 'Marin Bolinas Ridge 2', id: 2 }
            ]
        },
        {
            title: 'Gravel Kerékpárok',
            description: 'Könnyű, gyors és agilis, teljesítményorientált kerékpárjaink ideálisak, ha egy helyi KOM-ot szeretnél elérni.',
            items: [
                { img: 'assets/images/Marin Gestalt Blue.jpg', name: 'Marin Gestalt', id: 3 }
            ]
        },
        {
            title: 'Út Kerékpárok',
            description: 'Az úti kerékpárok tökéletesek azoknak, akik egyszerűen csak pedálozni szeretnének – ideálisak azok számára, akik bárhová el szeretnének jutni.',
            items: [
                { img: 'assets/images/Polygon Strattos S5 - Shimano 105.jpg', name: 'Polygon Strattos S5 - Shimano 105', id: 4 }
            ]
        },
        {
            title: 'Városi Kerékpárok',
            description: 'Ha a tengerpart mentén szeretnél tekerni, vagy egyszerűen csak kényelmesen eljutni a kávézóba, akkor ezek a kerékpárok tökéletesek számodra.',
            items: [
                { img: 'assets/images/Marin Kentfield CS2 ST Grey.jpg', name: 'Marin Kentfield CS2 ST', id: 5 },
                { img: 'assets/images/Polygon Sierra Deluxe Sport.jpg', name: 'Polygon Sierra Deluxe Sport', id: 6 }
            ]
        },
        {
            title: 'Elektromos Kerékpárok',
            description: 'A Polygon Mt Bromo N7 erőssége és tartóssága nem csorbult; a Shimano 504 Wh integrált akkumulátorának köszönhetően könnyedén megőrzi a stabilitást és könnyen irányítható.',
            items: [
                { img: 'assets/images/Polygon Mt Bromo N7.jpg', name: 'Polygon Mt Bromo N7', id: 7 },
                { img: 'assets/images/Polygon Mt Bromo N8.jpg', name: 'Polygon Mt Bromo N8', id: 8 }
            ]
        },
    ];
    
    bikeSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = section.title;
        
        const sectionDescription = document.createElement('p');
        sectionDescription.innerHTML = section.description;
        
        const container = document.createElement('div');
        container.classList.add('container', 'mb-3');
        
        const rowItems = document.createElement('div');
        rowItems.classList.add('row');
        
        section.items.forEach(item => {
            const colItem = document.createElement('div');
            colItem.classList.add('col-12', 'col-lg-4', 'col-md-5', 'col-sm-12', 'col-xl-3', 'mb-2');
            
            const galleryCard = document.createElement('div');
            galleryCard.classList.add('galery-card');
            
            const img = document.createElement('img');
            img.classList.add('galery-card-photo');
            img.setAttribute('src', item.img);
            img.setAttribute('alt', section.title);
            
            const itemName = document.createElement('h5');
            itemName.textContent = item.name;
            
            const btn = document.createElement('a');
            btn.classList.add('btn', 'btn-secondary', 'btn-block');
            btn.setAttribute('href', 'single-item.html');
            btn.setAttribute('onclick', `setIdOfItemToShow(${item.id})`);
            btn.textContent = 'Tovább';
            
            galleryCard.appendChild(img);
            galleryCard.appendChild(itemName);
            galleryCard.appendChild(btn);
            
            colItem.appendChild(galleryCard);
            rowItems.appendChild(colItem);
        });
        
        container.appendChild(rowItems);
        
        sectionDiv.appendChild(sectionTitle);
        sectionDiv.appendChild(sectionDescription);
        sectionDiv.appendChild(container);
        
        colRight.appendChild(sectionDiv);
    });
    
    row.appendChild(colRight);
    categoriesSection.appendChild(row);
    body.appendChild(categoriesSection);

    // Footer
    const footer = document.createElement('footer');
    footer.classList.add('page-footer', 'font-small');
    
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-copyright', 'text-center', 'py-3');
    footerContent.textContent = '© 2025 Copyright';
    
    footer.appendChild(footerContent);
    body.appendChild(footer);
});
