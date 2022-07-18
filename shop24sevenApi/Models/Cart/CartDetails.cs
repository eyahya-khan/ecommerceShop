using System.ComponentModel.DataAnnotations;

namespace shop24sevenApi.Models.Cart;

public class CartDetails
{
    [Key]
    public int CartDetailsId { get; set; }
    public string? CartUniqueId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
}