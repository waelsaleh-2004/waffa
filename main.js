const quizData = [
    {
        question: "رفع الحدث وإزالة النجس وما في معناهما",
        answers: ["الاستحاضة", "الطهارة", "الغسل"],
        correct: 1
    },
    {
        question: "ينقسم الحدث إلى قسمين",
        answers: ["أصغر", "أكبر", "كلاهما"],
        correct: 2
    },
    {
        question: "شيء مستقذر يمنع من صحة الصلاة ونحوها",
        answers: ["النجس", "الوضوء", "الغسل"],
        correct: 0
    },
    {
        question: "يتم التطهير من الحدث والنجس بعدة أشياء",
        answers: ["الماء", "التراب", "كلاهما"],
        correct: 2
    },
    {
        question: "الماء المطلق عن أي قيد يعتبر",
        answers: ["نجس", "طاهر ومطهر", "غير طاهر"],
        correct: 1
    },
    {
        question: "يستثنى من النجس",
        answers: ["ميتة ليس لها دم", "نجاسة لا يراها البصر المعتدل", "كلاهما"],
        correct: 2
    },
    {
        question: "تنقسم النجاسة باعتبار كيفية تطهيرها إلى",
        answers: ["نجاسة مخففة ومغلظة", "نجاسة متوسطة", "كلاهما"],
        correct: 2
    },
    {
        question: "النجاسة المغلظة هي",
        answers: ["الكلب والخنزير", "الذباب", "بول الطفل"],
        correct: 0
    },
    {
        question: "يحرم أكل الميتة ويستثنى من ذلك:",
        answers: ["السمك", "الجراد", "كلاهما"],
        correct: 2
    },
    {
        question: "ما أوجب الوضوء دون الغسل يسمى حدثاً",
        answers: ["أكبر", "متوسط", "أصغر"],
        correct: 2
    },
    {
        question: "الوَضوء بفتح الواو يقصد به",
        answers: ["الطهارة", "ماء الوضوء", "الغسل"],
        correct: 1
    },
    {
        question: "من أركان الوضوء",
        answers: ["النية وغسل الوجه", "غسل اليدين إلى المرفقين", "كلاهما"],
        correct: 2
    },
    {
        question: "الماء الطاهر لنفسه وغير مطهر لغيره ",
        answers: ["  ماء تغير لونه وريحه بشئ طاهرمخالط, "  , "البحر" , "المطر"],
        correct: 0
    },
    {
        question: " تطهير السبيلين من كل ملوث بالماء أو الحجارة يسمى",
        answers: ["غسل" , "   استنجاء  ","الوضوء"],
        correct: 1
    },
    {
        question: "ما أوجب الغسل يسمى حدثاً",
        answers: ["أصغر", "أكبر", "نجساً"],
        correct: 1
    },
    {
        question: "تعميم البدن بالماء بنية هو",
        answers: ["الوضوء", "الاستنجاء", "الغسل"],
        correct: 2
    },
    {
        question: "من أركان الغسل",
        answers: ["النية", "إيصال الماء إلى جميع بدنه", "كلاهما (النية وإيصال الماء)"],
        correct: 2
    },
    {
        question: "مدة المسح على الخفين للمسافر هي",
        answers: ["يوم وليلة", "ثلاثة أيام بلياليهن", "أسبوع"],
        correct: 1
    },
    {
        question: "هو إيصال التراب إلى الوجه واليدين بنية",
        answers: ["الوضوء", "التيمم", "الغسل"],
        correct: 1
    },
    {
        question: "هو الدم الخارج على سبيل الصحة في أوقات معلومة",
        answers: ["حيض", "استحاضة", "نفاس"],
        correct: 0
    },
    {
        question: "أقل مدة الحمل هي",
        answers: ["9 أشهر", "ستة أشهر", "سنة"],
        correct: 1
    },
    {
        question: "أقوال وأفعال مخصوصة مفتتحة بالتكبير ومختتمة بالتسليم هي",
        answers: ["الصلاة", "التيمم", "الوضوء"],
        correct: 0
    },
    {
        question: "يشترط للمؤذن والمقيم",
        answers: ["الإسلام والتمييز", "الذكورة", "كلاهما (الإسلام والتمييز والذكورة)"],
        correct: 2
    },
    {
        question: "ستر العورة يعتبر من",
        answers: ["شروط الصلاة", "أركان الصلاة", "سنن الصلاة"],
        correct: 0
    },
    {
        question: "من أركان الصلاة",
        answers: ["استقبال القبلة", "النية", "ستر العورة"],
        correct: 1
    },
    {
        question: "تنقسم سنن الصلاة إلى",
        answers: ["أبعاض", "هيئات", "كلاهما (أبعاض وهيئات)"],
        correct: 2
    },
    {
        question: "الاعتدال من الركوع يعتبر من",
        answers: ["الأبعاض", "السنن", "الأركان"],
        correct: 2
    },
    {
        question: "عورة المرأة في الصلاة (ما عدا)",
        answers: ["الوجه", "الكفين", "الوجه والكفين"],
        correct: 2
    },
    {
        question: "من أنكر الصلاة جحوداً فهو",
        answers: ["كافر", "فاسق", "مرتد"],
        correct: 0
    },
    {
        question: "النية في الوضوء والغسل تعتبر من",
        answers: ["السنن", "الأركان (الفرائض)", "الشروط"],
        correct: 1
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
const successSound = document.getElementById('soundSu');
const wrongSound = document.getElementById('sounderror');


// 🎲 دالة ترتيب الأسئلة عشوائياً
function shuffleQuestions() {
    quizData.sort(() => Math.random() - 0.5);
}

// برمجية زر ابدأ الاختبار لفك قفل الصوت وتوليد أسئلة عشوائية
startBtn.addEventListener("click", () => {
    successSound.play().then(() => { successSound.pause(); successSound.currentTime = 0; }).catch(()=>{});
    wrongSound.play().then(() => { wrongSound.pause(); wrongSound.currentTime = 0; }).catch(()=>{});

    startContainer.style.display = "none";
    quizContent.style.display = "block";
    
    shuffleQuestions();
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
                if (allButtons[correctIndex]) {
                    allButtons[correctIndex].style.backgroundColor = "#2ecc71";
                    allButtons[correctIndex].style.color = "white";
                }

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
    if(document.querySelector(".progress-fill")) {
        document.querySelector(".progress-fill").style.width = progress + "%";
    }
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
        
        // استدعاء دالة التقييم الذكي ليظهر مع النتيجة النهائية
        showSmartFeedback();
    }
});

if (restartBtn) {
    restartBtn.addEventListener("click", () => {
        currentQuestion = 0;
        score = 0;
        resultContainer.style.display = "none";
        quizContent.style.display = "block";
        
        shuffleQuestions();
        loadQuestion();
    });
}

// دالة التقييم الذكي والعبارات التشجيعية المخصصة لطالبات "على بصيرة"
function showSmartFeedback() {
    let percent = (score / quizData.length) * 100;
    let message = "";
    
    if (percent === 100) {
        message = "ما شاء الله! بصيرتكِ كاملة وإجاباتكِ سديدة 👑✨";
    } else if (percent >= 80) {
        message = "ممتازة جداً! أنار الله دربكِ وزادكِ علماً وفهماً 🌸";
    } else if (percent >= 50) {
        message = "نتيجة طيبة وجيدة، استمري في طلب العلم والتفقه ✨";
    } else {
        message = "محاولة جميلة أعد الاختبار لتثبيت معلوماتكِ الفقهية 📖";
    }
    
    let msgElement = document.getElementById("customFeedback");
    if (!msgElement) {
        msgElement = document.createElement("div");
        msgElement.id = "customFeedback";
        msgElement.style.marginTop = "15px";
        msgElement.style.fontSize = "1.2rem";
        msgElement.style.fontWeight = "bold";
        msgElement.style.color = "#8b5cf6";
        msgElement.style.lineHeight = "1.6";
        
        resultContainer.insertBefore(msgElement, restartBtn);
    }
    
    msgElement.textContent = message;
}

// --- كود تفعيل ومراقبة الوضع الليلي ---

// 1. تعريف عناصر الزر وجسم الصفحة
const darkModeToggle = document.getElementById('darkModeToggle');
const bodyElement = document.body;

// 2. التحقق مما إذا كان المستخدم قد فعل الوضع الليلي سابقاً (حفظ الخيار)
if (localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark-mode');
    darkModeToggle.innerText = '☀️'; // تغيير الأيقونة إلى شمس
}

// 3. إضافة حدث الضغط على الزر لتغيير المظهر
darkModeToggle.addEventListener('click', () => {
    // تبديل الفئة داخل الـ body
    bodyElement.classList.toggle('dark-mode');
    
    // التحقق من الوضع الحالي وحفظه وتغيير شكل الأيقونة
    if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerText = '☀️'; // شمس للعودة للوضع النهاري
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerText = '🌙'; // هلال للعودة للوضع الليلي
    }
});
