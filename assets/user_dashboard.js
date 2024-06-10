// USER MENU DROPDOWN
const showAccountOptions = document.querySelector('.show_options');
const accountOptions = document.querySelector('.account_menu');

showAccountOptions.addEventListener('click', () => {
    accountOptions.classList.toggle('opacity_account_menu');
});




const openMenuButton = document.querySelector('.open_menu_button');


const toggleButton = document.querySelector('.onglet_mobile');
const userMenu = document.querySelector('.user_menu');
const dashboardContainer = document.querySelector('body');
const arrow = document.querySelector('.open_menu_button');

toggleButton.addEventListener('click', () => {
    dashboardContainer.classList.toggle('full_width');
    arrow.classList.toggle('rotate');
});








const campaignLabels = document.querySelectorAll('.campaign');
campaignLabels.forEach(campaignLabel => {
    if (screen.width < 768) {
        campaignLabel.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = ''; // Effacer le contenu texte des noeuds de type texte
            }
        });
    }
});








const inputUnivesity = document.querySelector('.input_university');
const universityDahsnboard = document.querySelector('.university_list_container');
const InputAutomation = document.querySelector('.input_automation');
const automationDashboard = document.querySelector('.campaign_list_container');

inputUnivesity.addEventListener('change', () => {  
    if (inputUnivesity.checked) {
        universityDahsnboard.classList.remove('hide_dashboard_content');
        automationDashboard.classList.add('hide_dashboard_content');
    }
});
InputAutomation.addEventListener('change', () => {
    if (InputAutomation.checked) {
        automationDashboard.classList.remove('hide_dashboard_content');
        universityDahsnboard.classList.add('hide_dashboard_content');    }
});

