const faq = [
    {
        id : 1,
        question : "How long until I see results?",
        answer : " This depends on how quickly and regularly you are able to provide us content. Without you providing us content we cannot use our Rabbit Hole™ marketing formula And if we cannot market then there will be no subscribers for the seduction sales team to sell to - which means less profits for you. If you put 100% into creating content we can put 100% into sales and marketing."
    }
]

const question = document.getElementById('question');
const answer = document.getElementById('answer');
const chevron = document.getElementById('chevron');

question.addEventListener('click' , (e) => {
    answer.classList.toggle('hidden');
    chevron.classList.toggle('rotate-180');
})