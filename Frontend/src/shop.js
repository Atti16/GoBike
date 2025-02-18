document.addEventListener("DOMContentLoaded", function() {
    // Header
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-md", "navbar-light", "fixed-top", "topnav");
    header.appendChild(nav);

    const brandLink = document.createElement("a");
    brandLink.classList.add("navbar-brand");
    brandLink.href = "home.html";
    brandLink.textContent = "Go-Bicikli";
    nav.appendChild(brandLink);

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("navbar-toggler");
    toggleButton.type = "button";
    toggleButton.setAttribute("data-toggle", "collapse");
    toggleButton.setAttribute("data-target", "#navbarNav");
    const toggleIcon = document.createElement("span");
    toggleIcon.classList.add("navbar-toggler-icon");
    toggleButton.appendChild(toggleIcon);
    nav.appendChild(toggleButton);

    const navbarCollapse = document.createElement("div");
    navbarCollapse.classList.add("collapse", "navbar-collapse");
    navbarCollapse.id = "navbarNav";
    nav.appendChild(navbarCollapse);

    const menuItems = [
        { name: "Főoldal", link: "home.html" },
        { name: "Kategóriák", link: "category.html" },
        { name: "Bolt", link: "shop.html" },
        { name: "Kapcsolat", link: "contact.html" }
    ];

    const ulNav = document.createElement("ul");
    ulNav.classList.add("navbar-nav", "mr-auto");
    navbarCollapse.appendChild(ulNav);

    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        const a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
        ulNav.appendChild(li);
    });

    document.body.appendChild(header);

    // Product Gallery
    const container = document.createElement("div");
    container.classList.add("container-fluid");
    document.body.appendChild(container);

    const title = document.createElement("h2");
    title.classList.add("pt-4", "pl-3");
    title.textContent = "Kerékpár galéria";
    container.appendChild(title);

    const row = document.createElement("div");
    row.classList.add("row", "justify-content-md-center", "w-90", "mx-auto");
    container.appendChild(row);

    const products = [
        { name: "Marin Bolinas Ridge 1", price: "$599", rating: 4, img: "assets/images/Marin Bolinas Ridge 1 Blue.jpg", id: 1 },
        { name: "Marin Bolinas Ridge 2", price: "$699", rating: 4.5, img: "assets/images/Marin Bolinas Ridge 2 Black.jpg", id: 2 },
        { name: "Marin Gestalt", price: "$1099", rating: 5, img: "assets/images/Marin Gestalt Blue.jpg", id: 3 },
        { name: "Polygon Strattos S5", price: "$1299", rating: 5, img: "assets/images/Polygon Strattos S5 - Shimano 105.jpg", id: 4 }
    ];

    products.forEach(product => {
        const col = document.createElement("div");
        col.classList.add("col-xs-10", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-3", "mb-4");

        const card = document.createElement("div");
        card.classList.add("card", "mx-auto", "text-center");

        const img = document.createElement("img");
        img.src = product.img;
        img.classList.add("card-img-top");
        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "pb-0");
        card.appendChild(cardBody);

        const title = document.createElement("h5");
        title.textContent = product.name;
        cardBody.appendChild(title);

        const price = document.createElement("h4");
        price.style.color = "#4CBB17";
        price.textContent = product.price;
        cardBody.appendChild(price);

        const rating = document.createElement("h5");
        const starImg = document.createElement("img");
        starImg.src = "assets/icons/star.png";
        starImg.style.height = "18px";
        rating.appendChild(starImg);
        rating.innerHTML += ` ${product.rating}`;
        cardBody.appendChild(rating);

        const button = document.createElement("a");
        button.classList.add("btn", "btn-secondary", "btn-block");
        button.href = `single-item.html?id=${product.id}`;
        button.textContent = "Tovább";
        cardBody.appendChild(button);

        col.appendChild(card);
        row.appendChild(col);
    });

    // Footer
    const footer = document.createElement("footer");
    footer.classList.add("page-footer", "font-small", "text-center", "py-3");
    footer.textContent = "© 2025 Szerzői jogok";
    document.body.appendChild(footer);
});
