// ===================== TERMS =====================
function displayTerms(data) {
    const container = document.getElementById("term-container");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(term => {

        const safeTitle = encodeURIComponent(term.title);

        container.innerHTML += `
            <div onclick="showTerm('${safeTitle}')"
                class="card bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition">

                <img src="${term.img}" class="w-full h-52 object-cover">

                <div class="p-5">
                    <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        ${term.category}
                    </span>

                    <h3 class="text-xl font-bold text-primary mt-3">
                        ${term.title}
                    </h3>

                    <p class="text-gray-600 mt-2">
                        Klik untuk lihat penerangan
                    </p>
                </div>
            </div>
        `;
    });
}

// FIX: safe decode
function showTerm(title) {
    const decodedTitle = decodeURIComponent(title);

    const term = scienceTerms.find(t => t.title === decodedTitle);
    if (!term) return;

    document.getElementById("modalTitle").innerText = term.title;
    document.getElementById("modalDescription").innerText = term.desc;
    document.getElementById("modalImage").src = term.img;

    document.getElementById("termModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("termModal").classList.add("hidden");
}


// ===================== QUIZ =====================
const quizData = [
    {
        question: "Apakah proses tumbuhan menghasilkan makanan?",
        options: ["Respirasi", "Fotosintesis", "Penyerapan"],
        answer: "Fotosintesis"
    },
    {
        question: "Organ pernafasan ikan ialah?",
        options: ["Peparu", "Insang", "Kulit"],
        answer: "Insang"
    },
    {
        question: "Magnet menarik bahan ____?",
        options: ["Kayu", "Plastik", "Besi"],
        answer: "Besi"
    },
    {
        question: "Cahaya boleh ____ apabila terkena cermin.",
        options: ["Dihantar", "Dipantulkan", "Hilang"],
        answer: "Dipantulkan"
    },
    {
        question: "Air berubah kepada wap melalui proses ____.",
        options: ["Penyejatan", "Pembekuan", "Peleburan"],
        answer: "Penyejatan"
    },
    {
        question: "Bunyi dihasilkan oleh ____.",
        options: ["Getaran", "Cahaya", "Angin"],
        answer: "Getaran"
    },
    {
        question: "Haiwan vertebrata mempunyai ____.",
        options: ["Sayap", "Tulang belakang", "Sisik sahaja"],
        answer: "Tulang belakang"
    },
    {
        question: "Tumbuhan menyerap air melalui ____.",
        options: ["Daun", "Akar", "Bunga"],
        answer: "Akar"
    },
    {
        question: "Tenaga daripada matahari ialah ____.",
        options: ["Tenaga suria", "Tenaga bunyi", "Tenaga kimia"],
        answer: "Tenaga suria"
    },
    {
        question: "Gas yang diperlukan untuk pernafasan ialah ____.",
        options: ["Karbon dioksida", "Oksigen", "Hidrogen"],
        answer: "Oksigen"
    }
];

// ===================== STATE =====================
let currentQuestion = 0;
let score = 0;
let answered = false;

// ===================== LOAD TERMS + QUIZ SAFETY =====================
document.addEventListener("DOMContentLoaded", () => {

    // FIX TERMS AUTO LOAD
    if (typeof scienceTerms !== "undefined") {
        displayTerms(scienceTerms);
    }

    // LOAD QUIZ FIRST QUESTION
    loadQuestion();
});


// ===================== LOAD QUESTION =====================
function loadQuestion() {
    const q = quizData[currentQuestion];
    answered = false;

    document.getElementById("question").innerText =
        `Soalan ${currentQuestion + 1}: ${q.question}`;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    q.options.forEach(opt => {
        optionsContainer.innerHTML += `
            <button onclick="selectAnswer(this, '${opt}')"
                class="p-4 border rounded-xl hover:bg-gray-100 text-left w-full">
                ${opt}
            </button>
        `;
    });

    document.getElementById("result").innerText = "";

    // FIX progress
    const progress = (currentQuestion / quizData.length) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
}


// ===================== ANSWER =====================
function selectAnswer(btn, selected) {
    if (answered) return;
    answered = true;

    const correct = quizData[currentQuestion].answer;

    if (selected === correct) {
        score++;
        document.getElementById("result").innerText = "Betul!";
        document.getElementById("result").style.color = "green";
        btn.style.background = "#d1fae5";
    } else {
        document.getElementById("result").innerText = "Salah!";
        document.getElementById("result").style.color = "red";
        btn.style.background = "#fee2e2";
    }
}


// ===================== NEXT =====================
function nextQuestion() {
    if (!answered) {
        document.getElementById("result").innerText = "Sila jawab dulu!";
        document.getElementById("result").style.color = "orange";
        return;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinal();
    }
}


// ===================== FINAL =====================
function showFinal() {
    document.getElementById("question").innerText = "Quiz Tamat 🎉";
    document.getElementById("options").innerHTML = "";

    document.getElementById("result").innerHTML =
        `Skor anda: ${score} / ${quizData.length}`;

    document.getElementById("progressBar").style.width = "100%";
}