const speedMobs = "Zombies, Skeletons, Creepers, Spiders, Endermen, Witches, Silverfish, Stray, Husk, Drowned, Wither Skeletons, Piglin Brutes";
const armorMobs = "Zombies, Skeletons, Creepers, Spiders, Endermen, Witches, Silverfish, Stray, Husk, Drowned, Wither Skeletons, Piglin Brutes, Evokers, Vindicators, Pillagers, Ravagers, Breeze, Hoglins, Piglins, Zoglins";
const attackMobs = "Zombies, Skeletons, Creepers, Spiders, Endermen, Witches, Silverfish, Stray, Husk, Drowned, Wither Skeletons, Piglin Brutes, Evokers, Vindicators, Pillagers, Ravagers, Breeze, Hoglins, Piglins, Zoglins, Phantoms";

const boardsData = [
    { day: 0,   stats: [{ name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325"] }] },
    { day: 5,   stats: [{ name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325", "0.35"] }, { name: "Attack", tooltip: attackMobs, values: ["+1"] }] },
    { day: 10,  stats: [{ name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325", "0.35", "0.4"] }, { name: "Attack", tooltip: attackMobs, values: ["+1", "+3"] }, { name: "Armor", tooltip: armorMobs, values: ["2"] }] },
    { day: 25,  stats: [{ name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325", "0.35", "0.4"] }, { name: "Attack", tooltip: attackMobs, values: ["+1", "+3", "+5"] }, { name: "Armor", tooltip: armorMobs, values: ["2", "5"] }] },
    { day: 50,  stats: [{ name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325", "0.35", "0.4"] }, { name: "Attack", tooltip: attackMobs, values: ["+1", "+3", "+5"] }, { name: "Armor", tooltip: armorMobs, values: ["2", "5", "8"] }] }
];

const modalData = {
    1: {
        icon: 'github/page/1.svg',
        title: 'Deepslate Age',
        description: `<h2 style="margin-top: 0;">Deepslate Age</h2><p>Stone tools now require <strong>Deepslate</strong>. This pushes you deeper into the world for basic progression, making the transition out of the "Wood Age" a slower but conscious descent.</p><table class="modal-table"><tr><td><img src="github/examples/stone_tool_materials.gif"> <img src="github/examples/stone_tool_materials.gif"> <img src="github/examples/stone_tool_materials.gif"><br><img src="github/examples/air.png"> <img src="github/examples/stick.png"> <img src="github/examples/air.png"><br><img src="github/examples/air.png"> <img src="github/examples/stick.png"> <img src="github/examples/air.png"></td><td><img src="github/examples/crafting_arrow.gif"></td><td><img src="github/examples/stone_tool.png"></td></tr></table>`
    },
    2: {
        icon: 'github/page/2.svg',
        title: 'The Price of Light',
        description: `<h2 style="margin-top: 0;">The Price of Light</h2><p>Torches require iron to craft. Lighting up spaces permanently is no longer a "spam" mechanic, but a strategic decision that demands resource management.</p><table class="modal-table"><tr><td><img src="github/examples/air.png"> <img src="github/examples/torch_nuggets.gif"> <img src="github/examples/air.png"><br><img src="github/examples/air.png"> <img src="github/examples/coal.gif"> <img src="github/examples/air.png"><br><img src="github/examples/air.png"> <img src="github/examples/stick.png"> <img src="github/examples/air.png"></td><td><img src="github/examples/crafting_arrow.gif"></td><td><img src="github/examples/torches.gif"></td></tr></table><div class="tweak-box"><strong>Balancing Tweaks:</strong></div><ul class="tweaks"><li><strong>Primitive Lighting:</strong> Holding right-click with sticks on <a href="https://github.com/lluckymou/foundations/blob/main/data/foundations/tags/block/friction_surfaces.json" target="_blank" style="text-decoration:none;color:unset">most blocks</a> has a 66% chance of creating fire for early game exploration.</li><li><strong>No Free Lunch:</strong> Campfires are crafted unlit by default.</li></ul>`
    },
    3: {
        icon: 'github/page/3.svg',
        title: 'Industrial Refinement',
        description: `<h2 style="margin-top: 0;">Industrial Refinement</h2><p>Standard furnaces yield only <strong>nuggets</strong> from ores. Smelting full ingots is gated behind the <strong>Blast Furnace</strong>, giving a clear purpose to mid-tier machinery and a sense of technological progression.</p><table class="modal-table"><tr><td><img src="github/examples/raw.gif"></td><td><img src="github/examples/furnace_flame.gif"></td><td><img src="github/examples/nuggets.gif"></td></tr></table>`
    },
    4: {
        icon: 'github/page/4.svg',
        title: 'Earned Rest',
        description: `<h2 style="margin-top: 0;">Earned Rest</h2><p>Beds require string and drop wool when broken. Setting a spawn point and skipping nights and combat is an investment, not a mindless convenience you can easily relocate.</p><table class="modal-table"><tr><td><img src="github/examples/string.png"> <img src="github/examples/string.png"> <img src="github/examples/string.png"><br><img src="github/examples/wool.gif"> <img src="github/examples/wool.gif"> <img src="github/examples/wool.gif"><br><img src="github/examples/planks.gif"> <img src="github/examples/planks.gif"> <img src="github/examples/planks.gif"></td><td><img src="github/examples/crafting_arrow.gif"></td><td><img src="github/examples/beds.gif"></td></tr></table>`
    },
    5: {
        icon: 'github/page/5.svg',
        title: 'Dynamic Hostility',
        description: `<h2 style="margin-top: 0;">Dynamic Hostility</h2><p>Hostile mobs are no longer static. They feature randomized RNG attribute changes that scale with your world's age, making every encounter slightly unpredictable and dangerous.</p><div class="tweak-box"><strong>Balancing Tweak:</strong></div><ul class="tweaks"><li><strong>Easier Retrieval:</strong> Items dropped upon a player's death emit a glowing outline when nearby.</li></ul>`
    }
};

const modalOverlay = document.getElementById('modalOverlay');
const modalPaper = document.getElementById('modalPaper');
const closeBtn = document.getElementById('closeBtn');
const modalIcon = document.getElementById('modalIcon');
const modalDescription = document.getElementById('modalDescription');
const hanziItems = document.querySelectorAll('.hanzi li');

function openModal(id) {
    const data = modalData[id];
    if (!data) return;

    modalIcon.src = data.icon;
    modalDescription.innerHTML = data.description;

    const scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    modalOverlay.classList.add('active');
    modalPaper.classList.add('active');

    if (id === '5' || id === 5) {
        createDraggablePlates();
    }
}

function closeModal() {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    modalOverlay.classList.remove('active');
    modalPaper.classList.remove('active');
    modalPaper.scrollTop = 0;
    document.getElementById('metalPlatesStack').innerHTML = '';
    
    // Remove todos os listeners dos plates
    activeListeners.forEach(cleanup => cleanup());
    activeListeners = [];
}

function renderPlateHTML(board) {
    const headers = board.stats.map(s => `<th title="${s.tooltip}">${s.name}</th>`).join('');
    
    const values = board.stats.map(s => {
        const valuesHtml = s.values.map((v, index) => {
            const titleAttr = index > 0 ? 'title="Indicated with a visible particle effect"' : '';
            return `<span class="stat-value" ${titleAttr}>${v}</span>`;
        }).join('');
        
        return `<td><div class="stat-values">${valuesHtml}</div></td>`;
    }).join('');

    return `
        <div class="plate-title"><div>Day ${board.day}</div><div>日</div></div>
        <table class="plate-stats">
            <tr>${headers}</tr>
            <tr>${values}</tr>
        </table>
    `;
}

let activeListeners = [];

function createDraggablePlates() {
    const stack = document.getElementById('metalPlatesStack');
    stack.innerHTML = '';
    
    // Limpa listeners anteriores
    activeListeners.forEach(cleanup => cleanup());
    activeListeners = [];

    const isMobile = window.innerWidth < 900;

    if (isMobile) {
        stack.style.top = 'auto';
        stack.style.bottom = '8rem';
        stack.style.left = '3rem';
        stack.style.right = 'auto';
    } else {
        stack.style.top = '9rem';
        stack.style.right = '30rem';
        stack.style.left = 'auto';
        stack.style.bottom = 'auto';
        stack.style.transform = 'none';
    }

    let currentTopZ = 1000;

    boardsData.forEach((board, i) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'metal-plate-wrapper';
        wrapper.style.position = 'absolute';
        wrapper.style.zIndex = 1000 + (boardsData.length - 1 - i);

        const plate = document.createElement('div');
        plate.className = 'metal-plate';
        plate.innerHTML = renderPlateHTML(board);

        wrapper.appendChild(plate);
        stack.appendChild(wrapper);

        const offset = i * 8;
        const startRot = Math.random() * 20 - 10;
        const rot = Math.random() * 6 - 3;

        wrapper.style.setProperty('--start-y', `-80px`);
        wrapper.style.setProperty('--start-rot', `${startRot}deg`);
        wrapper.style.setProperty('--x', `${offset}px`);
        wrapper.style.setProperty('--y', `${offset}px`);
        wrapper.style.setProperty('--rot', `${rot}deg`);
        wrapper.style.setProperty('--delay', `${(boardsData.length - 1 - i) * 0.3}s`);

        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let startTranslateX = 0;
        let startTranslateY = 0;

        const startDrag = (clientX, clientY) => {
            isDragging = true;

            startX = clientX;
            startY = clientY;

            const computed = window.getComputedStyle(wrapper);
            const matrix = new DOMMatrix(computed.transform);
            startTranslateX = matrix.e || 0;
            startTranslateY = matrix.f || 0;

            wrapper.style.opacity = '1';
            wrapper.style.animation = 'none';
            wrapper.style.transition = 'transform 0.1s ease-out';
            wrapper.style.transform = `translate(${startTranslateX}px, ${startTranslateY}px) rotate(0deg) scale(1)`;

            currentTopZ += 10;
            wrapper.style.zIndex = currentTopZ;
        };

        const moveDrag = (clientX, clientY) => {
            if (!isDragging) return;
            const dx = clientX - startX;
            const dy = clientY - startY;
            wrapper.style.transform = `translate(${startTranslateX + dx}px, ${startTranslateY + dy}px) rotate(0deg) scale(1)`;
        };

        const endDrag = () => {
            if (!isDragging) return;
            isDragging = false;
            wrapper.style.transition = 'transform 0.18s ease';
        };

        wrapper.addEventListener('mousedown', e => {
            if (e.button !== 0) return;
            e.preventDefault();
            startDrag(e.clientX, e.clientY);
        });

        const onMouseMove = e => moveDrag(e.clientX, e.clientY);
        const onMouseUp = () => endDrag();

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        // Touch handlers que serão adicionados dinamicamente
        let activeTouchMove = null;
        let activeTouchEnd = null;

        wrapper.addEventListener('touchstart', e => {
            if (e.touches.length !== 1) return;
            e.preventDefault();
            startDrag(e.touches[0].clientX, e.touches[0].clientY);
            
            // Cria e adiciona listeners SOMENTE quando começar a arrastar
            activeTouchMove = (moveEvent) => {
                if (moveEvent.touches.length !== 1) return;
                moveEvent.preventDefault();
                moveDrag(moveEvent.touches[0].clientX, moveEvent.touches[0].clientY);
            };
            
            activeTouchEnd = () => {
                endDrag();
                // Remove listeners imediatamente quando soltar
                if (activeTouchMove) {
                    document.removeEventListener('touchmove', activeTouchMove);
                    document.removeEventListener('touchend', activeTouchEnd);
                    document.removeEventListener('touchcancel', activeTouchEnd);
                    activeTouchMove = null;
                    activeTouchEnd = null;
                }
            };
            
            document.addEventListener('touchmove', activeTouchMove, { passive: false });
            document.addEventListener('touchend', activeTouchEnd);
            document.addEventListener('touchcancel', activeTouchEnd);
        }, { passive: false });

        // Adiciona função de cleanup para este plate
        activeListeners.push(() => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            // Remove touch listeners se ainda estiverem ativos
            if (activeTouchMove) {
                document.removeEventListener('touchmove', activeTouchMove);
                document.removeEventListener('touchend', activeTouchEnd);
                document.removeEventListener('touchcancel', activeTouchEnd);
            }
        });
    });
}

hanziItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        openModal(modalId);
    });
});

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
modalPaper.addEventListener('click', e => e.stopPropagation());

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

function updateVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--real-vh', `${vh}px`);
}
window.addEventListener('resize', updateVH);
updateVH();