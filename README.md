# Secure Password Generator
This project was built in order to get more familiar with javascript, by using ARRAYS to store information and FOR LOOPS to iterate through those arrays randomly and to push that data to the browser/DOM.
## GitHub Pages Link HERE: [Secure Password Generator](https://dusticcus.github.io/M3-Secure-Password-Generator/)
---

## Technologies Utilized:
- HTML
- CSS
- Javascript
---



## General Use:
### Landing Page

<img src="assets\readmeImages\fullpageScreenshot.png" alt="Full page screenshot of the site, with the words 'Password Generator' and a 'Generate Password' button." style="width:500px"/>

1. Click the 'Generate Password' Button: 
    - <img src="assets\readmeImages\generatePasswordButtonScreenshot.png" alt="A closeup screenshot of the 'Generate Password' button." style="width:100px"/>
2. Choose your password generation options (Pass Length, and if you want to use lowercase, uppercase, special, and/or numerical characters)
    - See the Password Options section for more information regarding these settings and validation.
3. Click the Submit Button
    - <img src="assets\readmeImages\chooseSubmitButtonScreenshot.png" alt="A closeup screenshot of the 'Generate Password' button." style="width:200px"/>
4. View the box on the main page to see and copy your new password.
    - <img src="assets\readmeImages\passwordGeneratedScreenshot.png" alt="A closeup screenshot of the 'Generate Password' button." style="width:200px"/>


---
### **Password Options**
<img src="assets\readmeImages\passwordOptionsScreenshot.png" alt="A screenshot of the Password Options modal that appears after clicking the 'Generate Password' button. There include Pass Length number bow, Lowercase, Uppercase, Numerical, and Special checkbox inputs." style="width:500px"/>

- **Pass Length** - sets your new password length.
    -  A number in between 8 and 128. 
        - VALIDATION : YES, see below.
- **Lowercase** - allows lowercase characters to be randomly selected as password characters.
    - a b c d e f g h i j k l m n o p q r s t u v w x y z
        - VALIDATION : YES, see below.
- **Uppercase** - allows uppercase characters to be randomly selected as password characters.
    - A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        - VALIDATION : YES, see below.
- **Numerical** - allows single digit numbers to be selected as password characters.
    - 1 2 3 4 5 6 7 8 9
        - VALIDATION : YES, see below.
- **Special** - allows special characters to be selected as password characters.
    - ! @ # $ % ^ & * ( ) - _ = +
        - VALIDATION : YES, see below.

### **PASS LENGTH VALIDATION :** 
- If less than 8 or more than 128 (or a letter), the submit button will fail and the input will appear red:
    - <img src="assets\readmeImages\incorrectPassLengthProvidedScreenshot.png" alt="MarineGEO circle logo" style="width:500px"/>

### **CHECKBOX VALIDATION :** 
- At least **one** checkbox must be selected in order for the submit button to enable itself:
    - <img src="assets\readmeImages\enabledSubmitButtonScreenshot.png" alt="MarineGEO circle logo" style="width:500px"/>


