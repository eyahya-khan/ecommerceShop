using Microsoft.AspNetCore.Mvc;
using shop24sevenApi.Data;
using shop24sevenApi.Models.Signup;

namespace shop24sevenApi.Controllers;

[ApiController]
[Route("[controller]")]
public class SignupController : ControllerBase
{
    private readonly ProductsContext _context;
    public SignupController(ProductsContext context) => _context = context;

    [HttpGet]
    public IActionResult Login(string UserName, string Password)
    {
        var depPass = _context.TblSignup?.FirstOrDefault(item => item.UserName == UserName);
        if (depPass == null) return Ok();
        var depPassword = DecryptString(depPass.Password == null ? "" : depPass.Password);

        int result = 1;
        if(depPassword == Password)
        {
            result = 1;
        }else{
            result = 0;
        }
        return Ok(result);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        if (_context.TblSignup == null) return Ok();
        var getDataById = _context.TblSignup.Find(id);
        return Ok(getDataById);
    }

    [HttpPost]
    public async Task<IActionResult> Add(Models.Cart.SignupInsertModel request)
    {
        int result = 1;
        var isUserExist = _context.TblSignup?.FirstOrDefault(item => item.UserName == request.UserName);
        if (isUserExist == null)
        {
         var encrptPassword = EnryptString(request.Password == null ? "" : request.Password);
        var simpleModel = new Signup()
        {
            UserName = request.UserName,
            Email = request.Email,
            Password = encrptPassword,
            ConfirmPassword = request.ConfirmPassword,
        };
        _context.TblSignup?.Add(simpleModel);
        await _context.SaveChangesAsync();   
        }
        
        else
        {
        var depPassword = DecryptString(isUserExist.Password == null ? "" : isUserExist.Password);
        if(depPassword == request.Password)
        {
            result = 1;
        }else{
            result = 0;
        }
        }
        return Ok(result);
    }

    public string DecryptString(string encrString)
    {
        byte[] b;
        string decrypted;
        try
        {
            b = Convert.FromBase64String(encrString);
            decrypted = System.Text.ASCIIEncoding.ASCII.GetString(b);
        }
        catch (FormatException)
        {
            decrypted = "";
        }
        return decrypted;
    }

    public static string EnryptString(string strEncrypted)
    {
        byte[] b =  System.Text.ASCIIEncoding.ASCII.GetBytes(strEncrypted);
        string encrypted = Convert.ToBase64String(b);
        return encrypted;
    }


    [HttpPut("{id}")]
    public async Task<IActionResult> update(int id, Models.Cart.SignupUpdateModel updateModel)
    {
        if (_context.TblSignup == null) return NotFound();
        var entitiy = _context.TblSignup.FirstOrDefault(item => item.SigninId == id);

        if (entitiy != null)
        {
            entitiy.UserName = updateModel.UserName;
            entitiy.Email = updateModel.Email;
            entitiy.Password = updateModel.Password;
            entitiy.ConfirmPassword = updateModel.ConfirmPassword;
            await _context.SaveChangesAsync();
        }
        return Ok(_context.TblSignup);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleteModel = new Signup() { SigninId = id };
        if (_context.TblSignup == null) return NotFound();
        _context.TblSignup.Remove(deleteModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblSignup);
    }
}