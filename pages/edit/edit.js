import {candidatesRepository} from "../../repositories/candidatesRepo.js";

function handleHttpErrors(res) {
    if (!res.ok) {
        return res.json()
            .then(body => {
                const error = new Error(body.message)
                error.apiError = body
                throw error
            })
    }
    return res.json()
}

document.getElementById("find-btn").onclick = () => {
    const selectedId = document.getElementById("selected-id").value
    candidatesRepository.findById(selectedId)
        .then(handleHttpErrors)
        .then(c => {
            document.getElementById("name").value = c.name
        })
        .catch(err => {
            console.log(err.message);
            document.getElementById("edit-status").innerText = "Error message: " + err.message
            if (err.apiError) {
                console.log(err.apiError)
                document.getElementById("edit-status").innerText = err.apiError
            }
        })
}

document.getElementById("save-btn").onclick = (evt) => {
    evt.preventDefault()

    const updatedCandidate = {}
    updatedCandidate.name = document.getElementById("name").value
    updatedCandidate.id = document.getElementById("selected-id").value

    candidatesRepository.editCandidate(updatedCandidate)
        .then(res => {
            if (res.ok) {
                document.getElementById("edit-status").innerText = "Kandidaten er blevet opdateret."
            } else {
                document.getElementById("edit-status").innerText = "En fejl er sket i kandidat opdateringen."
            }
        })
}
