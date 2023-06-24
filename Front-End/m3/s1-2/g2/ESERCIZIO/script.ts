class SonAccount {
    public balanceInit: number = 0;
    constructor(balance: number) {
        this.balanceInit = balance;
    }
    public oneDeposit(amountDeposit: number):void{
        this.balanceInit += amountDeposit;
        let deposit: string = `è stato depositato ${amountDeposit}, nuovo saldo: ${this.balanceInit}`;
        console.log(deposit)
    }
    public oneWithDraw(amountWithdraw: number):void{
        if (amountWithdraw > this.balanceInit) {
            console.log('credito insufficiente per effettuare l operazione');
        } else {
            this.balanceInit -= amountWithdraw;
            let withdraw: string = `è stato prelevato ${amountWithdraw}, nuovo saldo: ${this.balanceInit}`;
            console.log(withdraw)
        }
    }
}

let sonAccount:SonAccount = new SonAccount(1000);
console.log("🚀", sonAccount)
sonAccount.oneDeposit(500);
sonAccount.oneWithDraw(700);


class MotherAccount extends SonAccount {
    constructor(balanceInit: number){
        super(balanceInit);
    }
    public addInterest(nYears: number):void{
        let years: number = nYears;
        for (let i:number = 0; i <= years; i++){
            this.balanceInit += ((this.balanceInit / 100) * 10) * i;
            let interest: string = `interesse anno ${i}: ${((this.balanceInit / 100) * 10) * i}`;
            console.log(interest)
        }
    }
}

let motherAccount:MotherAccount = new MotherAccount(2000);
console.log("🚀", motherAccount)

motherAccount.oneDeposit(100);
motherAccount.oneWithDraw(500);
motherAccount.addInterest(5);
console.log("🚀", motherAccount)




