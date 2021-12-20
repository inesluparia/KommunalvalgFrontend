const url ='http://localhost:8080'

export const candidatesRepository = {

    findAll: async () => {
        return await fetch( url + "/candidates").then(response => response.json())
    },
    findByParty: (party) => {
        //return fetch(url + "/candidates?party=" + party).then(res=> res.json())
    },
    findById: (id) => {
        return fetch(url + "/candidates/" + id).then(response => response.json());
    },
}
