using System.Text.Json.Serialization;

namespace shop24sevenApi.Models;

public class UpdateModel
{
    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("name")]
    public string? ProductName {get; set;}

    [JsonPropertyName("description")]
    public string? Description {get; set;}

    [JsonPropertyName("price")]
    public string? Price {get; set;}

    [JsonPropertyName("quantity")]
    public int Quantity {get; set;}

    [JsonPropertyName("category")]
    public string? Category {get; set;}

    [JsonPropertyName("image")]
    public string? Image {get; set;}
}