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

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreText = document.getElementById("scoreText");
const resultContainer = document.getElementById("resultContainer");

// ربط عناصر الشاشات المنبثقة
const successModal = document.getElementById("successModal");
const errorModal = document.getElementById("errorModal");
const warningModal = document.getElementById("warningModal");
const correctAnswerHint = document.getElementById("correctAnswerHint");

// 🎵 إنشاء كائنات المؤثرات الصوتية للأجوبة
const successSound = new Audio("./audio/meldix-success-340660.mp3");
const wrongSound = new Audio("./audio/u_8g40a9z0la-fail-234710.mp3");

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
    // تحديث إجمالي الأسئلة ديناميكياً بناءً على حجم مصفوفة الأسئلة المتوفرة
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
                
                // 🔊 تشغيل صوت النجاح فوراً
                successSound.currentTime = 0; 
                successSound.play().catch(e => console.log("المتصفح يقيد الصوت قبل التفاعل اللمسي الأول"));

                successModal.style.display = "flex";
                setTimeout(() => {
                    successModal.style.display = "none";
                }, 1500);

            } else {
                btn.style.backgroundColor = "#e74c3c"; 
                btn.style.color = "white";
                feedbackText.textContent = "إجابة خاطئة ❌";
                feedbackText.style.color = "#e74c3c";

                const allButtons = answers.querySelectorAll("button");
                allButtons[correctIndex].style.backgroundColor = "#2ecc71";
                allButtons[correctIndex].style.color = "white";

                // 🔊 تشغيل صوت الخطأ فوراً
                wrongSound.currentTime = 0;
                wrongSound.play().catch(e => console.log("المتصفح يقيد الصوت قبل التفاعل اللمسي الأول"));

                correctAnswerHint.innerHTML = `الإجابة الصحيحة هي: <strong>"${quizData[currentQuestion].answers[correctIndex]}"</strong>`;
                errorModal.style.display = "flex";
                
                setTimeout(() => {
                    errorModal.style.display = "none";
                }, 2000);
            }
        });

        answers.appendChild(btn);
    });

    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.querySelector(".progress-fill").style.width = progress + "%";
}

loadQuestion();

nextBtn.addEventListener("click", () => {
    if (selectedAnswer === null) {
        warningModal.style.display = "flex";
        setTimeout(() => {
            warningModal.style.display = "none";
        }, 1500);
        return;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        question.innerHTML = `انتهى الاختبار 🎉`;
        answers.innerHTML = "";
        feedbackText.remove(); 
        nextBtn.style.display = "none";
        
        resultContainer.style.display = "block";
        scoreText.textContent = `${score} / ${quizData.length}`; 
    }
});
