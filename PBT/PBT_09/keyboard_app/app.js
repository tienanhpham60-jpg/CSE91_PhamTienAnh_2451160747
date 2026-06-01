const images = [
    { id: 1, title: "Anh so 1", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500" },
    { id: 2, title: "Anh so 2", url: "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=500" },
    { id: 3, title: "Anh so 3", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500" },
    { id: 4, title: "Anh so 4", url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500" }
];

const commandsData = [
    { id: "go-1", text: "Go to Image 1" },
    { id: "go-2", text: "Go to Image 2" },
    { id: "go-3", text: "Go to Image 3" },
    { id: "go-4", text: "Go to Image 4" },
    { id: "play-slide", text: "Start Auto Slideshow" },
    { id: "stop-slide", text: "Stop Auto Slideshow" },
    { id: "toggle-dark", text: "Toggle Dark Mode" }
];

let currentIndex = 0;
let isSlideshowPlaying = false;
let slideshowInterval = null;
let filteredCommands = [...commandsData];
let selectedCommandIndex = 0;

const mainImg = document.getElementById("main-img");
const slideStatus = document.getElementById("slide-status");
const thumbGrid = document.getElementById("thumb-grid");
const commandModal = document.getElementById("command-modal");
const paletteInput = document.getElementById("palette-input");
const commandList = document.getElementById("command-list");

function initGallery() {
    thumbGrid.innerHTML = "";
    images.forEach((img, idx) => {
        const btn = document.createElement("button");
        btn.className = "thumb-item";
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-label", `Xem ảnh số ${img.id}: ${img.title}`);
        btn.setAttribute("tabindex", "0");

        const innerImg = document.createElement("img");
        innerImg.src = img.url;
        innerImg.alt = img.title;

        btn.appendChild(innerImg);
        thumbGrid.appendChild(btn);

        btn.addEventListener("click", () => {
            changeImage(idx);
        });
    });
    changeImage(0);
}

function changeImage(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    currentIndex = index;

    const allThumbs = document.querySelectorAll(".thumb-item");
    allThumbs.forEach((thumb, idx) => {
        if (idx === currentIndex) {
            thumb.classList.add("active");
            thumb.setAttribute("aria-selected", "true");
        } else {
            thumb.classList.remove("active");
            thumb.setAttribute("aria-selected", "false");
        }
    });

    mainImg.src = images[currentIndex].url;
    mainImg.alt = images[currentIndex].title;
}

function toggleSlideshow() {
    if (isSlideshowPlaying) {
        clearInterval(slideshowInterval);
        slideStatus.textContent = "Slideshow: OFF";
        isSlideshowPlaying = false;
    } else {
        slideStatus.textContent = "Slideshow: ON";
        isSlideshowPlaying = true;
        slideshowInterval = setInterval(() => {
            changeImage(currentIndex + 1);
        }, 2500);
    }
}

function renderCommands() {
    commandList.innerHTML = "";
    if (filteredCommands.length === 0) {
        const li = document.createElement("li");
        li.style.padding = "12px 15px";
        li.style.color = "#94a3b8";
        li.textContent = "Không tìm thấy lệnh nào.";
        commandList.appendChild(li);
        return;
    }

    filteredCommands.forEach((cmd, idx) => {
        const li = document.createElement("li");
        li.className = "command-item";
        li.textContent = cmd.text;
        li.setAttribute("role", "option");
        
        if (idx === selectedCommandIndex) {
            li.classList.add("selected");
            li.setAttribute("aria-selected", "true");
        } else {
            li.setAttribute("aria-selected", "false");
        }

        li.addEventListener("click", () => {
            executeCommand(cmd.id);
        });

        commandList.appendChild(li);
    });
}

function executeCommand(cmdId) {
    if (cmdId.startsWith("go-")) {
        const imgId = parseInt(cmdId.split("-")[1]);
        changeImage(imgId - 1);
    } else if (cmdId === "play-slide") {
        if (!isSlideshowPlaying) toggleSlideshow();
    } else if (cmdId === "stop-slide") {
        if (isSlideshowPlaying) toggleSlideshow();
    } else if (cmdId === "toggle-dark") {
        document.body.classList.toggle("dark-theme");
    }
    closePalette();
}

function openPalette() {
    commandModal.classList.remove("hidden");
    paletteInput.value = "";
    filteredCommands = [...commandsData];
    selectedCommandIndex = 0;
    renderCommands();
    paletteInput.focus();
}

function closePalette() {
    commandModal.classList.add("hidden");
}

window.addEventListener("keydown", function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openPalette();
        return;
    }

    if (!commandModal.classList.contains("hidden")) {
        if (e.key === "Escape") {
            closePalette();
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            selectedCommandIndex = (selectedCommandIndex + 1) % filteredCommands.length;
            renderCommands();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            selectedCommandIndex = (selectedCommandIndex - 1 + filteredCommands.length) % filteredCommands.length;
            renderCommands();
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (filteredCommands[selectedCommandIndex]) {
                executeCommand(filteredCommands[selectedCommandIndex].id);
            }
        }
        return;
    }

    if (e.key === "ArrowRight") {
        changeImage(currentIndex + 1);
    } else if (e.key === "ArrowLeft") {
        changeImage(currentIndex - 1);
    } else if (e.key === " ") {
        e.preventDefault();
        toggleSlideshow();
    } else if (e.key >= "1" && e.key <= "4") {
        const idx = parseInt(e.key) - 1;
        changeImage(idx);
    }
});

paletteInput.addEventListener("input", function(e) {
    const kw = e.target.value.toLowerCase().trim();
    filteredCommands = commandsData.filter(cmd => cmd.text.toLowerCase().includes(kw));
    selectedCommandIndex = 0;
    renderCommands();
});

initGallery();