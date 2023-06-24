var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balance) {
        this.balanceInit = 0;
        this.balanceInit = balance;
    }
    SonAccount.prototype.oneDeposit = function (amountDeposit) {
        this.balanceInit += amountDeposit;
        var deposit = "\u00E8 stato depositato ".concat(amountDeposit, ", nuovo saldo: ").concat(this.balanceInit);
        console.log(deposit);
    };
    SonAccount.prototype.oneWithDraw = function (amountWithdraw) {
        if (amountWithdraw > this.balanceInit) {
            console.log('credito insufficiente per effettuare l operazione');
        }
        else {
            this.balanceInit -= amountWithdraw;
            var withdraw = "\u00E8 stato prelevato ".concat(amountWithdraw, ", nuovo saldo: ").concat(this.balanceInit);
            console.log(withdraw);
        }
    };
    return SonAccount;
}());
var sonAccount = new SonAccount(1000);
console.log("🚀", sonAccount);
sonAccount.oneDeposit(500);
sonAccount.oneWithDraw(700);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function (nYears) {
        var years = nYears;
        for (var i = 0; i <= years; i++) {
            this.balanceInit += ((this.balanceInit / 100) * 10) * i;
            var interest = "interesse anno ".concat(i, ": ").concat(((this.balanceInit / 100) * 10) * i);
            console.log(interest);
        }
    };
    return MotherAccount;
}(SonAccount));
var motherAccount = new MotherAccount(2000);
console.log("🚀", motherAccount);
motherAccount.oneDeposit(100);
motherAccount.oneWithDraw(500);
motherAccount.addInterest(5);
console.log("🚀", motherAccount);
