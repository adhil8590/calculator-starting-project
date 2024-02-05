function buttonClick(val)
{
    document.getElementById("screen").value += val
}   

function clearNum()
{
    document.getElementById("screen").value = ""
}
function resultClick()
{
    var ans = document.getElementById("screen").value
    var result = eval(ans)
    document.getElementById("screen").value = result
}