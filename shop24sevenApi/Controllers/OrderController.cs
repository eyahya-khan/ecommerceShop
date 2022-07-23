using Microsoft.AspNetCore.Mvc;
using shop24sevenApi.Data;
using shop24sevenApi.Models.Order;

namespace shop24sevenApi.Controllers;

[ApiController]
[Route("[controller]")]
public class OrderController : ControllerBase
{
    private readonly ProductsContext _context;
    public OrderController(ProductsContext context) => _context = context;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.TblOrder);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        if (_context.TblOrder == null) return Ok();
        var getDataById = _context.TblOrder.Find(id);
        return Ok(getDataById);
    }

    [HttpPost]
    public async Task<IActionResult> Add(OrderInsertModel request)
    {
        var newOrder = new Order()
        {
            UserName = request.UserName,
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = request.Email,
            PhoneNumber = request.PhoneNumber,
            Address = request.Address,
            PostalCode = request.PostalCode,
            City = request.City,
            Country = request.Country,
            PaymentMethod = request.PaymentMethod,
            //gender
        };
        _context.TblOrder?.Add(newOrder);
        await _context.SaveChangesAsync();
        return Ok(_context.TblOrder);
    }

    // [HttpPut("{id}")]
    // public async Task<IActionResult> update(int id, CartUpdateModel cartUpdateModel)
    // {
    //     if (_context.TblCart == null) return NotFound();
    //     var entitiy = _context.TblCart.FirstOrDefault(item => item.CartId == id);

    //     if (entitiy != null)
    //     {
    //         entitiy.CartUniqueId = cartUpdateModel.CartUniqueId;
    //         entitiy.UserName = cartUpdateModel.UserName;
    //         await _context.SaveChangesAsync();
    //     }
    //     return Ok(_context.TblCart);
    // }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleteModel = new Order() { OrderId = id };
        if (_context.TblOrder == null) return NotFound();
        _context.TblOrder.Remove(deleteModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblOrder);
    }
}