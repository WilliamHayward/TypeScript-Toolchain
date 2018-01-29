/**
 * @author: William Hayward
 */
export class Class2 {
    private message: string;
    constructor(message: string) {
        this.message = message;
    }

    public print(): void {
        console.log(this.message);
    }
}
