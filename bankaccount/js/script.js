/*eslint-env browser*/
let namebtn = document.querySelector('#nameBtn');
let givebtn = document.querySelector('#giveBtn'); 
let takebtn = document.querySelector('#takeBtn');

window.onload() => {
    let getName = namebtn.addEventListener('click', e => {
        e.preventDefault();
        formname.innerHTML += '<input type="text" id="name" name="yourname" placeholder="your name please"></input>';
        formname.innerHTML +='<input type="submit" value="submit">' 

    });
    console.log(getName);
    let account = (() => {
        let take = () => {
            let takeAmt = prompt('Enter the amount you would like to withdraw: ', '100')
            if (isNaN(parseFloat(takeAmt))) {
                alert('Please enter a numerical value.');
                take();
            } else {
                balance = balance - takeAmt;
                newBalance();
            }

        }
        let give = () => {
            let giveAmt = prompt('enter amount to give', '100')
            if (isNaN(parseFloat(giveAmt))) {
                alert('Please enter a numerical value.');
                give();
            } else {
                balance = balance + parseFloat(giveAmt);
                newBalance();
                console.log(giveAmt);
            }
            
        }

        let newBalance = () => {
            document.getElementById('balance').value = balance;
            return balance;
        }

        let nameHere = () => {
            return owner;
        }
        
        let setName = (target) => {
            owner = prompt('Please enter your name');
            document.getElementById('ownerName').value = owner;
        }
    })

};
