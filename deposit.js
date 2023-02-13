document.getElementById('deposit-button').addEventListener('click',function(){
    const getDepositInput = document.getElementById('deposit-input');
    const getDepositString = getDepositInput.value
    const getDeposit = parseFloat(getDepositString)

    const totalDepositPrevious = document.getElementById('total-deposit');
    const totalDepositPreviousString = totalDepositPrevious.innerHTML;
    const totalDeposit = parseFloat(totalDepositPreviousString)

    const totalDepositNew = getDeposit + totalDeposit

    totalDepositPrevious.innerHTML=totalDepositNew

    getDepositInput.value="";
})