Calculator = require("CalculatorBase");

function GetNumberKey(numeral)
{
    let automationId = "num" + numeral + "Button";

    return Calculator.MainWindow().Find("AutomationId", automationId, 5);
}

function ClickNumberKey(numeral)
{
    GetNumberKey(numeral).Click();
}

exports.GetNumberKey = GetNumberKey;
exports.ClickNumberKey = ClickNumberKey;