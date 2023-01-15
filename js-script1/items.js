class ItemConstructor {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    createItem(name) {
        return this(name);
    }
}

export{ItemConstructor}
