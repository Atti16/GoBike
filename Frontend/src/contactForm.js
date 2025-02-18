document.addEventListener("DOMContentLoaded", function() {
    // Root element (body)
    const body = document.body;

    // Header Section
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-md', 'navbar-light', 'fixed-top', 'topnav');

    const aBrand = document.createElement('a');
    aBrand.classList.add('navbar-brand');
    aBrand.setAttribute('href', 'home.html');
    aBrand.textContent = 'Go-Bicikli';

    const button = document.createElement('button');
    button.classList.add('navbar-toggler');
    button.setAttribute('type', 'button');
    button.setAttribute('data-toggle', 'collapse');
    button.setAttribute('data-target', '#navbarNav');
    
    const span = document.createElement('span');
    span.classList.add('navbar-toggler-icon');
    button.appendChild(span);

    const divNavCollapse = document.createElement('div');
    divNavCollapse.classList.add('collapse', 'navbar-collapse');
    divNavCollapse.id = 'navbarNav';

    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'mr-auto');

    const navItems = [
        { text: 'Főoldal', href: 'home.html', active: true },
        { text: 'Kategóriák', href: 'category.html' },
        { text: 'Bolt', href: 'shop.html' },
        { text: 'Kapcsolat', href: 'contact.html', active: true }
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        if (item.active) {
            li.classList.add('active');
        }
        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.setAttribute('href', item.href);
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    divNavCollapse.appendChild(ul);
    nav.appendChild(aBrand);
    nav.appendChild(button);
    nav.appendChild(divNavCollapse);
    header.appendChild(nav);
    body.appendChild(header);

    // Main content container
    const container = document.createElement('div');
    container.classList.add('container', 'container-height', 'pt-4');

    const row = document.createElement('div');
    row.classList.add('row', 'justify-content-center');

    const col = document.createElement('div');
    col.classList.add('col-12', 'col-xs-10', 'col-sm-8', 'col-md-8', 'col-lg-8', 'col-xl-8', 'mb-4');

    const h3 = document.createElement('h3');
    h3.textContent = 'Írj nekünk üzenetet:';
    col.appendChild(h3);

    const form = document.createElement('form');

    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'exampleInputEmail1');
    emailLabel.textContent = 'Email cím';
    emailGroup.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.classList.add('form-control');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'exampleInputEmail1');
    emailInput.setAttribute('aria-describedby', 'emailHelp');
    emailInput.setAttribute('placeholder', 'Add meg az email címet');
    emailInput.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    emailGroup.appendChild(emailInput);

    const textareaGroup = document.createElement('div');
    textareaGroup.classList.add('form-group');

    const textareaLabel = document.createElement('label');
    textareaLabel.setAttribute('for', 'exampleFormControlTextarea1');
    textareaLabel.textContent = 'Leírás';
    textareaGroup.appendChild(textareaLabel);

    const textarea = document.createElement('textarea');
    textarea.classList.add('form-control');
    textarea.setAttribute('id', 'exampleFormControlTextarea1');
    textarea.setAttribute('rows', '5');
    textareaGroup.appendChild(textarea);

    const br = document.createElement('br');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.classList.add('btn', 'btn-primary', 'btn-block');
    submitButton.textContent = 'Küldés';
    submitButton.onclick = function() { alert('Küldés'); };

    form.appendChild(emailGroup);
    form.appendChild(textareaGroup);
    form.appendChild(br);
    form.appendChild(submitButton);
    col.appendChild(form);
    row.appendChild(col);
    container.appendChild(row);
    body.appendChild(container);

    // Footer
    const footer = document.createElement('footer');
    footer.classList.add('page-footer', 'font-small');

    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer-copyright', 'text-center', 'py-3');
    footerDiv.textContent = '© 2025 Copyright';

    footer.appendChild(footerDiv);
    body.appendChild(footer);
});
