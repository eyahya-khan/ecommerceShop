using Microsoft.AspNetCore.Mvc;
using shop24sevenApi.Data;
using shop24sevenApi.Models.Cart;

namespace shop24sevenApi.Controllers;

[ApiController]
[Route("[controller]")]
public class CartdisplayController : ControllerBase
{
    private readonly ProductsContext _context;
    public CartdisplayController(ProductsContext context) => _context = context;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.TblCartDisplay);
    }

    // [HttpGet("{id}")]
    // public IActionResult GetById(int id)
    // {
    //     if (_context.TblCartDisplay == null) return Ok();
    //     var getDataById = _context.TblCartDisplay.Find(id);
    //     return Ok(getDataById);
    // }

    [HttpGet("{username}")]
    public IActionResult GetByUserName(string username)
    {
        if (_context.TblCartDisplay == null) return Ok();
        var getDataByUserName = _context.TblCartDisplay.Where(x => x.userName == username);
        return Ok(getDataByUserName);
    }

    [HttpPost]
    public async Task<IActionResult> Add(CartdisplayInsertModel request)
    {
        var simpleModel = new CartDisplay()
        {
            CartUniqueId = request.CartUniqueId,
            userName = request.UserName,
            ProductId = request.ProductId,
            ProductName = request.ProductName,
            Price = request.Price,
            Image = request.Image,
            Quantity = request.Quantity,
        };
        _context.TblCartDisplay?.Add(simpleModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblCartDisplay);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> update(int id, CartdisplayUpdateModel cartdisplayUpdateModel)
    {
        if (_context.TblCartDisplay == null) return NotFound();
        var entitiy = _context.TblCartDisplay.FirstOrDefault(item => item.CartId == id);

        if (entitiy != null)
        {
            entitiy.Quantity = cartdisplayUpdateModel.Quantity;
            await _context.SaveChangesAsync();
        }
        return Ok(_context.TblCartDisplay);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleteModel = new CartDisplay() { CartId = id };
        if (_context.TblCartDisplay == null) return NotFound();
        _context.TblCartDisplay.Remove(deleteModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblCartDisplay);
    }
}