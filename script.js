document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');

    // Filter Logic
    function filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;

        recipeCards.forEach(card => {
            const title = card.querySelector('.recipe-title').innerText.toLowerCase();
            const category = card.dataset.category;
            
            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = activeCategory === 'all' || category === activeCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Search Listener
    searchInput.addEventListener('input', filterRecipes);

    // Category Listener
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterRecipes();
        });
    });
});