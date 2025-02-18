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
        { name: 'Kezdőlap', link: 'home.html' },
        { name: 'Kategóriák', link: 'category.html' },
        { name: 'Bolt', link: 'shop.html', active: true },
        { name: 'Kapcsolat', link: 'contact.html' }
    ];

    pages.forEach(page => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        if (page.active) li.classList.add('active');
        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = page.link;
        a.textContent = page.name;
        li.appendChild(a);
        ulNav.appendChild(li);
    });

    document.body.appendChild(header);

    // Cart Container
    const container = document.createElement('div');
    container.classList.add('container', 'mt-5', 'pt-5');
    document.body.appendChild(container);

    const row = document.createElement('div');
    row.classList.add('row', 'justify-content-center');
    container.appendChild(row);

    const col = document.createElement('div');
    col.classList.add('col-12');
    row.appendChild(col);

    const cartHeader = document.createElement('h3');
    cartHeader.textContent = 'A kosarad';
    col.appendChild(cartHeader);

    const cartItemsDiv = document.createElement('div');
    cartItemsDiv.id = 'cartItems';
    col.appendChild(cartItemsDiv);

    const clearButton = document.createElement('button');
    clearButton.classList.add('btn', 'btn-danger', 'mr-2');
    clearButton.textContent = 'Tételek eltávolítása';
    clearButton.addEventListener('click', clearBasket);
    col.appendChild(clearButton);

    const proceedButton = document.createElement('a');
    proceedButton.classList.add('btn', 'btn-success');
    proceedButton.href = 'delivery.html';
    proceedButton.textContent = 'Tovább a szállításhoz';
    col.appendChild(proceedButton);

    // Footer
    const footer = document.createElement('footer');
    footer.classList.add('page-footer', 'font-small', 'text-center', 'py-3');
    footer.textContent = '© 2025 Szerzői jogok';
    document.body.appendChild(footer);

    // Functions
    function generateTable() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsDiv.innerHTML = '';

        if (cart.length === 0) {
            cartItemsDiv.innerHTML = "<p>A kosár üres.</p>";
        } else {
            let table = document.createElement('table');
            table.classList.add('table');

            let thead = document.createElement('thead');
            let trHead = document.createElement('tr');
            ['Termék neve', 'Méret', 'Szín', 'Mennyiség', 'Ár'].forEach(text => {
                let th = document.createElement('th');
                th.textContent = text;
                trHead.appendChild(th);
            });
            thead.appendChild(trHead);
            table.appendChild(thead);

            let tbody = document.createElement('tbody');
            cart.forEach(item => {
                let tr = document.createElement('tr');
                ['name', 'size', 'color', 'quantity', 'price'].forEach(prop => {
                    let td = document.createElement('td');
                    td.textContent = item[prop];
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);
            cartItemsDiv.appendChild(table);
        }
    }

    function clearBasket() {
        localStorage.removeItem('cart');
        generateTable();
        alert('A kosár kiürítve!');
    }

    generateTable();
});
