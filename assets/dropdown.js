document.addEventListener('DOMContentLoaded', () => {
    const menuTitles = document.querySelectorAll('.menu_title');

    function toggleDropdown(dropdown, arrow) {
        const isOpen = dropdown.classList.contains('open');
        
        closeAllDropdowns();

        if (!isOpen) {
            dropdown.style.height = 'auto';
            const scrollHeight = dropdown.scrollHeight + "px";
            
            dropdown.style.height = '0px';
            setTimeout(() => {
                dropdown.classList.add('open');
                dropdown.style.height = scrollHeight;
                arrow.classList.add('rotate');
            }, 10);
        }
    }

    function closeAllDropdowns() {
        document.querySelectorAll('.radio_group').forEach(dropdown => {
            const arrow = dropdown.closest('.option_radio').querySelector('.fa-chevron-down');
            if (dropdown.classList.contains('open')) {
                dropdown.style.height = '0px';
                dropdown.classList.remove('open');
                arrow.classList.remove('rotate');
            }
        });
    }

    menuTitles.forEach(menuTitle => {
        const arrow = menuTitle.closest('.option_radio').querySelector('.fa-chevron-down');
        const dropdown = menuTitle.closest('.option_radio').querySelector('.radio_group');
        
        menuTitle.addEventListener('click', () => {
            toggleDropdown(dropdown, arrow);
        });
    });
});