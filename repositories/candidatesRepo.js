const url ='http://localhost:8080/candidates'

export const candidatesRepository = {

    findAll: () => {
        return fetch(url).then(response => response.json())
    },
    editCandidate: (candidate) => {

        const options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidate)
        }

        return fetch(url + "/" + candidate.id, options)
    },

    deleteCandidate: (id) => {

        const options = {
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        }

        return fetch(url + "/" + id, options)
    },

    addCandidate: (candidate) => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidate)
        }

        return fetch( url, options)
    },
    findByParty: (party) => {
        return fetch(url + "?party=" + party).then(res=> res.json())
    },
    findById: (id) => {
        return fetch(url + "/" + id);
    },
}
