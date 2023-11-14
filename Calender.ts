import {CalenderAbstract}  from './CalenderAbstract';


/*
   @Class: Calender 
   @Description: Create a calender table with Javascript native object
   @Output: Factory function
*/

export class Calender extends CalenderAbstract {
   constructor(public date: Date){
      super() //inheritance 
   }

   today: Date = this.date;
    
   dayList: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   firstDayOfMonth:string

   /*
      @Method: days
      @Description: Total days in a months
      @Output: Number
   */
   get days():number {
      this.date.setDate(1);
      this.date.setMonth(this.date.getMonth() + 1);
      this.date.setDate(this.date.getDate() - 1);
      return this.date.getDate();
   }

   /*
      @Method: rowHeader
      @Description: Generate the Table Head 
      @Output: String
   */
   get rowHeader():string {
      return this.dayList.map( value => {
      return `<td>${value.charAt(0)}</td>`
      }).join('');
   }

   
   /*
      @Method: getIndexOfFirstDate
      @Description: Find the index of 1st date of months
      @Output: Number
   */
   getIndexOfFirstDate():number {
     this.date.setDate(1);
     this.firstDayOfMonth = this.date.toLocaleString("en-US", {weekday: 'long'});
     return this.dayList.indexOf(this.firstDayOfMonth);    
   }
}
