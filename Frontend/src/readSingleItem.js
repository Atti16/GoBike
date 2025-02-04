// this file will load given item from JSON file, 
// click on "Read more" will pass ID by localstorage of an item. 5 dot from JS task
var data;
var id;
function loadItemToShow() {
    readTextFile("../bikesInfo.json", function(text){
        data = JSON.parse(text);
        console.log(data);
        id = JSON.parse(localStorage.getItem("itemToShow"));
        generateItemOnPage();
    });
}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
function generateItemOnPage() {
    var str = '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
                    <div class="carousel-inner">';
                    for( var j = 0;j<data[id].imgSufix.length;j++){
                        if (j == 0) {
                            str += '<div class="carousel-item active">';
                        } else {
                            str += '<div class="carousel-item">';
                        }
                        str += '<img class="d-block w-100" src="../assets/images/'+data[id].name+data[id].imgSufix[j]+'.jpg" alt="'+j+' slide"/>\
                        </div>';
                    }
                    str += '</div>\
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
                    <span class="sr-only">Previous</span>\
                    </a>\
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">\
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>\
                    <span class="sr-only">Next</span>\
                    </a>\
                </div>';
    document.getElementById("dynamicItemPhotos").innerHTML = str;
    document.getElementById("dynamicItemName").innerHTML = data[id].name;
    document.getElementById("dynamicItemDescription").innerHTML = data[id].description;
    document.getElementById("dynamicItemRate").innerHTML = data[id].rate;
    document.getElementById("dynamicItemPrice").innerHTML = data[id].price;
    
    var actionStr = '<a class="btn btn-secondary btn-block mb-3" onclick="add(\''+data[id].name+'\', '+data[id].price+')">Add to Cart</a>';
    document.getElementById("dynamicItemAction").innerHTML = actionStr;
}
function loadItemDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    // Példa adatok (ezt később lecserélheted valós adatokra)
    const items = [
        { id: 1, name: "Marin Bolinas Ridge 1", price: "$599", rating: 4, image: "assets/images/Marin Bolinas Ridge 1 Blue.jpg" },
        { id: 2, name: "Marin Bolinas Ridge 2", price: "$699", rating: 4.5, image: "assets/images/Marin Bolinas Ridge 2 Black.jpg" },
        { id: 3, name: "Marin Gestalt", price: "$1099", rating: 5, image: "assets/images/Marin Gestalt Blue.jpg" },
        { id: 4, name: "Polygon Strattos S5 - Shimano 105", price: "$1299", rating: 5, image: "assets/images/Polygon Strattos S5 - Shimano 105.jpg" },
        { id: 5, name: "Marin Kentfield CS2 ST", price: "$769", rating: 4.5, image: "assets/images/Marin Kentfield CS2 ST Grey.jpg" },
        { id: 6, name: "Polygon Sierra Deluxe Sport", price: "$599", rating: 4, image: "assets/images/Polygon Sierra Deluxe Sport.jpg" },
        { id: 7, name: "Polygon Mt Bromo N7", price: "$4399", rating: 5, image: "assets/images/Polygon Mt Bromo N7.jpg" },
        { id: 8, name: "Polygon Mt Bromo N8", price: "$5999", rating: 5, image: "assets/images/Polygon Mt Bromo N8.jpg" }
    ];

    const item = items.find(i => i.id == itemId);

    if (item) {
        document.getElementById('itemImage').src = item.image;
        document.getElementById('itemName').innerText = item.name;
        document.getElementById('itemPrice').innerText = item.price;
        document.getElementById('itemRating').innerText = item.rating;
    }
}
