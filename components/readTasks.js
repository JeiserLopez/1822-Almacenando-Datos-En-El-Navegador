import { createTask } from "./addtask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";


export const readTask = () =>{

    console.log(uuid.v4());

    const list = document.querySelector("[data-list]");

    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    
    const dates = uniqueDates(taskList);
    const order = orderDates(dates);

    dates.forEach(datesRecibidos => {
        console.log(datesRecibidos);
        const dateMoment = moment(datesRecibidos,"DD/MM/YYYY");
        list.appendChild(dateElement(datesRecibidos));
        taskList.forEach( (task) => {
            const taskDate = moment(task.dateFormat,"DD/MM/YYYY");
            const diferente = dateMoment.diff(taskDate);
            if (diferente === 0){
                list.appendChild(createTask(task));
            }
        });
       
    }); 

}