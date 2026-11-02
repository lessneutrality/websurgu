const iconHide = document.getElementById('hide')
const main = document.getElementById('main')
const createBtn = document.getElementById('create-btn')
const modal = document.getElementById('shadow')
const saveBtn = document.getElementById('save-btn')
const closeBtn = document.getElementById('close-btn')
const title = document.getElementById('form-create__title')
const desc = document.getElementById('form-create__desc')

const date = new Date().toISOString().slice(0, 10)
const NOTES_KEY = 'notes'



iconHide.addEventListener('click', ()=>{
    main.classList.toggle('main_navbar-hidden')
})

createBtn.addEventListener('click',()=>{
    modal.style.display = 'flex'
})

closeBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    modal.style.display = 'none'
})

saveBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const titleValue = title.value || 'Новая заметка'
    const descValue = desc.value
    const dateValue = date

    notes.unshift(
        {
            title: titleValue,
            desc: descValue,
            date: dateValue
        }
    )
    modal.style.display = 'none'
    localStorage.setItem('notes',JSON.stringify(notes))
    renderNavbar()
})


const notes = initDB()/* [
    {
        title: 'g6',
        desc: 'i aint fly like g6 i aint fly like g6',
        date: '2026-12-13'
    },
    {
        title: 'стиралка',
        desc: 'они не в адеквате им сносит башню',
        date: '2026-12-12'
    },
    {
        title: 'кайен',
        desc: 'на телефоне месседж ты не приедешь',
        date: '2026-12-11'
    }

] */

const days = [
    'вск',
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб'
]

function initDB(){
    const items = localStorage.getItem(NOTES_KEY)
    return JSON.parse(items || '[]')
}

function objToHTML(obj){
    const mainEl = document.createElement('div')
    mainEl.classList.add('navbar__content-note')

    const dateEl = document.createElement('div')
    dateEl.classList.add('navbar__content-note-date')

    const num = document.createElement('div')
    num.classList.add('num')
    num.innerHTML = new Date(obj.date).getDate()

    const word = document.createElement('div')
    word.classList.add('word')
    word.innerHTML = days[new Date(obj.date).getDay()]

    const fullDate = document.createElement('div')
    fullDate.classList.add('fullDate')
    fullDate.innerHTML = obj.date

    dateEl.appendChild(num)
    dateEl.appendChild(word)
    dateEl.appendChild(fullDate)

    const descEl = document.createElement('div')
    descEl.classList.add('navbar__content-note-textpiece')

    const title = document.createElement('div')
    title.innerHTML = `<b>${obj.title}</b>`

    const description = document.createElement('div')
    description.innerHTML = `${obj.desc.slice(0,20)}...`

    descEl.appendChild(title)
    descEl.appendChild(description)

    mainEl.appendChild(dateEl)
    mainEl.appendChild(descEl)

    return mainEl
}

let currentNote

const navbarEl = document.getElementById('navbar__content')

function renderNavbar() {
    navbarEl.innerHTML = ''
    for(let note of notes){
        const noteHTML = objToHTML(note)
        if (note === currentNote){
            noteHTML.classList.add('active-note')
        }
        noteHTML.addEventListener('click',() => {
            currentNote = note
            renderNavbar()
            console.log(currentNote);
        })
        navbarEl.appendChild(noteHTML)
    }
}

renderNavbar()