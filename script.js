document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.getElementById('links-container');
    const addLinkBtn = document.getElementById('add-link-btn');

    addLinkBtn.addEventListener('click', () => {
        const url = prompt('Enter the URL:');
        const description = prompt('Enter the link description:');

        if (url && description) {
            const linkElement = document.createElement('a');
            linkElement.href = url;
            linkElement.textContent = description;
            linkElement.target = '_blank';  // Open link in a new tab

            linksContainer.appendChild(linkElement);
        } else {
            alert('Both URL and description are required.');
        }
    });
});
