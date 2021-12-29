import {candidatesRepository} from "../../repositories/candidatesRepo.js";

document.getElementById("delete-btn").onclick = (evt)=>{
    evt.preventDefault()
    const idToDelete = document.getElementById("input-id").value

    candidatesRepository.deleteCandidate(idToDelete)
        .then(res => {
                if(res.ok){
                    document.getElementById("status").innerText = "Kandidaten er nu blevet slettet."}
                else {
                    document.getElementById("status").innerText = "En fejl er sket i slet forsøg."}
            }
        )
}
