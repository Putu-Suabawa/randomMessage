// program to print random message
// the message consists of 10 zodiac forecast, famouse people quotes, and jokes

const getRandomMessage = (number) => {
    let randomNum = number;
    let date = new Date();
    let d = date.getDate(date);
    
    let zodiac = ['Today may turn out to be your important day', 'Try not to eat too much fruit in the morning', 
    'Perhaps you have been too hard on your friend', 'A little exercise when you get back from work is always good',
    'For the next few days, concentrate on being present with the situation', 'It is time you take a decisive action',
    'A little bit of patient with your friend could make a big difference', 'This is a good time for you to be with your family',
    'It is not time yet to give up your trip', 'Today you have such a high energy, it is time you share the heavy lifting'];
    
    let quotes = ['The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela', 
    'The way to get started is to quit talking and begin doing. - Walt Disney', 
    'If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt', 
    'Life is what happens when you\'re busy making other plans. - John Lennon',
    'It is only with the heart that one can see rightly: what is essential is invisible to the eye. - the Little Prince', 
    'If you tell the truth, you do not have to remember anything. - Mark Twain',
    'Whoever is happy will make others happy too. - Anne Frank', 
    'If you can\'t explain it simply, you don\'t understand enough. - Albert Enstain',
    'In the book of life, the answers aren\'t in the back. - Charlie Brown', 
    'Give me six hours to chop down a tree and I will spend the first four sharpening the axe. - Abraham Lincoln'];
    
    let jokes = ['Why don&#39t scientists trust atoms? Because they make up everything.',
    'What do you call a parade of rabbits hopping backwards? A receding hare-line.',
    'What did the Buddhist say to the hot dog vendor? Make me one with everything',
    'What did the buffalo say when his son left for college? Bison.', 
    'How does a rabbi make his coffee? Hebrews it',
    'Why aren&#39t koalas actual bears? They don&#39t meet the koalafications.', 
    'I tried to sue the airport for misplacing my luggage. I lost my case.',
    'Can February march? No, but April may.',
    'How do trees get online? They just log on.',
    'Why are skeletons so calm? Because nothing gets under their skin.']
    
    if (d <= 10) {
        return zodiac[randomNum];
    } else if(d > 10 && d <= 20) {
        return quotes[randomNum]; 
    } else {
        return jokes[randomNum];
    }
};

const buttonClicked = () => {
    const rolledDice = Math.floor(Math.random() * 10);
    document.getElementById("demo").innerHTML = getRandomMessage(rolledDice);;
};

const Button = document.getElementById('Button');
Button.onclick = buttonClicked;




