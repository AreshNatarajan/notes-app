const openNotesList = document.getElementById('openNotesList')
const sideBar = document.getElementById('sidebar')
const closeSideBar = document.getElementById('close-btn')
const submit = document.getElementsByTagName('form')[0]
const myNotes = document.getElementById('myNotes')


// side bar 

openNotesList.addEventListener('click', alerter)
function alerter() {
    sideBar.classList.toggle('sidebarOpen')
}
closeSideBar.addEventListener('click', alerter)

//

// from function

function newNotes() {
    document.getElementById('title').value = ''
    document.getElementById('message').value = ''
}

submit.addEventListener('submit', async function (event) {
    event.preventDefault()
   
    const myformData = document.getElementsByTagName('form')[0]
    const listLenght = document.getElementsByTagName('li')
    let titleData = ''
    let msgData = ''

    const r = Math.floor(Math.random() * 156) + 100
    const g = Math.floor(Math.random() * 156) + 100
    const b = Math.floor(Math.random() * 156) + 100
    const bgColor = `rgb(${r}, ${g}, ${b})`;

    titleData = myformData.title.value;
    msgData = myformData.message.value
    
    let titlefinal = titleData.charAt(0).toUpperCase() + titleData.slice(1)    
    var li = document.createElement('LI')
    var h3 = document.createElement('h3')

    var p = document.createElement('p')
    h3.innerText = `${listLenght.length + 1}.${titlefinal}`
    p.innerText = msgData
    h3.setAttribute('class', 'notes_title')
    p.setAttribute('class', 'notes_msg')
    li.style.backgroundColor = bgColor
    li.setAttribute('class', 'wrk')
    li.append(h3)
    li.append(p)
    myNotes.appendChild(li)

}) 


function saveData(){
   
}