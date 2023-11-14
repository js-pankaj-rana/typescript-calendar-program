import { Calender } from "./calender";

const renderHtml = (some:Date): string => {
   const myDate = new Calender(some);   
   return `<div><table>
      <thead>
         ${myDate.generateMontHtmlString()}
         <tr>${myDate.rowHeader}</tr>
      </thead>
      <tbody>
      ${myDate.generateHtmlString()}
      </tbody>
      </table>
      <div>
      `
}

document.body.innerHTML = renderHtml(new Date("2023-11-1"));

window.setInterval( () => {

   document.body.innerHTML =  renderHtml(new Date());
   
}, 1000)
