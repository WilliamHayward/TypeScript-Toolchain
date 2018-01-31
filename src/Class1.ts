/**
 * @author: William Hayward
 */
export class Class1 {
    protected message: string;
    constructor(message: string) {
        this.message = message;
    }

    public print(): void {
        console.log('Class1: ' + this.message);
    }
}
