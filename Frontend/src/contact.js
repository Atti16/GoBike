document.addEventListener('DOMContentLoaded', function() {
    // Header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-md', 'navbar-light', 'fixed-top', 'topnav');
    header.appendChild(nav);

    const navBrand = document.createElement('a');
    navBrand.classList.add('navbar-brand');
    navBrand.href = 'home.html';
    navBrand.innerText = 'Go-Bicikli';
    nav.appendChild(navBrand);

    const button = document.createElement('button');
    button.classList.add('navbar-toggler');
    button.setAttribute('type', 'button');
    button.setAttribute('data-toggle', 'collapse');
    button.setAttribute('data-target', '#navbarNav');
    const span = document.createElement('span');
    span.classList.add('navbar-toggler-icon');
    button.appendChild(span);
    nav.appendChild(button);

    const div = document.createElement('div');
    div.classList.add('collapse', 'navbar-collapse');
    div.id = 'navbarNav';
    nav.appendChild(div);

    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'mr-auto');
    div.appendChild(ul);

    // Menu items
    const menuItems = [
        { name: 'Főoldal', link: 'home.html', active: false },
        { name: 'Kategóriák', link: 'category.html', active: false },
        { name: 'Bolt', link: 'shop.html', active: false },
        { name: 'Kapcsolat', link: 'contact.html', active: true }
    ];

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        if (item.active) li.classList.add('active');

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = item.link;
        a.innerText = item.name;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Shopping Cart Icon
    const ul2 = document.createElement('ul');
    ul2.classList.add('navbar-nav');
    div.appendChild(ul2);

    const li2 = document.createElement('li');
    li2.classList.add('nav-item');
    const a2 = document.createElement('a');
    a2.classList.add('nav-link');
    a2.href = 'shopping-cart.html';

    const img = document.createElement('img');
    img.src = 'assets/icons/shopping-cart-white.png';
    img.style.height = '30px';
    a2.appendChild(img);
    li2.appendChild(a2);
    ul2.appendChild(li2);

    // Contact Section
    const container = document.createElement('div');
    container.classList.add('container', 'pt-4');
    document.body.appendChild(container);

    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    const col1 = document.createElement('div');
    col1.classList.add('col-12', 'mb-4');
    row.appendChild(col1);

    const h2 = document.createElement('h2');
    h2.innerText = 'Vedd fel velünk a kapcsolatot:';
    col1.appendChild(h2);

    const span = document.createElement('span');
    span.innerText = 'A Go-Bicikli Shop-nál kiemelten fontos számunkra a kiváló ügyfélszolgálat. Kérjük, bátran vedd fel velünk a kapcsolatot e-mailben vagy telefonon, és mi mindent megteszünk, hogy segítsünk, amiben csak tudunk.';
    col1.appendChild(span);

    const ulContact = document.createElement('ul');
    ulContact.style.listStyleType = 'none';
    ulContact.style.display = 'inline';
    col1.appendChild(ulContact);

    const contactItems = [
        { icon: 'mail.png', text: 'E-mail: ', linkText: 'online űrlapunkat itt', link: 'contactForm.html' },
        { icon: 'phone-call.png', text: 'Telefon - Ügyfélszolgálat: (650) 272-3778 Hétfőtől Péntekig 9:00 - 17:00 PST' },
        { icon: 'location.png', text: 'Go-Bicikli Shop Inc. 2711 West Loker Ave, Carlsbad 92010, California, USA' }
    ];

    contactItems.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `assets/icons/${item.icon}`;
        img.classList.add('icon');
        li.appendChild(img);

        const text = document.createElement('span');
        text.innerText = item.text;
        li.appendChild(text);

        if (item.link) {
            const a = document.createElement('a');
            a.href = item.link;
            a.innerText = item.linkText;
            li.appendChild(a);
        }

        ulContact.appendChild(li);
    });

    // Working hours table
    const col2 = document.createElement('div');
    col2.classList.add('col-12', 'mb-4');
    row.appendChild(col2);

    const h3 = document.createElement('h3');
    h3.innerText = 'Ügyfélszolgálati Nyitvatartás';
    col2.appendChild(h3);

    const table = document.createElement('table');
    col2.appendChild(table);

    const hours = [
        { day: 'Hétfő', time: '9:00 - 17:00' },
        { day: 'Kedd', time: '9:00 - 17:00' },
        { day: 'Szerda', time: '9:00 - 17:00' },
        { day: 'Csütörtök', time: '9:00 - 17:00' },
        { day: 'Péntek', time: '9:00 - 17:00' },
        { day: 'Szombat/Vasárnap', time: 'Csak online rendelések. A rendelések feldolgozása akár 5 munkanapot is igénybe vehet.' }
    ];

    hours.forEach(hour => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerText = hour.day;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = hour.time;
        tr.appendChild(td2);

        table.appendChild(tr);
    });

    // Google Maps
    const col3 = document.createElement('div');
    col3.classList.add('col-12', 'mb-4');
    col3.style.minHeight = '350px';
    row.appendChild(col3);

    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.118929719889!2d-117.26114508520129!3d33.13223998086627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7498ffac23c3%3A0xca7213f56f0c4b5b!2s2711%20Loker%20Ave%20W%2C%20Carlsbad%2C%20CA%2092010%2C%20USA!5e0!3m2!1sen!2ssi!4v1648934455471!5m2!1sen!2ssi';
    iframe.style.border = '0';
    iframe.classList.add('col-12', 'h-100');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    col3.appendChild(iframe);

    // Newsletter
    const hr = document.createElement('hr');
    document.body.appendChild(hr);

    const newsletterDiv = document.createElement('div');
    newsletterDiv.classList.add('justify-content-md-center', 'pt-1');
    document.body.appendChild(newsletterDiv);

    const form = document.createElement('form');
    newsletterDiv.appendChild(form);

    const containerForm = document.createElement('div');
    containerForm.classList.add('container', 'justify-content-md-center');
    form.appendChild(containerForm);

    const rowForm = document.createElement('div');
    rowForm.classList.add('row', 'mb-3', 'text-center');
    containerForm.appendChild(rowForm);

    const h4Newsletter = document.createElement('h4');
    h4Newsletter.classList.add('col-12');
    h4Newsletter.innerText = 'Iratkozz fel hírlevelünkre a legfrissebb hírekért és ajánlatokért';
    rowForm.appendChild(h4Newsletter);

    const inputName = document.createElement('input');
    inputName.classList.add('form-control');
    inputName.setAttribute('placeholder', 'Név');
    inputName.setAttribute('name', 'name');
    inputName.required = true;
    rowForm.appendChild(inputName);

    const inputEmail = document.createElement('input');
    inputEmail.classList.add('form-control');
    inputEmail.setAttribute('placeholder', 'Email cím');
    inputEmail.setAttribute('name', 'mail');
    inputEmail.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    inputEmail.required = true;
    rowForm.appendChild(inputEmail);

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn', 'btn-primary', 'btn-block');
    submitButton.type = 'submit';
    submitButton.innerText = 'Feliratkozás';
    submitButton.onclick = function () { alert('Feliratkozás') };
    rowForm.appendChild(submitButton);

    // Footer
    const footer = document.createElement('footer');
    footer.classList.add('page-footer', 'font-small');
    document.body.appendChild(footer);

    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-copyright', 'text-center', 'py-3');
    footerContent.innerText = '© 2025 Copyright';
    footer.appendChild(footerContent);
});
