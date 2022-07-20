using System.ComponentModel.DataAnnotations;

namespace shop24sevenApi.Models.Products;

public class Products
{
    [Key]
    public int ProductId { get; set; }
    public string? ProductName { get; set; }
    public string? Description { get; set; }
    public string? Price { get; set; }
    public int Quantity { get; set; }
    public string? Category { get; set; }
    public string? Image { get; set; }
}