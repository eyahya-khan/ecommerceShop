using System.ComponentModel.DataAnnotations;

namespace shop24sevenApi.Models.Order;

public class Order
{
    [Key]
    public int OrderId { get; set; }
    public string? UserName { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Address { get; set; }
    public int PostalCode { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }
    public string? PaymentMethod { get; set; }
}