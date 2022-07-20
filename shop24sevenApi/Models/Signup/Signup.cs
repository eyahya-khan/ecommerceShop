using System.ComponentModel.DataAnnotations;

namespace shop24sevenApi.Models.Signup;


public class Signup
{
    [Key]
    public int SigninId { get; set; }
    public string? UserName { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
    public string? ConfirmPassword { get; set; }
}