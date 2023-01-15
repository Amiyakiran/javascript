class Bank{
    db = {
    1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000,transaction:[] },
    1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000 ,transaction:[]},
    1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000 ,transaction:[]}
  }

  //1. create a function for validate account number. To validate account check
  //if account number in db return true otherwise false
  ValidateAcno(acno){
        return acno in this.db?true:false
  }

  //2. create a function authenticate user using account number and password
  //if both are in db the print 'access granted' otherwise 'permission denied'
  authenticate(acno, password){
    if (this.ValidateAcno(acno)) {
     let upass = this.db[acno]['password']
      if (upass==password) {
        console.log('permission granted');
        return upass==password?true:false
      }
      else{
        console.log("permission denied");
      }
    }
    else{
      console.log("permission denied");
    }
  }

  //3. create a function for balance enquiry
  
   /* balance(acno){
    if(this.ValidateAcno(acno)){
    var balance = this.db[acno]['balance']
    console.log('balance:',balance);
    }
  else{
    console.log('incorrect account number');
  }
}  */
balance(acno, password){
        if (this.authenticate(acno, password)) 
        {
          var balance = this.db[acno]['balance']
          console.log('your account balance is:',balance);
        }
        else{
            console.log("incorrect account number or password");
          }
    } 
  //4. create a function to transfer the amount from one account to another
  transfer(acno1, acno2, amount)
  {
      
      if (this.ValidateAcno(acno1)) {
        if (this.ValidateAcno(acno2)) {
          var balance1 = this.db[acno1]['balance']
          var balance2 = this.db[acno2]['balance']
          console.log('balance of account no: '+acno1+ ' is:',balance1);
          console.log('balance of account no: '+acno2+ ' is:',balance2);

          if (balance1>=amount) {
             balance1 -= amount
             balance2 += amount
             var transaction = {
              to: 1,
              amount:0
              }
              let transaction1= this.db[acno1]['transaction']
              if ("to" in transaction1 && 'amount' in transaction1 ) {
                console.log('present');
            }
            else{
               transaction1.to = acno2
               transaction1.amount = amount
                
               console.log("Account number ",acno1+ " transanction details is: ",transaction1);
            }
            console.log('new balance of account no: '+acno1+ ' is:',balance1);
            console.log('new balance of account no: '+acno2+ ' is:',balance2);

          } 
          else {
            console.log('balance insufficient');
          }
        } else {
          console.log('transaction not possible');
        }
    }
    else{
      console.log('transaction not possible');
    }
  }


        
}
     
  

//objects
var b1 = new Bank()
console.log(b1.ValidateAcno(1001)?'valid account':'invalid');
console.log("--------------------------------------------");
/* var b2 = new Bank() */
/* console.log(b2.authenticate(1001, 1001)); */
b1.authenticate(1001, 1001)
console.log("--------------------------------------------");
/* var b3 = new Bank()
console.log(b3.balance(1001, 1001)); */
b1.balance(1001, 1001)
console.log("--------------------------------------------");
b1.transfer(1000, 1001,100)
console.log("--------------------------------------------");


