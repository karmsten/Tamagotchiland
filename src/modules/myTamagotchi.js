export class Tamagotchi{
    #timeup = 5;
    #timedown = 5;
    #running = false;
    #intervalIDHappy;
    #intervalIDHunger;
    constructor(){

    }

    isRunning(){
        return this.#running;
    }

    start(){
        this.#timeup = 5;
        this.#timedown = 5; 
        //this.#intervalIDHunger = setInterval(this.#updateHunger.bind(this), 2200);
        //this.#intervalIDHappy = setInterval(this.#updateHappiness.bind(this),2200);
        this.#running = true;
    }
    stop(){
        clearInterval(this.#intervalIDHunger);
        clearInterval(this.#intervalIDHappy);
        this.#running = false;
    }
    #updateHunger(){
        this.#timeup++;
        document.getElementById('feedBar').innerText = 'Hunger: ' + this.#timeup;
        this.#playerDead();
        
    }
    #updateHappiness(){
        this.#timedown--;
        document.getElementById('happinessBar').innerText = 'Happiness: ' + this.#timedown;
        this.#playerDead();
    }
    #playerDead(){
        if(this.#timeup == 10 || this.#timedown == 0){
            window.alert('game over');
            this.stop();
        }
    }
    adjustTimeUp(){
        this.#timeup = 0;
    }
    adjustTimeDown(){
        this.#timedown = 10;
    }
    
    setTimeDown(){
        return this.#timedown++;

    }
    setTimeUp(){
        return this.#timeup--;
        
    }
    getTimeDown(){
        return this.#timedown;
    }
        
    getTimeUp(){
        return this.#timeup;
    }
    getUpdateHappiness(){
        return this.#updateHappiness;
    }
    getState(){
        this.#updateHappiness();
        this.#updateHunger();
        if(this.#timedown <= 3){ return "ANGRY"}
        else if(this.#timeup >= 7){ return "ANGRY"}
        else if(this.#timedown > 3 && this.#timeup < 7) { return "HAPPY"}
    }
}