using System.ComponentModel.DataAnnotations;

namespace shop24sevenApi.Models.Cart;

public class Cart
{
    [Key]
    public int CartId { get; set; }
    public string? CartUniqueId { get; set; }
    public string? UserName { get; set; }
}