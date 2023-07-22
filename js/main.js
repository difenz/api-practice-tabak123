const list = document.querySelector('#list__items')
async function start() {
    try {
     const resp = await fetch('https://script.google.com/macros/s/AKfycbwMdPXSW-r70-qvTBTSztaMsV2PeMpd0lt16GskrU_N5uE0krzdR5b0ri5XdHEfhatC/exec?method=sellers_by_workshop')
        const data = await resp.json();
        console.log(data);
        render(data);
    } catch (err) {}
}


function render(sellers_by_workshop = []) {
    const html = sellers_by_workshop.map(toHTML).join('');
    list.innerHTML = html;
}

function toHTML(seller) {
    return `
    <li class="list__store">${seller.workshop}</li>
    <li class="list__item">${seller.seller}</li>
    `
}

start()