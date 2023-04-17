export const validateInput = function(input:string) 
{
    const forbiddenInput = /[\\\^\-\][?$"(){}]/
    return !forbiddenInput.test(input);
}