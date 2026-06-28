const quizData = [
    {
    question:"رفع الحدث وإزالة النجس وما  في معناهما وعلى صورتهما",
    answers:["الحدث الاصغر","الطهارة","الوضوء","الغسل"],
    correct:1
    },
    {
    question:"الحدث ينقسم الى",
    answers:["حدث اصغر وحدث اكبر","حدث اكبر","حدث اصغر" ,"جميع الاجابات صحيحة"],
    correct:3
    },
    {
    question:"شئ مستقذر يمنع من صحة الصلاة هذا تعريف ",
    answers:["النجس","الستحاضة","البول","الحيض"],
    correct:0
    },
    {
        question: "ما هو حكم الماء الذي تغير لونه أو طعمه أو ريحه بنجاسة؟",
        answers: ["ماء طهور", "ماء نجس", "ماء طاهر غير مطهر", "ماء مشكوك فيه"],
        correct: 1
    },
    {
        question: "أي مما يلي يُعد من مفسدات ومبطلات التيمم؟",
        answers: ["النوم الخفيف جداً", "الأكل والشرب", "وجود الماء والقدرة على استعماله", "تغيير الملابس"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let hasAnswered = false; 

// ربط عناصر شاشة البدء
const startContainer = document.getElementById("startContainer");
const startBtn = document.getElementById("startBtn");
const quizContent = document.getElementById("quizContent");

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreText = document.getElementById("scoreText");
const resultContainer = document.getElementById("resultContainer");
const restartBtn = document.getElementById("restartBtn");

const successModal = document.getElementById("successModal");
const errorModal = document.getElementById("errorModal");
const warningModal = document.getElementById("warningModal");
const correctAnswerHint = document.getElementById("correctAnswerHint");

// 🎵 إنشاء كائنات المؤثرات الصوتية من مجلد audio
const successSound = new Audio("./audio/meldix-success-340660.mp3");
const wrongSound = new Audio("./audio/u_8g40a9z0la-fail-234710.mp3");

// برمجية زر ابدأ الاختبار لفك قفل الصوت لمتصفح كروم
startBtn.addEventListener("click", () => {
    // الخدعة الذكية: تشغيل وإيقاف الصوت صامتاً لتخويل الموقع بالصوت
    successSound.play().then(() => { successSound.pause(); successSound.currentTime = 0; }).catch(()=>{});
    wrongSound.play().then(() => { wrongSound.pause(); wrongSound.currentTime = 0; }).catch(()=>{});

    // إخفاء واجهة الترحيب وعرض واجهة الاختبار
    startContainer.style.display = "none";
    quizContent.style.display = "block";
    
    // بدء شحن السؤال الأول الآن والصوت مفعل
    loadQuestion();
});

const feedbackText = document.createElement("div");
feedbackText.style.fontSize = "1.2rem";
feedbackText.style.fontWeight = "bold";
feedbackText.style.marginTop = "15px";
feedbackText.style.textAlign = "center";
feedbackText.style.transition = "all 0.3s ease";
answers.parentNode.insertBefore(feedbackText, nextBtn);

function loadQuestion(){
    hasAnswered = false;
    selectedAnswer = null;
    feedbackText.textContent = ""; 

    document.getElementById("current").textContent = currentQuestion + 1;
    document.getElementById("total").textContent = quizData.length; 
    
    question.textContent = quizData[currentQuestion].question;
    answers.innerHTML = "";

    quizData[currentQuestion].answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.classList.add("answer");
        btn.textContent = answer;

        btn.addEventListener("click", () => {
            if (hasAnswered) return; 

            hasAnswered = true;
            selectedAnswer = index; 

            const correctIndex = quizData[currentQuestion].correct;

            if (index === correctIndex) {
                btn.style.backgroundColor = "#2ecc71"; 
                btn.style.color = "white";
                feedbackText.textContent = "إجابة صحيحة! 🎉";
                feedbackText.style.color = "#2ecc71";
                score++; 
                
                successSound.currentTime = 0;
                successSound.play().catch(e => console.log(e));

                successModal.style.display = "flex";
                setTimeout(() => { successModal.style.display = "none"; }, 1500);

            } else {
                btn.style.backgroundColor = "#e74c3c"; 
                btn.style.color = "white";
                feedbackText.textContent = "إجابة خاطئة ❌";
                feedbackText.style.color = "#e74c3c";

                const allButtons = answers.querySelectorAll("button");
                allButtons[correctIndex].style.backgroundColor = "#2ecc71";
                allButtons[correctIndex].style.color = "white";

                wrongSound.currentTime = 0;
                wrongSound.play().catch(e => console.log(e));

                correctAnswerHint.innerHTML = `الإجابة الصحيحة هي: <strong>"${quizData[currentQuestion].answers[correctIndex]}"</strong>`;
                errorModal.style.display = "flex";
                setTimeout(() => { errorModal.style.display = "none"; }, 2000);
            }
        });

        answers.appendChild(btn);
    });

    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.querySelector(".progress-fill").style.width = progress + "%";
}

nextBtn.addEventListener("click", () => {
    if (selectedAnswer === null) {
        warningModal.style.display = "flex";
        setTimeout(() => { warningModal.style.display = "none"; }, 1500);
        return;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizContent.style.display = "none"; 
        resultContainer.style.display = "block";
        scoreText.textContent = `${score} / ${quizData.length}`; 
    }
});

if (restartBtn) {
    restartBtn.addEventListener("click", () => {
        currentQuestion = 0;
        score = 0;
        resultContainer.style.display = "none";
        quizContent.style.display = "block";
        loadQuestion();
    });
}
