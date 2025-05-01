function showNotification() {
    document.getElementById('notificationPopup').style.display = 'block';

}

function closeNotification() {
    document.getElementById('notificationPopup').style.display = 'none';
}

function toggleMenu() {
    const menu = document.getElementById('sideMenu'); 
    menu.classList.toggle('open')
}