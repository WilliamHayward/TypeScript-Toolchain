/**
 * @author: William Hayward
 */
import {Class1} from './Class1';
export class Class2 extends Class1 {
    public print(): void {
        console.log('Class2: ' + this.message);
    }
}
