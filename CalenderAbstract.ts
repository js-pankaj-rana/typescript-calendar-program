export abstract class CalenderAbstract {

    abstract date:Date
    abstract today:Date
    abstract get days():number
    abstract get rowHeader():string
    abstract getIndexOfFirstDate():number

    /*
        @Method: twoDimensionArray
        @Description: Calculation of days and create two dimensional array
        @Output: number of Arrays within Array
    */


    get twoDimensionArray(): number[][]{

        let dayIndex = this.getIndexOfFirstDate() === 0 ? 0 : 0 - this.getIndexOfFirstDate();

        // Day Index would start from 0, and incase of any positive value 
        // it converts positive to negative value and then start from negative 
        // count


        // Setting default array data type
        const arr: number[][] = [];

        // Iteration as per max weeks within a month
        for(let i = 0; i <= 5; i++){

            if(dayIndex > this.days){
                // if day index count is greater the total number of days
                // in a month then for loop get breaks here.

                //throw out of for loop;
                break;
            }

            // Setting default array data type for two dimension 
            arr[i] = [];

            // Maximum possible column in a month table. 
            // You may keep it 6.
            const maxPossibleColumnInMonth = (this.days + this.days % 7) + Math.floor(Math.round(this.days / 7));

            for(
                let j = dayIndex;
                j < maxPossibleColumnInMonth;
                j++){

                    if(arr[i].length === 7){
                    // if two dimensional array length is equal to 7
                    // then break this child loops
                        break;
                    }
                    arr[i].push(j);
                    // Increment the day index.
                    dayIndex++;
            }
        }
       // Getting back the two dimensional number array.
       return arr;
   } 

    /*
        @Method: generateHtmlString
        @Description: Generate html template for two dimensional array
        @Output: String
    */

    generateHtmlString():string{
        const activeDate = this.today.getDate() - 1;

        return this.twoDimensionArray.map((collection: number[], rowIndex: number) => {
            return `<tr data-row-index="row-${rowIndex}">
            ${collection.map( (value: number, index:number) => {
                // console.log("value+++", value);

                return `<td class="${activeDate === value ? "active" : ""}" 
                data-key="someKey-${rowIndex}-${index}"
                > 
                    ${(value < 0 || value > this.days - 1) ? "" : value + 1 }    
                </td>`
            }).join('')
        }
        </tr>`
        }).join('')
    }

    generateMontHtmlString():string {
        const monthsName = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"];
        const displayMonth = monthsName[this.today.getMonth()];

        return `<tr><th colspan="7">${displayMonth}</th></tr>`
    }
}
