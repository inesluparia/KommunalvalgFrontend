import {candidatesRepository} from "./repositories/candidatesRepo.js";

let allCandidates
let parties

window.addEventListener("load", async () => {
    allCandidates = await candidatesRepository.findAll()
    makeRows(allCandidates)
    parties = await fetch("http://localhost:8080/parties")
        .then(res => res.json())
    makeFilterBtn(parties)
    addFilters()
})


function makeRows(data) {
    const candidates = data
    const html = candidates.map(c => `
         <tr>
           <td>${(c.id)}</td>
           <td>${(c.name)}</td>
           <td>${(c.politicalParty.abbreviation)}<br>${(c.politicalParty.name)}</td>
           <td>${(c.votes)}</td>
         </tr>
        `).join("")
    document.getElementById("candidate-table-body").innerHTML = html
}

function addFilters() {
    const dropdown = document.querySelector(".dropdown-content")
    dropdown.addEventListener("click", (event) => {
        event.preventDefault()
        const idSelected = event.target.dataset.id

        if (idSelected === "0") {
            makeRows(allCandidates)
        } else {
            let filtered = allCandidates.filter(c => (c.politicalParty.id === Number(idSelected)))
            makeRows(filtered)
        }
    })
}

function makeFilterBtn(parties) {
    let html = parties.map(p => `
    <li data-id="${p.id}">${p.name}</li>
    `).join("")
    html += '<li data-id="0">Se Alle</li>'
    document.querySelector(".dropdown-content").innerHTML = html
}


