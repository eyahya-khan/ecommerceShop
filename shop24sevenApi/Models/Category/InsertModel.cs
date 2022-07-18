using System.Text.Json.Serialization;

namespace shop24sevenApi.Models.Category;

public class InsertModel
{

    [JsonPropertyName("category")]
    public string? Category {get; set;}

    [JsonPropertyName("image")]
    public string? Image {get; set;}
}