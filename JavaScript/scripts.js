document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('studio');
menu.addEventListener('mouseleave', function() {
    menu.selectedIndex = -1;
    });
});