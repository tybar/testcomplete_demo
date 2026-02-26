Calculator = require("CalculatorBase");

function GetOperator(operatorId)
{
    return Calculator.MainWindow().Find("AutomationId", operatorId, 5);
}

function AddKey()
{
    return GetOperator("plusButton");
}

function EqualKey()
{
    return GetOperator("equalButton");
}

exports.AddKey = AddKey;
exports.EqualKey = EqualKey;