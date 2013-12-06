using System;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Class1
    {
        private readonly string secrectValue = "OMG! Totaly Secerect Information!";

        public string getSecretValue(int secretKey)
        {
            if (secretKey == 1234)
            {
                return secrectValue + Environment.NewLine;
            }

            return "No secrets for you!" + Environment.NewLine;
        }
    }
}





        //public async Task<object> getSecretValueFromNode(int secretKey)
        //{
        //    //await Task.Delay(1000);
        //    return getSecretValue(secretKey);
        //}