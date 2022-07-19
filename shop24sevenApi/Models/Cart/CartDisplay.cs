using System.ComponentModel.DataAnnotations;

namespace shop24sevenApi.Models.Cart;

public class CartDisplay
{
    [Key]
    public int CartId { get; set; }
    public string? CartUniqueId { get; set; }
    public int ProductId { get; set; }
    public string? ProductName { get; set; }
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public string? Category { get; set; }
    public string? Image { get; set; }
    public int Quantity { get; set; }
}