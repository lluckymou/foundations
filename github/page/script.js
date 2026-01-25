const speedMobs = "Zombies, Skeletons, Creepers, Spiders, Endermen, Witches, Silverfish, Stray, Husk, Drowned, Wither Skeletons, Piglin Brutes";
const armorMobs = "Zombies, Skeletons, Creepers, Spiders, Endermen, Witches, Silverfish, Stray, Husk, Drowned, Wither Skeletons, Piglin Brutes, Evokers, Vindicators, Pillagers, Ravagers, Breeze, Hoglins, Piglins, Zoglins";
const attackMobs = "Zombies, Skeletons, Creepers, Spiders, Endermen, Witches, Silverfish, Stray, Husk, Drowned, Wither Skeletons, Piglin Brutes, Evokers, Vindicators, Pillagers, Ravagers, Breeze, Hoglins, Piglins, Zoglins, Phantoms";

const boardsData = [
    {
        day: 0,
        stats: [
            { name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325"] }
        ]
    },
    {
        day: 5,
        stats: [
            { name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325", "0.35"] },
            { name: "Attack", tooltip: attackMobs, values: ["+1", "+2", "+3"] }
        ]
    },
    {
        day: 10,
        stats: [
            { name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325", "0.35", "0.4"] },
            { name: "Attack", tooltip: attackMobs, values: ["+3", "+4", "+5"] },
            { name: "Armor", tooltip: armorMobs, values: ["+1", "+2", "+3"] }
        ]
    },
    {
        day: 25,
        stats: [
            { name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325", "0.35", "0.4", "0.425"] },
            { name: "Attack", tooltip: attackMobs, values: ["+5", "+6", "+7"] },
            { name: "Armor", tooltip: armorMobs, values: ["+3", "+4", "+5"] }
        ]
    },
    {
        day: 50,
        stats: [
            { name: "Speed", tooltip: speedMobs, values: ["0.3", "0.325", "0.35", "0.4", "0.425", "0.45"] },
            { name: "Attack", tooltip: attackMobs, values: ["+7", "+8", "+9", "+10"] },
            { name: "Armor", tooltip: armorMobs, values: ["+6", "+7", "+8"] }
        ]
    }
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
        description: `<h2 style="margin-top: 0;">Dynamic Hostility</h2><p>Hostile mobs are no longer static. They feature randomized RNG attribute changes that scale with your world's age, making every encounter slightly unpredictable and dangerous.</p><div class="tweak-box"><strong>Balancing Tweak:</strong></div><ul class="tweaks"><li><strong>Mercy:</strong> Items dropped upon a player's death emit a glowing outline when nearby.</li></ul>`
    },
    6: {
        icon: 'github/page/de.svg',
        title: 'Guide',
        description: `<h2 style="margin-top: 0;">Guide</h2>
            <p>Foundations brings back the raw survival tension of early Minecraft. This isn't a step-by-step tutorial but practical tips to help you survive and thrive without losing the discovery. Play at least on Normal difficulty for the real experience.</p>

            <h3>Day 1: Scavenge & Shelter</h3>
            <p>Your first night is brutal: no cheap torches, no easy stone. Focus on basics and smart movement.</p>
            <ul>
                <li><strong>Punch trees immediately</strong>: Get ~64 logs to craft sticks (your emergency light source) and wooden tools.</li>
                <li><strong>Explore while foraging</strong>: Hunt animals for food and leather. Cows = quick helmet. Prioritize surface structures: ruined portals, shipwrecks, villages.</li>
                <li><strong>Use sticks for quick light</strong>: Hold right-click on most blocks to start fires (66% chance). Explore shallow caves/ravines safely.</li>
                <li><strong>Shelter fast</strong>: Dirt hut or hill carve-out. Place furnace inside for warmth and dim light (you can convert some of your wood to charcoal and burn cobblestone for example). Seal the entrance.</li>
                <li><strong>Night strategy</strong>: Stay inside and listen for spiders as they're your source of strings (and sleep).</li>
                <li>3 strings + wool = bed. Sleep to skip dangerous nights. But remember, oversleeping without gearing up may make your world unnecessarily difficult.</li>
            </ul>

            <h3>Early Power Moves: Villages & Structures</h3>
            <p>Exploration pays off huge in the first days.</p>
            <ul>
                <li><strong>Villages</strong>: Free beds, crops, iron golems (fast torches). Blast furnaces skip nugget grind hell. Settle nearby for safety.</li>
                <li><strong>Shipwrecks / Mineshafts</strong>: Chests often have nuggets, coal, or even iron tools.</li>
            </ul>

            <h3>Progression Milestones</h3>
            <ul>
                <li><strong>Days 0-5</strong>: From wooden to iron tools/sword, 20+ torches, bed, basic furnace running.</li>
                <li><strong>Days 5-10</strong>: Full iron armor, shield, and blast furnace.</li>
                <li><strong>Days 10-25</strong>: Diamond tools/sword, enchanting setup, deep cave runs.</li>
                <li><strong>Days 25-50+</strong>: Netherite upgrades, beacons, potions - mobs are at peak threat.</li>
            </ul>

            <h3>Combat Shift: Shields Become Essential (Day 5+)</h3>
            <p>Mobs get faster, hit harder, and tank more as days pass. Spam-clicking won't cut it anymore.</p>
            <ul>
                <li><strong>Early days (0-5)</strong>: Kite with distance. Use pillars and terrain against groups.</li>
                <li><strong>Day 5 onward: Shield meta</strong>
                    <ul>
                        <li>Right-click to block almost all melee damage.</li>
                        <li>1v1: Block - hit - backpedal.</li>
                        <li>Groups: Funnel enemies into tight spaces and block the front one.</li>
                    </ul>
                </li>
                <li><strong>Late game</strong>: Sharpness, Protection enchants + potions turn swarms manageable (but you have to earn it).</li>
            </ul>

            <h3>Final Mindset Tips</h3>
            <ul>
                <li>Dread is intentional: the first real torch or safe house hits different.</li>
                <li>Death isn't the end: glowing items on ground help recovery.</li>
            </ul>
            <p>Build your legend one earned night at a time. Good luck out there!</p>`
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

            wrapper.classList.add('is-dragging');

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

            wrapper.classList.remove('is-dragging');

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

        let activeTouchMove = null;
        let activeTouchEnd = null;

        wrapper.addEventListener('touchstart', e => {
            if (e.touches.length !== 1) return;
            e.preventDefault();
            startDrag(e.touches[0].clientX, e.touches[0].clientY);
            
            activeTouchMove = (moveEvent) => {
                if (moveEvent.touches.length !== 1) return;
                moveEvent.preventDefault();
                moveDrag(moveEvent.touches[0].clientX, moveEvent.touches[0].clientY);
            };
            
            activeTouchEnd = () => {
                endDrag();
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

        activeListeners.push(() => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

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

    let startX = 0;
    let isSwiping = false;

    item.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isSwiping = false;
    }, { passive: true });

    item.addEventListener('touchmove', e => {
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;

        if (diff > 30) { 
            isSwiping = true;
            item.classList.add('is-swiped');
            
            hanziItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('is-swiped');
            });
        }

        if (diff < -30) {
            isSwiping = true;
            item.classList.remove('is-swiped');
        }
    }, { passive: true });
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