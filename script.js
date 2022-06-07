
    function add(){
        let number1 = document.getElementById('number1').value; 
        let number2 = document.getElementById('number2').value;
        number1 = Number(number1)
        number2 = Number(number2)
        let result = number1 + number2
        document.getElementById('result').innerHTML = 'Result Addition: '+result    
    }
    function sub(){
        let number1 = document.getElementById('number1').value; 
        let number2 = document.getElementById('number2').value;
        number1 = Number(number1)
        number2 = Number(number2)
        let result = number1 - number2
        document.getElementById('result').innerHTML = 'Result Subtraction: '+result    
    }
    function mul(){
        let number1 = document.getElementById('number1').value; 
        let number2 = document.getElementById('number2').value;
        number1 = Number(number1)
        number2 = Number(number2)
        let result = number1 * number2
        document.getElementById('result').innerHTML = 'Result Multiplication: '+result    
    }
    function div(){
        let number1 = document.getElementById('number1').value; 
        let number2 = document.getElementById('number2').value;
        number1 = Number(number1)
        number2 = Number(number2)
        let result = number1 / number2
        document.getElementById('result').innerHTML = 'Result Division: '+result    
    }
    