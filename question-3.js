// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

// 1.กำหนด function checkPasswordStrength(userPassword) {}
// 2.ต้องเช็คตัวหนังสือใน userPassword ว่ามีกี่ตัว //ลืมว่าต้องเช็คตัวอักษรทีละตัวว่าต้องทำยังไง
// 3.นำมาเปรียบเทียบในเงื่อนไข if else

 function checkPasswordStrength(userPassword){

    for()// เช็คว่าตัวอักษรมีกี่ตัว
        
        {
        if(userPassword > 10){
            return Strong;
        }else if (userPassword > 6 && userPassword < 10){
            return Medium;
        }else if (userPassword < 6){
            return Weak;
        }
    }
 }

    // checkPasswordStrength();
    // console.log(checkPasswordStrength(userPassword));