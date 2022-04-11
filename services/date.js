export const uniqueDates = (taks) =>{
    const unique = [];
    taks.forEach((taskRecibida) => {
        if (!unique.includes(taskRecibida.dateFormat))
        {
            unique.push(taskRecibida.dateFormat);
        }
    });
    return unique;
};

export const orderDates =  (dates) => {
    return dates.sort((a,b) =>{
        const firtDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firtDate - secondDate;
    });
}