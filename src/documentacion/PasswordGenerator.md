

# Documentacion about PasswordGenerator.js

## randomLetters()

Return a random letter of a array wich contein ABC letters.

I use (Math.round(Math.random()*(letters.length-1) for select one letter among all.

   randomLetters(){

        let letters = ["a","b","c","d","e","f","g","h","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

        let letter = letters[(Math.round(Math.random()*(letters.length-1)))]
        console.log(letter);

        return letter;

    }

## generar() method

this method call randomNumbers and randomLetters method and mix both inside of array, continue putting random number and letter inside of array until it have 8 digits and then update state.


    generar(){
        let array = [];
        let number = this.randomNumbers();
        let letter = this.randomLetters();

        for(let i = 0; i<=7; i++){

            // array.push(number);
            // array.push(letter);
            array[i] = number;
            i++;
            array[i] = letter;
            number = this.randomNumbers();
            letter = this.randomLetters();
            
        }

        this.setState({
            password: array,
        })
    }

### what problem have this method?

In my opinion, the loop is not right, dont like "i++" among "Arra[i] = number" and "Arra[i] = letter" but for now it give the result i need.

The reason for have "i++" among charge array is the last charge dont re-write content of each position. 

### Some limitacion

- For now the password that return this method dont have a uppercase letter.
- Always have 8 digits
- The orden of numbers and letter is always the same.

### What can be inproved?

- Give a bette name at array.
- look one way more efficient of charge array.
- Mix array content for letter and number dont have a position difined



