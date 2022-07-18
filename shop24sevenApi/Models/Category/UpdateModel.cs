using System.Text.Json.Serialization;

namespace shop24sevenApi.Models.Category;

public class UpdateModel
{
    [JsonPropertyName("category")]
    public string? Category {get; set;}

    [JsonPropertyName("image")]
    public string? Image {get; set;}
}