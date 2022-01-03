// const axios = require("axios");

const handelrs = ({ axios }) => ({

    get: async (req, res) => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
        res.status(200).json(data);
    },

    post: async (req, res) => {
        const { body } = req;
        const { data } = await axios.post(`https://jsonplaceholder.typicode.com/users/`, body);
        res.status(201).json(data);
    },

    put: async (req, res) => {
        const { uid } = req.params;
        const { body } = req;
        await axios.put(`https://jsonplaceholder.typicode.com/users/${uid}`, body);
        res.sendStatus(204);
    },

    delete: async (req, res) => {
        const { uid } = req.params;
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${uid}`);
        res.sendStatus(204);
    }
})

module.exports = handelrs;

