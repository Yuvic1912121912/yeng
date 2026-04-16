using System;
using System.Runtime.InteropServices.JavaScript;

partial class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
        Console.WriteLine("This is a test of the .NET 10.0 runtime in WebAssembly.");
        Console.WriteLine("The current date and time is: " + DateTime.Now);

    }
    [JSExport]
    static string test()
    {
        Console.WriteLine("test was called from js");
        Console.WriteLine("The current date and time is: " + DateTime.Now);
        Console.WriteLine("type something into console");
        string input = Console.ReadLine();
        Console.WriteLine("you typed: " + input);
        return input;
    }
}