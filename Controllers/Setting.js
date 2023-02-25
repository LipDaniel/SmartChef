module.exports = class Setting{
    
    getCurrentDate(){
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
    
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
    
        const myDate = dd + '/' + mm + '/' + yyyy;
        return myDate;
    }
    Removefile(file){
        const fs = require('fs')
        fs.unlinkSync("C:/xampp/htdocs/SmartChef/public/upload/" + file)
    }

}