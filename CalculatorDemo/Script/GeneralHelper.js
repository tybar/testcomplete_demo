function TestSetup()
{
    TestedApps.calc.Run();
    
    if(Sys.WaitProcess("Microsoft.WindowsCalculator", "5000").Exists)
    {
        Log.Message("Calculator successfully started!");
        return true;
    } else 
    {
        Log.Error("Calculator did not start in time.");
        return false;
    }
}

function TestCleanup()
{
    if(TestedApps.calc.Close())
    {
        Log.Message("Calculator successfully closed!");
        return true;
    }
    
    TestedApps.calc.Terminate();
    
    Delay(2000);
    
    if(!Sys.WaitProcess("Microsoft.WindowsCalculator", "5000").Exists)
    {
        Log.Message("Calculator successfully terminated!");
        return true;
    } else
    {
        Log.Error("Calculator failed to close.");
        return false;
    }
}

module.exports = 
{
TestSetup,
TestCleanup
}