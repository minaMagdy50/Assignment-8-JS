
function randomquote(){
    var Quotes = [
        '“Without music, life would be a mistake.”'  ,
         '“We accept the love we think we deserve.”' ,
         '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
         '“Without music, life would be a mistake.”',
         '“I am so clever that sometimes I do not understand a single word of what I am saying.”',
         '“A friend is someone who knows all about you and still loves you.”',
         '“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         '“Good friends, good books, and a sleepy conscience: this is the ideal life.”',
         '“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”',
         '“All you need is love. But a little chocolate now and then does not hurt.”',
         '“Life is not about finding yourself. Life is about creating yourself.”',
         '“Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.”',
         '“Today you are You, that is truer than true. There is no one alive who is Youer than You.”',
         '“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.”',
         '“To the well-organized mind, death is but the next great adventure.”',
         '“If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.”',
         '“Logic will get you from A to Z; imagination will get you everywhere.”',
         '“Whenever I feel the need to exercise, I lie down until it goes away.”',
         '“Be careful about reading health books. Some fine day you will die of a misprint.”',
         '“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.”',
         '“Facts do not cease to exist because they are ignored.”',
         '“Man is the only creature who refuses to be what he is.”',
         '“Happy Hunger Games! And may the odds be ever in your favor.”',
        '“A good friend will always stab you in the front.”',
        '“May you live every day of your life.”',
        '“Be kind, for everyone you meet is fighting a harder battle.”',
        '“There is a fine line between genius and insanity. I have erased this line.”',
        '“The fault, dear Brutus, is not in our stars, but in ourselves.”        '

        ]
   
   
    var SayerQuote = [
        '- Friedrich Nietzsche, Twilight of the Idols',
        '- Stephen Chbosky, The Perks of Being a Wallflower',
        '- Mahatma Gandhi',
        '- Friedrich Nietzsche, Twilight of the Idols',
        '- Oscar Wilde, The Happy Prince and Other Stories',
        '- Elbert Hubbard',
        '- Jane Austen, Northanger Abbey',
        '- J.K. Rowling, Harry Potter and the Chamber of Secrets',
        '- Albert Einstein',
        '- Mark Twain',
        '- John Green, The Fault in Our Stars',
        '- Charles M. Schulz',
        '- George Bernard Shaw',
        '- Jim Henson',
        '- Dr. Seuss, Happy Birthday to You!',
        '- Oscar Wilde',
        '- J.K. Rowling, Harry Potter and the Sorcerers Stone',
        '- Albert Einstein',
        '- Albert Einstein',
        '- Paul Terry',
        '― Markus Herz',
        '― Isaac Asimov',
        '― Aldous Huxley, Complete Essays, Vol. II: 1926-1929',
        '― Albert Camus',
        '― Suzanne Collins, The Hunger Games',
        '― Oscar Wilde',
        '― Jonathan Swift',
        '― Plato',
        '― Oscar Levant',
        '― William Shakespeare, Julius Caesar'
        



    ]
    


    var random = Math.floor(Math.random() * Quotes.length)

    document.getElementById('PQ').innerHTML = Quotes[random]
    document.getElementById('sayer').innerHTML = SayerQuote[random]
}

