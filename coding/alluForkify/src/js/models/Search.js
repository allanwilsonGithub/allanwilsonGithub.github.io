import axios from 'axios';

export default class Search {
    constructor (query){
        this.query = query;
    }

    async getResults (query){
        const key = 'fb5e3ee8a38f787f991c8d0dc5b59f92';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        }
        catch (error){
            alert(error);
        }
    }
}