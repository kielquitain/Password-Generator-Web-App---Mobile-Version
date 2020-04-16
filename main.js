
//functionality 
const passwordArea = document.querySelector(".passwordArea");
const lowercaseNums = document.querySelector("#lower");
const uppercaseNums = document.querySelector("#upper");
const specialCharNums = document.querySelector("#special");


document.getElementById("passwordBtn").addEventListener("click", generatePassword);

function generatePassword(e) {
    e.preventDefault();
    const LN = lowercaseNums.value;
    const UN = uppercaseNums.value;
    const SC = specialCharNums.value;

    if(LN === '' || UN === '' || SC === ''){
        alert('Please complete all fields');
    }
    else {
        //make an object of lowercase, uppercase, specialChar
        const lowercaseObj = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const uppercaseObj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const specialCharObj = '!@#$%^&*()_+}{":?><~1234567890'.split('');
        //convert to array
        const lowercase = Object.values(lowercaseObj);
        const uppercase = Object.values(uppercaseObj);
        const specialChar = Object.values(specialCharObj);

        let allLowerCase = '';
        let allUpperCase = '';
        let allSpecialChar = '';
        let generatedPassword = '';
        //lowercase 
        for (let i = 1; i <= LN; i++) {
            randomLC = lowercase[Math.floor(Math.random() * lowercase.length)];
            allLowerCase+=randomLC;
        }
        console.log(allLowerCase.length);

        //upercase 
        for (let i = 1; i <= UN; i++) {
            randomLC = uppercase[Math.floor(Math.random() * uppercase.length)];
            allUpperCase+=randomLC;
        }
        console.log(allUpperCase.length);

        //specialChar 
        for (let i = 1; i <= SC; i++) {
            randomLC = specialChar[Math.floor(Math.random() * specialChar.length)];
            allSpecialChar += randomLC;
        }
        console.log(allSpecialChar.length);

        temp = allLowerCase + allUpperCase + allSpecialChar;
        console.log(typeof temp);
        const temp2 = temp.split('');
        
        for (let i = 1; i <= temp2.length; i++) {
            randomLC = temp2[Math.floor(Math.random() * temp2.length)];
            generatedPassword += randomLC;
        }
        console.log(generatedPassword, generatedPassword.length);

        passwordArea.classList.add('generatedPass');
        passwordArea.innerHTML =   'Password: '+generatedPassword;
        generatedPassword = '';
        
        }
}
   
