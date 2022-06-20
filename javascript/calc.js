class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperator(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.calculate()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    calculate(){
        let calculation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                calculation = prev + current
                break
            case '-':
                calculation = prev - current
                break
            case '÷':
                calculation = prev / current
                break
            case 'x':
                calculation = prev * current
                break
                default:
                    return
        }
        this.currentOperand = calculation
        this.operation = undefined
        this.previousOperand = ''
    }


getDisplayNumber(number){
    const floatNum = parseFloat(number)
    if(isNaN(floatNum)) return ''
    return floatNum.toLocaleString('en')
}

    updateScreen(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else{
            this.previousOperandTextElement.innerText = ''
        }
    }
}


const nums = document.querySelectorAll('[data-number]')
const operators = document.querySelectorAll('[data-operation]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const clear = document.querySelector('[data-all-clear]')
const del = document.querySelector('[data-delete]')
const ans = document.querySelector('[data-ans]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

nums.forEach(button => {
    button.addEventListener("click", (e) => {
        calculator.appendNumber(button.innerText)
        calculator.updateScreen()
    })
})

operators.forEach(button => {
    button.addEventListener("click", (e) => {
        calculator.chooseOperator(button.innerText)
        calculator.updateScreen()
    })
})

ans.addEventListener("click", () => {
    calculator.calculate()
    calculator.updateScreen()
})

clear.addEventListener("click", () => {
    calculator.clear()
    calculator.updateScreen()
})

del.addEventListener("click", () => {
    calculator.delete()
    calculator.updateScreen()
})