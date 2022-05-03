let textMin = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant... <button class="seeMoreBtn" onclick="seeMore()">ver mais</button></p>'
let textBig = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.<br></br>Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.<br></br>Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.<br></br>Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<button class="seeMoreBtn" onclick="seeLess()">ver menos</button><p>'

const topics = [
    questions = [
        {
            subject: "Assunto da pergunta aparece aqui",
            questionAutor: "Carlos Henrique Santos",
            question: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?",
            likes: 3,
            approved:true,
            answers: [
                {
                    autor: "Adriano da Silva",
                    autorClass: "Autor",
                    answer:"Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
                },
                {
                    autor: "Carlos Henrique Santos",
                    autorClass: "questioner",
                    answer:"Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.<br></br>Obrigada pela resposta, muito interessante o seu trabalho!"
                },
                {
                    autor: "Carmila Ferreira Andrade",
                    autorClass: "Coautor",
                    answer:"Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.<br></br>Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
                },
                {
                    autor: "Ana Carolina",
                    autorClass: "Coautor",
                    answer:"Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
                },
            ]
        },
        {
            subject: "Assunto da pergunta aparece aqui",
            questionAutor: "Carlos Henrique Santos",
            question: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?",
            likes: 1,
            approved:true,
            answers:[]
        }
    ]
]

let display = false


const seeMore = () =>{
    document.getElementById('resumeText').innerHTML = textBig
    document.getElementById('resumeText').style.height = "100%"
}

const seeLess = () =>{
    document.getElementById('resumeText').innerHTML = textMin
    document.getElementById('resumeText').style.height = "115px"
}

const showQuestions = () =>{
    document.getElementById('questions').innerHTML = ""    
    topics.map((questions) => {

        questions.map((quest) =>{
            let questionText = quest.question.slice(0,172) + '...'
            display &&(questionText = quest.question)
            quest.approved ?(
                document.getElementById('questions').innerHTML =   '<div id="'+questions.indexOf(quest)+'"><div  onclick="showAnswers('+questions.indexOf(quest)+')" class="quest px-3 pb-3 "><h5>'+quest.subject+'</h5><p>'+quest.questionAutor+'</p><p class="mb-2" id="questionText'+questions.indexOf(quest)+'">'+questionText+'</p><button class="btnElipsis"><i class=" fa-solid fa-ellipsis-vertical fa-lg"></i></button><button><i class="fa-solid fa-heart text-white"></i></button><p class="d-inline">'+quest.likes+'Likes</p><p class="d-inline">'+quest.answers.length+'Comment</p></div><div id="answer'+questions.indexOf(quest)+'" class="answer"></div></div>' + document.getElementById('questions').innerHTML
            ):(
                adsd
            )
            document.getElementById(questions.indexOf(quest)).style = "margin-bottom: 15px"

            quest.answers.map((answer) => {

                let cssClass, display
                answer.autorClass == "Coautor" || answer.autorClass == "Autor" ?(
                    cssClass = "autor",
                    display = "d-inline"
                ):(
                    cssClass = "owner",
                    display = "d-none"
                )

                document.getElementById('answer'+questions.indexOf(quest)).innerHTML = document.getElementById('answer'+questions.indexOf(quest)).innerHTML +
                '<div class="'+cssClass+' answer"><p class="d-inline">'+answer.autor+'</p><p class="'+display+' float-right mr-5">'+answer.autorClass+'<i class="fa-solid fa-check-double fa-xl"></i></p><p>'+answer.answer+'</p></div>'
                document.getElementById('answer'+questions.indexOf(quest)).style = "display: none"
            })
        })
    })
}

const showAnswers = (key) =>{
    display ? (
        document.getElementById(key).style = "margin-bottom: 15px",
        document.getElementById('answer'+key).style = "display: none",
        document.getElementById('questionText'+key).innerHTML = topics[0][key].question.slice(0,172) + '...',
        display = false
    ):(
        document.getElementById(key).style = "margin-bottom: 0",
        document.getElementById('answer'+key).style = "display: block;margin-bottom: 10px",
        document.getElementById('questionText'+key).innerHTML = topics[0][key].question,
        display = true
    )
}

const newTopic = () =>{
    let topic = {
        subject: document.getElementById('subjectInput').value,
        questionAutor: "Carlos Henrique Santos",
        question: document.getElementById('textInput').value,
        likes: 1,
        approved:false,
        answers:[]
    }
    topics[0].push(topic)
    showQuestions()
}
showQuestions()