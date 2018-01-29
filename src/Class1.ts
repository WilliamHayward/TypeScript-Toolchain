/**
 * @author: William Hayward
 */
export class Class1 {
    private message: string;
    constructor(message: string) {
        this.message = message;
    }

    public print(): void {
        console.log(this.message);
    }
}
