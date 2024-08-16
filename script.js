function showPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    // Show the selected page
    document.getElementById('page' + pageNumber).style.display = 'flex';
}
