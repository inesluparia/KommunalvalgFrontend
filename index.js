import {candidatesRepository} from "./candidatesRepo";

document.getElementById("test").innerText= 'Hola'
renderCandidates().then(html =>
    document.getElementById("candidate-table-body").innerHTML = html)

async function renderCandidates () {
const candidates = await candidatesRepository.findAll();
const html = candidates.map(candidate => `
<tr>
    <td>${candidate.politicalParty.name}</td>
    <td>${candidate.name}</td>
    <td>${candidate.id}</td>
</tr>
`).join("")
    return html

}
