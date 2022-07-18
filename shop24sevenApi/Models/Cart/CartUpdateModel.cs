using System.Text.Json.Serialization;

namespace shop24sevenApi.Models.Cart;

public class CartUpdateModel
{
    [JsonPropertyName("cartId")]
    public int Id { get; set; }

    [JsonPropertyName("cartUniqueId")]
    public string? CartUniqueId {get; set;}
    
    [JsonPropertyName("userName")]
    public string? UserName {get; set;}
}