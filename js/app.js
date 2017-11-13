var subMenu = document.getElementsByClassName('sub-menu');
for (var i = 0; i < subMenu.length; i++) {
    subMenu[i].addEventListener('click', showMenu);
};

function showMenu() {
    // alert("hola");
    // console.log(this) //Reference element that's been clicked.
    var listMenu = this.getElementsByClassName('itemList')[0];
    // console.log(listMenu);

    if (listMenu.classList.contains('hide')) {
        // console.log('ok');
        listMenu.classList.remove('hide');
        listMenu.classList.add('show');
        console.log(listMenu);
    } else {
        listMenu.classList.remove('show');
        listMenu.classList.add('hide');
        console.log(listMenu);
    }
};