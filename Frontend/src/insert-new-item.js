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

    document.body.appendChild(header);

    // Form Section
    const container = document.createElement('div');
    container.classList.add('container', 'container-height', 'mt-5', 'pt-5');
    document.body.appendChild(container);

    const row = document.createElement('div');
    row.classList.add('row', 'justify-content-center');
    container.appendChild(row);

    const formCol = document.createElement('div');
    formCol.classList.add('col-md-8', 'mb-4');
    row.appendChild(formCol);

    const formGroups = [
        { label: 'Név', id: 'inputItemName', type: 'text', placeholder: 'Kerékpár neve' },
        { label: 'Leírás', id: 'formControlTextarea1', type: 'textarea', placeholder: 'Kerékpár leírása' },
        { label: 'Értékelés', id: 'inputRate', type: 'text', placeholder: 'Értékelés' },
        { label: 'Ár', id: 'newItemPrice', type: 'text', placeholder: 'Ár' }
    ];

    formGroups.forEach(group => {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        
        const label = document.createElement('label');
        label.setAttribute('for', group.id);
        label.textContent = group.label;
        formGroup.appendChild(label);
        
        let input;
        if (group.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 5;
        } else {
            input = document.createElement('input');
            input.type = group.type;
        }
        input.classList.add('form-control');
        input.id = group.id;
        input.placeholder = group.placeholder;
        formGroup.appendChild(input);
        
        formCol.appendChild(formGroup);
    });

    const fileGroup = document.createElement('div');
    fileGroup.classList.add('form-group');
    
    const fileLabel = document.createElement('label');
    fileLabel.setAttribute('for', 'img');
    fileLabel.textContent = 'Kép';
    fileGroup.appendChild(fileLabel);
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'img';
    fileInput.name = 'img';
    fileInput.accept = 'image/*';
    fileGroup.appendChild(fileInput);
    
    formCol.appendChild(fileGroup);
    
    const addButton = document.createElement('button');
    addButton.classList.add('btn', 'btn-primary', 'btn-block');
    addButton.textContent = 'Beszúrás';
    addButton.addEventListener('click', function() {
        alert('Tétel hozzáadva!');
    });
    formCol.appendChild(addButton);

    const alertDiv = document.createElement('div');
    alertDiv.id = 'addedAlert';
    alertDiv.classList.add('mt-2');
    formCol.appendChild(alertDiv);

    // Footer
    const footer = document.createElement('footer');
    footer.classList.add('page-footer', 'font-small', 'text-center', 'py-3');
    footer.textContent = '© 2025 Szerzői jogok';
    document.body.appendChild(footer);
});
