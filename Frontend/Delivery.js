const generateDeliveryForm = () => {
    const body = document.body;
    body.style.fontFamily = "Arial, sans-serif";
    body.style.backgroundColor = "#f4f4f4";
    body.style.margin = "0";
    body.style.padding = "20px";

    const header = document.createElement("header");
    header.style.textAlign = "center";
    header.style.marginBottom = "20px";
    header.innerHTML = "<h1>Szállítási Információk</h1>";
    body.appendChild(header);

    const main = document.createElement("main");
    const deliveryContainer = document.createElement("div");
    deliveryContainer.style.display = "flex";
    deliveryContainer.style.flexDirection = "column";
    deliveryContainer.style.alignItems = "center";

    const form = document.createElement("form");
    form.className = "delivery-form";
    form.style.backgroundColor = "#fff";
    form.style.padding = "20px";
    form.style.borderRadius = "10px";
    form.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    form.style.width = "100%";
    form.style.maxWidth = "600px";

    form.innerHTML = `
        <h2>Szállítási Adatok</h2>
        ${createInputField("name", "Név", "text")}
        ${createInputField("email", "Email cím", "email")}
        ${createInputField("phone", "Telefonszám", "text")}
        ${createInputField("address", "Cím", "text")}
        ${createInputField("city", "Város", "text")}
        ${createInputField("postalCode", "Irányítószám", "text")}
        ${createInputField("country", "Ország", "text")}
        <div class="form-group">
            <button type="submit" style="width:100%; padding:10px; background-color:#007bff; color:#fff; border:none; border-radius:5px; cursor:pointer;">Rendelés Leadása</button>
        </div>
    `;
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Rendelés sikeresen leadva!");
    });

    deliveryContainer.appendChild(form);
    main.appendChild(deliveryContainer);
    body.appendChild(main);
};

const createInputField = (id, label, type) => {
    return `
        <div class="form-group" style="margin-bottom: 15px;">
            <label for="${id}" style="display: block; margin-bottom: 5px;">${label}</label>
            <input type="${type}" id="${id}" name="${id}" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
        </div>
    `;
};

// Futtatás
generateDeliveryForm();
