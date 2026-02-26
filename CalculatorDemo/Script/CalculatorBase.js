function MainWindow()
{
    let calcProcess = Sys.WaitProcess("Microsoft.WindowsCalculator", "5000");
    
    return calcProcess.Find("WndCaption", "Calculator", 5);
}

function Results()
{
    return MainWindow().Find("AutomationId", "NormalOutput", 5).Text;
}

exports.MainWindow = MainWindow;
exports.Results = Results;