export class Person {

    constructor(name: string) {
        this.id = -1;
        this.name = name;
        this.roles = new Array<string>();
    }

    id: number;

    name: string;

    roles: string[];

}
