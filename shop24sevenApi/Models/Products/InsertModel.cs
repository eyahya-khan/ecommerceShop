using System.Text.Json.Serialization;

namespace shop24sevenApi.Models;

public class InsertModel
{
    [JsonPropertyName("name")]
    public string? ProductName {get; set;}

    [JsonPropertyName("description")]
    public string? Description {get; set;}

    [JsonPropertyName("price")]
    public decimal Price {get; set;}

    [JsonPropertyName("category")]
    public string? Category {get; set;}

    [JsonPropertyName("image")]
    public string? Image {get; set;}
}