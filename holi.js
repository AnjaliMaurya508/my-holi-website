// ================= MUSIC FUNCTION =================
// Button click par music play hoga
function playMusic(){

    // HTML me jo audio id diya hai usko select kar rahe
    document.getElementById("holiMusic").play();
}



// ================= GULAL START FUNCTION =================
// Page load hote hi yeh function chalega
function startGulal(){

    // Kitne gulal particles chahiye (Number change kar sakti ho)
    for(let i=0; i<80; i++){

        // Naya div create karna
        let gulal = document.createElement("div");

        // Class add karna (CSS design apply hoga)
        gulal.classList.add("gulal");

        // Screen me random left position
        gulal.style.left = Math.random() * window.innerWidth + "px";

        // Random color function call
        gulal.style.background = randomColor();

        // Har particle ki speed different
        gulal.style.animationDuration = (Math.random()*3+2)+"s";

        // Body me add karna
        document.body.appendChild(gulal);
    }
}



// ================= RANDOM COLOR FUNCTION =================
// Yaha se gulal ke colors change kar sakti ho
function randomColor(){

    let colors = [
        "#ff4e50",
        "#f9d423",
        "#00c9ff",
        "#92fe9d",
        "#ff6a00",
        "#ff0080"
    ];

    // Random color select karna
    return colors[Math.floor(Math.random()*colors.length)];
}
function loginUser() {
    const input = document.getElementById('username').value.trim();

    if(input === ""){
        alert("Please enter your name to start the quiz!");
        return;
    }

    // Naam store kar sakte ho agar zarurat ho
    localStorage.setItem("username", input); // optional

    // Hide login page
    document.getElementById('loginSection').style.display = 'none';

    // Show quiz section
    document.getElementById('holiQuiz').style.display = 'block';

    // Personalized greeting (optional)
    document.getElementById('quizHeading').innerText = `🎉 Holi Quiz - Welcome ${input}!`;

    // Start quiz
    showQuestion(); // existing quiz function
}

// ===== Holi Quiz Logic =====
const quiz = [
    {question:"होलि किस ऋतु का त्योहार है?", options:["वसंत","शरद","ग्रीष्म","वर्षा"], answer:0},
    {question:"हिरण्यकश्यप और प्रह्लाद की कहानी होली से किसका संदेश देती है?", options:["बुराई की जीत","अच्छाई की जीत","सर्दी का आगमन","नौकरी का महत्व"], answer:1},
    {question:"होली मुख्य रूप से किस महीने में मनाई जाती है?", options:["फाल्गुन","चैत्र","अश्विन","भाद्रपद"], answer:0},
    {question:"होली पर लोग एक-दूसरे पर क्या फेंकते हैं?", options:["रंग और पानी","पत्थर","पंखे","धूल"], answer:0},
    {question:"होली का दूसरा दिन क्या कहलाता है?", options:["रंगवाला दिन","होलिका दहन","दीवाली","रक्षा बंधन"], answer:1},
    {question:"होली को क्यों मनाया जाता है?", options:["सर्दी खत्म होने पर","अच्छाई की जीत और भाईचारे के लिए","फसल काटने पर","नई नौकरी के लिए"], answer:1},
    {question:"होली पर पारंपरिक मिठाई कौन सी बनाई जाती है?", options:["गुजिया","रसमलाई","लड्डू","जलेबी"], answer:0},
    {question:"भारत में होली सबसे ज्यादा किस राज्य में प्रसिद्ध है?", options:["उत्तर प्रदेश","तमिलनाडु","पंजाब","केरल"], answer:0},
    {question:"होली में किस रंग का विशेष महत्व है?", options:["लाल","हरा","नीला","सभी रंगों का"], answer:3},
    {question:"होली का त्योहार मुख्य रूप से किसको समर्पित है?", options:["भगवान विष्णु","भगवान शिव","भगवान ब्रह्मा","किसी को नहीं"], answer:0}
];

let currentQuestion = 0;
let score = 0;

// Display question
function showQuestion(){
    const q = quiz[currentQuestion];
    document.getElementById('question').innerText = q.question;
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn,i)=>{
        btn.innerText = q.options[i];
        btn.disabled = false;
    });
    document.getElementById('result').innerText = '';
    document.getElementById('nextBtn').style.display = 'none';
}

// Check answer
function checkAnswer(index){
    const q = quiz[currentQuestion];
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn=>btn.disabled=true);

    if(index===q.answer){
        result.innerText='🎉 सही उत्तर!';
        result.style.color='green';
        score++;
    } else {
        result.innerText='❌ गलत उत्तर!';
        result.style.color='red';
    }

    document.getElementById('nextBtn').style.display='inline-block';
    document.getElementById('score').innerText = `Score: ${score} / ${quiz.length}`;
}

// Next question
function nextQuestion(){
    currentQuestion++;
    if(currentQuestion<quiz.length){
        showQuestion();
    } else {
        document.getElementById('question').innerText='🎉 Quiz Complete!';
        document.querySelector('.options').style.display='none';
        document.getElementById('nextBtn').style.display='none';
        document.getElementById('result').innerText = `आपका अंतिम स्कोर: ${score} / ${quiz.length}`;
    }
}

// Start quiz
showQuestion();

// ================= WISH GENERATOR FUNCTION =================
function generateWish(){

    // Input field se naam lena
    let name = document.getElementById("username").value;

    // Agar naam empty ho
    if(name == ""){
        alert("Please enter your name!");
    }

    else{

        // Personalized message show karna
        document.getElementById("message").innerHTML =
        "🌈 Happy Holi " + name +
        "! May your life be filled with colors and happiness 🎉";
    }
}