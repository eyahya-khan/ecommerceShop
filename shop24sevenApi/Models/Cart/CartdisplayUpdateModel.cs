using System.Text.Json.Serialization;

namespace shop24sevenApi.Models.Cart;

public class CartdisplayUpdateModel
{
    [JsonPropertyName("cartId")]
    public int Id { get; set; }
    
    [JsonPropertyName("quantity")]
    public int Quantity {get; set;}
}