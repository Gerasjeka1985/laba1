import { defineStore} from 'pinia';

import {foxTypes} from "~/types/foxTypes"; // импорт типа обьекта

import axios from "axios";


export const useFoxStore =  defineStore("FoxStore", {
    // state as data
    state: () => {
        return {
            foxes: [] as foxTypes[], //описание массива лис
        }
    },

    //getters as a computed
    getters: {
        getAllFoxesArr: (state) => state.foxes,
    },

    //actions methods
    actions: {
        async getRandomFox(){
            try{
                const response = await axios.get('https://randomfox.ca/floof/')
                const result = response.data;
                return this.foxes.push(result);
            }
            catch (err){
                console.log(err);
            }
        },
        async getCurrentFox(id: string){
            try {
                if(id == ''){
                    return false;
                }
                const response = await fetch(`https://randomfox.ca/images/${id}.jpg`)
                    .then(resp => resp.url)
                this.foxes.push( {"image": response, "link": response} )
                return true;
            }
            catch (err){
                console.log(err);
            }
        },
    },
})