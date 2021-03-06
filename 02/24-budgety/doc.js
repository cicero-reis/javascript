/*
 Start: 77. Implementing the module Pattern
 
    const BudgetController = (function() {

        // Private
        const x = 10
        
        const add = function(a) {
            return x * a
        }

        // Public
        return {
            publicTest: function(b) {
                return add(b)
            }
        }

    })()

    const UIController = (function() {

        // Some code

    })() 

    const Controller = (function(BudgetCtrl, UICtrl) {
        
        // Private
        const z = BudgetCtrl.publicTest(20)

        // Public
        return {
            anotherPublic: function() {
                console.log(z)
            }
        }

    })(BudgetController, UIController) 

* End: 77. Implementing the module Pattern 

*/

/** Ok.......
 * Start: 78. Setting up the First Event Listeners
     
    //BUGET CONTROLLER
    
    const BudgetController = (function() {

    })()

    //UI CONTROLLER
    
    const UIController = (function() {

        
    })() 

    // GLOBAL APP CONTROLLER

    const Controller = (function(BudgetCtrl, UICtrl) {

        const ctrlAddItem = function() {

            // 1. Get the field input data

            // 2. Add the item to the Budget controller

            // 3. Add the item to the UI

            // 4. Calculate the budget

            // 5. Display the budget on the UI

            console.log('It works!')

        }

        document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            } 
        })

    })(BudgetController, UIController) 

* End: 78. Setting up the First Event Listeners 
*/

/** Ok....
 * Start: 79. Reeading input Data
 
    // BUGET CONTROLLER
    const BudgetController = (function() {

    })()

    // UI CONTROLLER

    const UIController = (function() {

        const DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
        }

        return {
            getInput: function() {
                return {
                    type: document.querySelector(DOMstrings.inputType).value,
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: document.querySelector(DOMstrings.inputValue).value,
                }
            },
            getDOMstrings: function() {
                return DOMstrings
            }       
        }
    })() 

    //GLOBAL APP CONTROLLER
    
    const Controller = (function(BudgetCtrl, UICtrl) {

        const DOM = UICtrl.getDOMstrings()

        const ctrlAddItem = function() {

            // 1. Get the field input data
            const input = UICtrl.getInput()
            console.log(input)

            // 2. Add the item to the Budget controller

            // 3. Add the item to the UI

            // 4. Calculate the budget

            // 5. Display the budget on the UI

        }

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            } 
        })

    })(BudgetController, UIController) 

* End: 79. Reeading input Data
*/

/** Ok.......
 * Start: 80. Creating an Initialization Function
 
    //BUGET CONTROLLER
    
    const BudgetController = (function() {

    })()

    // UI CONTROLLER

    const UIController = (function() {

        const DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
        }

        return {
            getInput: function() {
                return {
                    type: document.querySelector(DOMstrings.inputType).value,
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: document.querySelector(DOMstrings.inputValue).value,
                }
            },
            getDOMstrings: function() {
                return DOMstrings
            }       
        }
    })() 

    //GLOBAL APP CONTROLLER

    const Controller = (function(BudgetCtrl, UICtrl) {

        const setupEventListeners = function() {

            const DOM = UICtrl.getDOMstrings()

            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

            document.addEventListener('keypress', function(event) {

                if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem()
                } 
            })
        }


        const ctrlAddItem = function() {

            // 1. Get the field input data
            const input = UICtrl.getInput()

            // 2. Add the item to the Budget controller

            // 3. Add the item to the UI

            // 4. Calculate the budget

            // 5. Display the budget on the UI

        }
addEventListener
        return {
            init: function() {
                setupEventListeners()
            }
        }

    })(BudgetController, UIController) 


    Controller.init()

* End: 80. Creating an Initialization Function
*/

/**
 * Start: 81. Creating Income and Expenses Function Constructors
 
//BUGET CONTROLLER

const BudgetController = (function() {

    const Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    const Income = (function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    })

    let allExpenses = []
    let allIncomes = []
    let totalExpenses = 0

    const data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }

    }

})()

// UI CONTROLLER
 
const UIController = (function() {

    const DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },
        getDOMstrings: function() {
            return DOMstrings
        }       
    }
})() 

// GLOBAL APP CONTROLLER

const Controller = (function(BudgetCtrl, UICtrl) {

    const setupEventListeners = function() {

        const DOM = UICtrl.getDOMstrings()

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            } 
        })
    }


    const ctrlAddItem = function() {

        // 1. Get the field input data
        const input = UICtrl.getInput()

        // 2. Add the item to the Budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    return {
        init: function() {
            setupEventListeners()
        }
    }

})(BudgetController, UIController) 


Controller.init()

* Start: 81. Creating Income and Expenses Function Constructors

*/

/**
 *  Start: 82. Adding a New to Our BudgetController

// BUGET CONTROLLER
const BudgetController = (function() {

    const Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    const Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    let allExpenses = []
    let allIncomes = []
    let totalExpenses = 0

    const data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {

        addItem: function(type, des, val) {
            let newItem, ID

            // [1 2 3 4 5], next ID = 6
            // [1 2 4 6 8], next ID = 9
            // ID = last ID = 1

            // Create new ID
            if(data.allItems[type].length > 0 ) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0
            } 

            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
                data.allItems[type].push(newItem)
                return newItem
            }

            if (type === 'inc') {
                newItem = new Income(ID, des, val)
                data.allItems[type].push(newItem)
                return newItem
            }
        },

        testing: function() {
            console.log(data)
        }

    }

})()

// UI CONTROLLER
const UIController = (function() {

    const DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },
        getDOMstrings: function() {
            return DOMstrings
        }       
    }
})() 

// GLOBAL APP CONTROLLER
const Controller = (function(BudgetCtrl, UICtrl) {

    const setupEventListeners = function() {

        const DOM = UICtrl.getDOMstrings()

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            } 
        })
    }

    const ctrlAddItem = function() {

        let input, newItem
        // 1. Get the field input data
        input = UICtrl.getInput()

        // 2. Add the item to the Budget controller
        newItem = BudgetCtrl.addItem(input.type, input.description, input.value)

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    return {
        init: function() {
            setupEventListeners()
        }
    }

})(BudgetController, UIController) 


Controller.init()

* End: 82. Adding a New to Our BudgetController
*/

/**
 * Start: 83. Adding a New Item Our Budget Controller
    
    // BUGET CONTROLLER
    var BudgetController = (function() {

        var Expense = function(id, description, value) {
            this.id = id
            this.description = description
            this.value = value
        }

        var Income = function(id, description, value) {
            this.id = id
            this.description = description
            this.value = value
        }

        var allExpenses = []
        var allIncomes = []
        var totalExpenses = 0

        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: 0,
                inc: 0
            }
        }

        return {

            addItem: function(type, des, val) {
                var newItem, ID

                // [1 2 3 4 5], next ID = 6
                // [1 2 4 6 8], next ID = 9
                // ID = last ID = 1

                // Create new ID
                if(data.allItems[type].length > 0 ) {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1
                } else {
                    ID = 0
                } 

                if (type === 'exp') {
                    newItem = new Expense(ID, des, val)
                    data.allItems[type].push(newItem)
                    return newItem
                }

                if (type === 'inc') {
                    newItem = new Income(ID, des, val)
                    data.allItems[type].push(newItem)
                    return newItem
                }
            },

            testing: function() {
                console.log(data)
            }

        }

    })()

    // UI CONTROLLER
    var UIController = (function() {

        var DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
            incomeContainer: '.income__list',
            expensesContainer: '.expenses__list'
        }

        return {
            getInput: function() {
                return {
                    type: document.querySelector(DOMstrings.inputType).value,
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: document.querySelector(DOMstrings.inputValue).value,
                }
            },

            addListItem: function(obj, type) {

                var html, newHtml

                // Create HTML string with placeholder text
                if (type === 'inc') {
                    element = DOMstrings.incomeContainer
                    html = '<div class="item clearfix" id="income-%id%">' +
                                '<div class="item__description">%description%</div>' +
                                '<div class="right clearfix">' +
                                    '<div class="item__value">%value%</div>' +
                                    '<div class="item__delete">' +
                                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                } else if (type === 'exp') {
                    element = DOMstrings.expensesContainer
                    html = '<div class="item clearfix" id="expense-%id%">' +
                                '<div class="item__description">%description%</div>' +
                                '<div class="right clearfix">' +
                                    '<div class="item__value">%value%</div>' +
                                    '<div class="item__percentage">21%</div>' +
                                    '<div class="item__delete">' +
                                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                }

                // Replace the placeholder text with some actual data
                newHtml = html.replace('%id%', obj.id)
                newHtml = newHtml.replace('%description%', obj.description)
                newHtml = newHtml.replace('%value%', obj.value)

                // Insert the HTML into the DOM
                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
            },

            getDOMstrings: function() {
                return DOMstrings
            }       
        }
    })() 

    // GLOBAL APP CONTROLLER
    var Controller = (function(BudgetCtrl, UICtrl) {

        var setupEventListeners = function() {

            var DOM = UICtrl.getDOMstrings()

            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

            document.addEventListener('keypress', function(event) {

                if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem()
                } 
            })
        }

        var ctrlAddItem = function() {

            var input, newItem
            // 1. Get the field input data
            input = UICtrl.getInput()

            // 2. Add the item to the Budget controller
            newItem = BudgetCtrl.addItem(input.type, input.description, input.value)

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type)

            // 4. Calculate the budget

            // 5. Display the budget on the UI

        }

        return {
            init: function() {
                setupEventListeners()
            }
        }

        })(BudgetController, UIController) 


        Controller.init()
   
  
* End: 83. Adding a New Item Our Budget Controller

* Start: 84. Clearing Our input Fields    

    // BUGET CONTROLLER
    var BudgetController = (function() {

        var Expense = function(id, description, value) {
            this.id = id
            this.description = description
            this.value = value
        }

        var Income = function(id, description, value) {
            this.id = id
            this.description = description
            this.value = value
        }

        var allExpenses = []
        var allIncomes = []
        var totalExpenses = 0

        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: 0,
                inc: 0
            }
        }

        return {

            addItem: function(type, des, val) {
                var newItem, ID

                // [1 2 3 4 5], next ID = 6
                // [1 2 4 6 8], next ID = 9
                // ID = last ID = 1

                // Create new ID
                if(data.allItems[type].length > 0 ) {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1
                } else {
                    ID = 0
                } 

                if (type === 'exp') {
                    newItem = new Expense(ID, des, val)
                    data.allItems[type].push(newItem)
                    return newItem
                }

                if (type === 'inc') {
                    newItem = new Income(ID, des, val)
                    data.allItems[type].push(newItem)
                    return newItem
                }
            },

            testing: function() {
                console.log(data)
            }

        }

    })()

    // UI CONTROLLER
    var UIController = (function() {

        var DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
            incomeContainer: '.income__list',
            expensesContainer: '.expenses__list'
        }

        return {
            getInput: function() {
                return {
                    type: document.querySelector(DOMstrings.inputType).value,
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: document.querySelector(DOMstrings.inputValue).value,
                }
            },

            addListItem: function(obj, type) {

                var html, newHtml

                // Create HTML string with placeholder text
                if (type === 'inc') {
                    element = DOMstrings.incomeContainer
                    html = '<div class="item clearfix" id="income-%id%">' +
                                '<div class="item__description">%description%</div>' +
                                '<div class="right clearfix">' +
                                    '<div class="item__value">%value%</div>' +
                                    '<div class="item__delete">' +
                                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                } else if (type === 'exp') {
                    element = DOMstrings.expensesContainer
                    html = '<div class="item clearfix" id="expense-%id%">' +
                                '<div class="item__description">%description%</div>' +
                                '<div class="right clearfix">' +
                                    '<div class="item__value">%value%</div>' +
                                    '<div class="item__percentage">21%</div>' +
                                    '<div class="item__delete">' +
                                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                }

                // Replace the placeholder text with some actual data
                newHtml = html.replace('%id%', obj.id)
                newHtml = newHtml.replace('%description%', obj.description)
                newHtml = newHtml.replace('%value%', obj.value)

                // Insert the HTML into the DOM
                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
            },

            clearFields: function() {

                var fields, fieldArr

                fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

                fieldArr = Array.prototype.slice.call(fields)

                fieldArr.forEach(function(current, indice, array) {
                    current.value = ''
                });

                fieldArr[0].focus()

            },

            getDOMstrings: function() {
                return DOMstrings
            }       
        }
    })() 

    // GLOBAL APP CONTROLLER
    var Controller = (function(BudgetCtrl, UICtrl) {

        var setupEventListeners = function() {

            var DOM = UICtrl.getDOMstrings()

            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

            document.addEventListener('keypress', function(event) {

                if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem()
                } 
            })
        }

        var ctrlAddItem = function() {

            var input, newItem
            // 1. Get the field input data
            input = UICtrl.getInput()

            // 2. Add the item to the Budget controller
            newItem = BudgetCtrl.addItem(input.type, input.description, input.value)

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type)

            // 4. Clear the fields
            UICtrl.clearFields()

            // 5. Calculate the budget

            // 6. Display the budget on the UI

        }

        return {
            init: function() {
                setupEventListeners()
            }
        }

    })(BudgetController, UIController) 


    Controller.init()

    // BUGET CONTROLLER
    var BudgetController = (function() {

        var Expense = function(id, description, value) {
            this.id = id
            this.description = description
            this.value = value
        }

        var Income = function(id, description, value) {
            this.id = id
            this.description = description
            this.value = value
        }

        var allExpenses = []
        var allIncomes = []
        var totalExpenses = 0

        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: 0,
                inc: 0
            }
        }

        return {

            addItem: function(type, des, val) {
                var newItem, ID

                // [1 2 3 4 5], next ID = 6
                // [1 2 4 6 8], next ID = 9
                // ID = last ID = 1

                // Create new ID
                if(data.allItems[type].length > 0 ) {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1
                } else {
                    ID = 0
                } 

                if (type === 'exp') {
                    newItem = new Expense(ID, des, val)
                    data.allItems[type].push(newItem)
                    return newItem
                }

                if (type === 'inc') {
                    newItem = new Income(ID, des, val)
                    data.allItems[type].push(newItem)
                    return newItem
                }
            },

            testing: function() {
                console.log(data)
            }

        }

    })()

    // UI CONTROLLER
    var UIController = (function() {

        var DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
            incomeContainer: '.income__list',
            expensesContainer: '.expenses__list'
        }

        return {
            getInput: function() {
                return {
                    type: document.querySelector(DOMstrings.inputType).value,
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: document.querySelector(DOMstrings.inputValue).value,
                }
            },

            addListItem: function(obj, type) {

                var html, newHtml

                // Create HTML string with placeholder text
                if (type === 'inc') {
                    element = DOMstrings.incomeContainer
                    html = '<div class="item clearfix" id="income-%id%">' +
                                '<div class="item__description">%description%</div>' +
                                '<div class="right clearfix">' +
                                    '<div class="item__value">%value%</div>' +
                                    '<div class="item__delete">' +
                                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                } else if (type === 'exp') {
                    element = DOMstrings.expensesContainer
                    html = '<div class="item clearfix" id="expense-%id%">' +
                                '<div class="item__description">%description%</div>' +
                                '<div class="right clearfix">' +
                                    '<div class="item__value">%value%</div>' +
                                    '<div class="item__percentage">21%</div>' +
                                    '<div class="item__delete">' +
                                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                }

                // Replace the placeholder text with some actual data
                newHtml = html.replace('%id%', obj.id)
                newHtml = newHtml.replace('%description%', obj.description)
                newHtml = newHtml.replace('%value%', obj.value)

                // Insert the HTML into the DOM
                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
            },

            clearFields: function() {

                var fields, fieldArr

                fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

                fieldArr = Array.prototype.slice.call(fields)

                fieldArr.forEach(function(current, indice, array) {
                    current.value = ''
                });

                fieldArr[0].focus()

            },

            getDOMstrings: function() {
                return DOMstrings
            }       
        }
    })() 

    // GLOBAL APP CONTROLLER
    var Controller = (function(BudgetCtrl, UICtrl) {

        var setupEventListeners = function() {

            var DOM = UICtrl.getDOMstrings()

            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

            document.addEventListener('keypress', function(event) {

                if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem()
                } 
            })
        }

        var ctrlAddItem = function() {

            var input, newItem
            // 1. Get the field input data
            input = UICtrl.getInput()

            // 2. Add the item to the Budget controller
            newItem = BudgetCtrl.addItem(input.type, input.description, input.value)

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type)

            // 4. Clear the fields
            UICtrl.clearFields()

            // 5. Calculate the budget

            // 6. Display the budget on the UI

        }

        return {
            init: function() {
                setupEventListeners()
            }
        }

    })(BudgetController, UIController) 


    Controller.init()

* End: 84. Clearing Our input Fields    

* Start: 85. Updating the Budger: Controller

    // BUGET CONTROLLER
    var BudgetController = (function() {

        var Expense = function(id, description, value) {
            this.id = id
            this.description = description
            this.value = value
        }

        var Income = function(id, description, value) {
            this.id = id
            this.description = description
            this.value = value
        }

        var allExpenses = []
        var allIncomes = []
        var totalExpenses = 0

        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: 0,
                inc: 0
            }
        }

        return {

            addItem: function(type, des, val) {
                var newItem, ID

                // [1 2 3 4 5], next ID = 6
                // [1 2 4 6 8], next ID = 9
                // ID = last ID = 1

                // Create new ID
                if(data.allItems[type].length > 0 ) {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1
                } else {
                    ID = 0
                } 

                if (type === 'exp') {
                    newItem = new Expense(ID, des, val)
                    data.allItems[type].push(newItem)
                    return newItem
                }

                if (type === 'inc') {
                    newItem = new Income(ID, des, val)
                    data.allItems[type].push(newItem)
                    return newItem
                }
            },

            testing: function() {
                console.log(data)
            }

        }

    })()

    // UI CONTROLLER
    var UIController = (function() {

        var DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
            incomeContainer: '.income__list',
            expensesContainer: '.expenses__list'
        }

        return {
            getInput: function() {
                return {
                    type: document.querySelector(DOMstrings.inputType).value,
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
                }
            },

            addListItem: function(obj, type) {

                var html, newHtml

                // Create HTML string with placeholder text
                if (type === 'inc') {
                    element = DOMstrings.incomeContainer
                    html = '<div class="item clearfix" id="income-%id%">' +
                                '<div class="item__description">%description%</div>' +
                                '<div class="right clearfix">' +
                                    '<div class="item__value">%value%</div>' +
                                    '<div class="item__delete">' +
                                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                } else if (type === 'exp') {
                    element = DOMstrings.expensesContainer
                    html = '<div class="item clearfix" id="expense-%id%">' +
                                '<div class="item__description">%description%</div>' +
                                '<div class="right clearfix">' +
                                    '<div class="item__value">%value%</div>' +
                                    '<div class="item__percentage">21%</div>' +
                                    '<div class="item__delete">' +
                                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                }

                // Replace the placeholder text with some actual data
                newHtml = html.replace('%id%', obj.id)
                newHtml = newHtml.replace('%description%', obj.description)
                newHtml = newHtml.replace('%value%', obj.value)

                // Insert the HTML into the DOM
                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
            },

            clearFields: function() {

                var fields, fieldArr

                fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

                fieldArr = Array.prototype.slice.call(fields)

                fieldArr.forEach(function(current, indice, array) {
                    current.value = ''
                });

                fieldArr[0].focus()

            },

            getDOMstrings: function() {
                return DOMstrings
            }       
        }
    })() 

    // GLOBAL APP CONTROLLER
    var Controller = (function(BudgetCtrl, UICtrl) {

        var setupEventListeners = function() {

            var DOM = UICtrl.getDOMstrings()

            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

            document.addEventListener('keypress', function(event) {

                if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem()
                } 
            })
        }

        var updateBudget = function() {

            // 1. Calculate the budget

            // 2. Return the budget

            // 3. Display the budget on the UI
        }

        var ctrlAddItem = function() {

            var input, newItem

            // 1. Get the field input data
            input = UICtrl.getInput()

            if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

                // 2. Add the item to the Budget controller
                newItem = BudgetCtrl.addItem(input.type, input.description, input.value)
        
                // 3. Add the item to the UI
                UICtrl.addListItem(newItem, input.type)
        
                // 4. Clear the fields
                UICtrl.clearFields()
        
                // 5. Calculate the budget
                updateBudget()
            }


            // 6. Display the budget on the UI

        }

        return {
            init: function() {
                setupEventListeners()
            }
        }

    })(BudgetController, UIController) 


    Controller.init()

    End: 85. Updating the Budger: Controller
 */

/*
Start: 86. Updating the Budget: Budget Controller

// BUGET CONTROLLER
var BudgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    var Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    }

    var allExpenses = []
    var allIncomes = []
    var totalExpenses = 0

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return {

        addItem: function(type, des, val) {
            var newItem, ID

            // [1 2 3 4 5], next ID = 6
            // [1 2 4 6 8], next ID = 9
            // ID = last ID = 1

            // Create new ID
            if(data.allItems[type].length > 0 ) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0
            } 

            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
                data.allItems[type].push(newItem)
                return newItem
            }

            if (type === 'inc') {
                newItem = new Income(ID, des, val)
                data.allItems[type].push(newItem)
                return newItem
            }
        },

        calculateBudget: function() {

            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate ths percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }

            // Expense = 100 and income 300, spent 33.333% = 100/300 = 0.3333 * 100
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage

            };
        },

        testing: function() {
            console.log(data)
        }

    }

})()

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            }
        },

        addListItem: function(obj, type) {

            var html, newHtml

            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer
                html = '<div class="item clearfix" id="income-%id%">' +
                            '<div class="item__description">%description%</div>' +
                            '<div class="right clearfix">' +
                                '<div class="item__value">%value%</div>' +
                                '<div class="item__delete">' +
                                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                '</div>' +
                            '</div>' +
                        '</div>'
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer
                html = '<div class="item clearfix" id="expense-%id%">' +
                            '<div class="item__description">%description%</div>' +
                            '<div class="right clearfix">' +
                                '<div class="item__value">%value%</div>' +
                                '<div class="item__percentage">21%</div>' +
                                '<div class="item__delete">' +
                                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                '</div>' +
                            '</div>' +
                        '</div>'
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', obj.value)

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },

        clearFields: function() {

            var fields, fieldArr

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldArr = Array.prototype.slice.call(fields)

            fieldArr.forEach(function(current, indice, array) {
                current.value = ''
            });

            fieldArr[0].focus()

        },

        getDOMstrings: function() {
            return DOMstrings
        }       
    }
})() 

// GLOBAL APP CONTROLLER
var Controller = (function(BudgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings()

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            } 
        })
    }

    var updateBudget = function() {

        // 1. Calculate the budget
        BudgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = BudgetCtrl.getBudget();

        // 3. Display the budget on the UI
        console.log(budget);
    }

    var ctrlAddItem = function() {

        var input, newItem

        // 1. Get the field input data
        input = UICtrl.getInput()

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. Add the item to the Budget controller
            newItem = BudgetCtrl.addItem(input.type, input.description, input.value)
    
            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type)
    
            // 4. Clear the fields
            UICtrl.clearFields()
    
            // 5. Calculate the budget
            updateBudget()
        }


        // 6. Display the budget on the UI

    }

    return {
        init: function() {
            setupEventListeners()
        }
    }

})(BudgetController, UIController) 


Controller.init()

End: 86. Updating the Budget: Budget Controller

*/

/*
Start: 87. Updating the Budget: UI Controller

// BUGET CONTROLLER
var BudgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    var Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    }

    var allExpenses = []
    var allIncomes = []
    var totalExpenses = 0

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return {

        addItem: function(type, des, val) {
            var newItem, ID

            // [1 2 3 4 5], next ID = 6
            // [1 2 4 6 8], next ID = 9
            // ID = last ID = 1

            // Create new ID
            if(data.allItems[type].length > 0 ) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0
            } 

            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
                data.allItems[type].push(newItem)
                return newItem
            }

            if (type === 'inc') {
                newItem = new Income(ID, des, val)
                data.allItems[type].push(newItem)
                return newItem
            }
        },

        calculateBudget: function() {

            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate ths percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }

            // Expense = 100 and income 300, spent 33.333% = 100/300 = 0.3333 * 100
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage

            };
        },

        testing: function() {
            console.log(data)
        }

    }

})()

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            }
        },

        addListItem: function(obj, type) {

            var html, newHtml

            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer
                html = '<div class="item clearfix" id="income-%id%">' +
                            '<div class="item__description">%description%</div>' +
                            '<div class="right clearfix">' +
                                '<div class="item__value">%value%</div>' +
                                '<div class="item__delete">' +
                                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                '</div>' +
                            '</div>' +
                        '</div>'
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer
                html = '<div class="item clearfix" id="expense-%id%">' +
                            '<div class="item__description">%description%</div>' +
                            '<div class="right clearfix">' +
                                '<div class="item__value">%value%</div>' +
                                '<div class="item__percentage">21%</div>' +
                                '<div class="item__delete">' +
                                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                                '</div>' +
                            '</div>' +
                        '</div>'
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', obj.value)

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },

        clearFields: function() {

            var fields, fieldArr

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldArr = Array.prototype.slice.call(fields)

            fieldArr.forEach(function(current, indice, array) {
                current.value = ''
            });

            fieldArr[0].focus();
        },

        displayBuget: function(obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage = '---';
            }
        },

        getDOMstrings: function() {
            return DOMstrings
        }       
    }
})() 

// GLOBAL APP CONTROLLER
var Controller = (function(BudgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings()

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            } 
        })
    }

    var updateBudget = function() {

        // 1. Calculate the budget
        BudgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = BudgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBuget(budget)
    }

    var ctrlAddItem = function() {

        var input, newItem

        // 1. Get the field input data
        input = UICtrl.getInput()

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. Add the item to the Budget controller
            newItem = BudgetCtrl.addItem(input.type, input.description, input.value)
    
            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type)
    
            // 4. Clear the fields
            UICtrl.clearFields()
    
            // 5. Calculate the budget
            updateBudget()
        }


        // 6. Display the budget on the UI

    }

    return {
        init: function() {
            UICtrl.displayBuget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1 
            });
            setupEventListeners();
        }
    }

})(BudgetController, UIController) 


Controller.init()

End: 87. Updating the Budget: UI Controller
*/