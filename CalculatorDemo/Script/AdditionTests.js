Calculator = require("CalculatorBase");
GeneralHelper = require("GeneralHelper");
Operands = require("Operands");
Operators = require("Operators");


function AdditionTests ()
{
    GeneralHelper.TestSetup();
    ShouldAddTwoNumbers();
    ShouldAddThreeNumbers();
    GeneralHelper.TestCleanup();
}

function ShouldAddTwoNumbers()
{
    Operands.ClickNumberKey(5);
    Operators.AddKey().Click();
    Operands.ClickNumberKey(1);
    Operators.EqualKey().Click();
    let sum = Calculator.Results();
    if(sum == "6")
    {
        Log.Checkpoint("Success! 5 + 1 is 6.");
    } else
    {
        Log.Error("Calculator broken, 5+1 should equal 6.");
    }
}

function ShouldAddThreeNumbers()
{

    Log.Warning("This is not yet implemented!");
}