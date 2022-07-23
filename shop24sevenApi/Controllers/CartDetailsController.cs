using Microsoft.AspNetCore.Mvc;
using shop24sevenApi.Data;
using shop24sevenApi.Models.Cart;

namespace shop24sevenApi.Controllers;

[ApiController]
[Route("[controller]")]
public class CartDetailsController : ControllerBase
{
    private readonly ProductsContext _context;
    public CartDetailsController(ProductsContext context) => _context = context;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.TblCartDetails);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        if (_context.TblCartDetails == null) return Ok();
        var getDataById = _context.TblCartDetails.Find(id);
        return Ok(getDataById);
    }

    [HttpPost]
    public async Task<IActionResult> Add(CartDetailsInsertModel request)
    {
        var simpleModel = new CartDetails()
        {
            CartUniqueId = request.CartUniqueId,
            ProductId = request.ProductId,
            Quantity = request.Quantity
        };
        _context.TblCartDetails?.Add(simpleModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblCartDetails);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> update(int id, CartDetailsUpdateModel cartUpdateModel)
    {
        if (_context.TblCartDetails == null) return NotFound();
        var entitiy = _context.TblCartDetails.FirstOrDefault(item => item.CartDetailsId == id);

        if (entitiy != null)
        {
            entitiy.Quantity = cartUpdateModel.Quantity;
            await _context.SaveChangesAsync();
        }
        return Ok(_context.TblCartDetails);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleteModel = new CartDetails() { CartDetailsId = id };
        if (_context.TblCartDetails == null) return NotFound();
        _context.TblCartDetails.Remove(deleteModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblCartDetails);
    }
}
