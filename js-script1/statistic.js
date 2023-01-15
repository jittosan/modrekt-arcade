class Statistic {
    constructor(internPoint = -1, socialLife = -1, CAP = 0) {
        this.internPoint = internPoint;
        this.socialLife = socialLife;
        this.CAP = CAP;
    }

    updateScore(item) {
        if (item.getName() == "intern") {
            this.internPoint += 1;
        } else if (item.getName() == "socializing") {
            this.socialLife += 1;
        } else if (item.getName() == "entertainment") {
            this.CAP -= 1;
        }
        return true;
    }

    getScores() {
        const scores = [this.internPoint, this.socialLife, this.CAP];
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