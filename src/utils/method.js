export class Method {

    constructor(name) {
        this.name = name;
        this.params = [];
    }

    add(param, required) {
        if (param || required) {
            this.params.push(param);
        }
    }

    required(...params) {
        for (const param of params) {
            this.add(param, true);
        }
        return this;
    }

    optional(...params) {
        for (const param of params) {
            this.add(param, false);
        }
        return this;
    }

    build(separator) {
        const sep = separator ? ' ' + separator + ' ' : ', ';
        return this.name + '(' + this.params.join(sep) + ')';
    }

}
