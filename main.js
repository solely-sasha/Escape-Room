const readline = require('readline-sync');
const name = readline.question('What is your name? ');

console.log(`${name}, you must find the key to escape the room. Good luck`);

choices = ['put hand in hole', 'find the key', 'open the door'];
index = readline.keyInSelect(choices, 'what is your move?');




function escapeRoom() {

            if (index === 0) {
                console.log(`you chose ${choices[0]}, sorry, you die`);

        
             
            } else if (index === 1) {

                console.log('congratulations, you found the key. You may leave');
            
              

            } else if (index === 2) {
            
                     console.log("you're going to have to find the key to open the door");
                     index = readline.keyInSelect(choices, 'what is your move?');
               escapeRoom()
               
         
            }

            }


        



escapeRoom()