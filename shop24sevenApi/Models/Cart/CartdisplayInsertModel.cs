using System.Text.Json.Serialization;

namespace shop24sevenApi.Models.Cart;

public class CartdisplayInsertModel
{
    [JsonPropertyName("cartId")]
    public int CartId { get; set; }

    [JsonPropertyName("cartUniqueId")]
    public string? CartUniqueId {get; set;}

    [JsonPropertyName("userName")]
    public string? UserName {get; set;}

    [JsonPropertyName("productId")]
    public int ProductId {get; set;}

    [JsonPropertyName("productName")]
    public string? ProductName {get; set;}

    [JsonPropertyName("price")]
    public decimal Price {get; set;}

    [JsonPropertyName("image")]
    public string? Image {get; set;}

    [JsonPropertyName("quantity")]
    public int Quantity {get; set;}
}
