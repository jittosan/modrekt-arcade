class Statistic {
    constructor(socialLife = -10, CAP = 0, health = 0, love = -3) {
        this.socialLife = socialLife;
        this.CAP = CAP;
        this.heath = health;
        this.love = love;
    }
    
    getListOfScore() {
        return [sociallife, CAP, health, love];
    }
    
    getHighest() {
        this.indexOf(Math.max(this.getListofScores()));
    }
    
    getLowest() {
        this.indexOf(Math.min(this.getListOfScore()));
    }

    updateScore(item) {
        if (item.getName() == "socialLife") {
            this.socialLife += 1;
            this.CAP -= 0.2;
            this.health -= 1;
        } else if (item.getName() == "CAP") {
            this.CAP += 1;
            this.love -= 1;
            this.socialLife -= 0.5;
        } else if (item.getName() == "health") {
            this.health += 1;
            this.CAP -= 0.1;
        } else if (item.getName() == "love") {
            this.love += 1;
            this.CAP -= 0.5;
        } 
        return true;
    }

    getEnding() {
        //high cap
        if (this.getHighest() == 1) {
            //low lovelife or social life
            if (this.getLowest() == 2 || this.getLowest() == 0) {
                return 1;
            }
            // low health
            return 2;
        } else if (this.getLowest() == 1) {
            //low cap, no job
            return 3;
        } else {
            //normal ending
            return 4;
        }
    }
}

class Character extends Statistic {
    constructor(position = 1) {
        super()
        this.position = position;
    }
    
    getPosition() {
        return this.position;
    }
}

export{Character}
