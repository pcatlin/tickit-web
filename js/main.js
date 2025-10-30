document.addEventListener('DOMContentLoaded', () => {
    const copyrightElement = document.querySelector('.copyright')
    if (copyrightElement) {
        const currentYear = new Date().getFullYear()
        copyrightElement.innerHTML = `&copy; ${currentYear} TickIt`
    }
})