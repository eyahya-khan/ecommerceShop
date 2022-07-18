using System.Text.Json.Serialization;

namespace shop24sevenApi.Models.Cart;

public class CartDetailsInsertModel
{
    [JsonPropertyName("cartDetailsId")]
    public int CarDetailsId { get; set; }

    [JsonPropertyName("cartUniqueId")]
    public string? CartUniqueId {get; set;}

    [JsonPropertyName("productId")]
    public int ProductId {get; set;}

    [JsonPropertyName("quantity")]
    public int Quantity {get; set;}
}
