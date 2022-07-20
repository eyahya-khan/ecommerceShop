using System.Text.Json.Serialization;

namespace shop24sevenApi.Models.Cart;

public class SignupInsertModel
{
    [JsonPropertyName("signinId")]
    public int SigninId { get; set; }

    [JsonPropertyName("userName")]
    public string? UserName {get; set;}

     [JsonPropertyName("email")]
    public string? Email {get; set;}

     [JsonPropertyName("password")]
    public string? Password {get; set;}
    
     [JsonPropertyName("confirmPassword")]
    public string? ConfirmPassword {get; set;}
}