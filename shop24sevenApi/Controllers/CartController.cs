using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using shop24sevenApi.Data;
using shop24sevenApi.Models.Cart;

namespace shop24sevenApi.Controllers;

[ApiController]
[Route("[controller]")]
public class CartController : ControllerBase
{
    private readonly ProductsContext _context;
    public CartController(ProductsContext context) => _context = context;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.TblCart);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        if (_context.TblCart == null) return Ok();
        var getDataById = _context.TblCart.Find(id);
        return Ok(getDataById);
    }

    [HttpGet]
    [Route("GetCartByUsername/{username?}")]
    public IActionResult GetCartByUsername(string username)
    {
        if (_context.TblCart == null || _context.TblCartDetails == null || _context.TblProducts == null) return Ok();
        var queryResult = from a in _context.TblCart
                          join b in _context.TblCartDetails
                          on a.CartUniqueId equals b.CartUniqueId
                          join c in _context.TblProducts
                            on b.ProductId equals c.ProductId
                          where a.UserName == username
                          select new
                          {
                              a.CartUniqueId,
                              b.CartDetailsId,
                              a.CartId,
                              c.ProductName,
                              c.Description,
                              c.Price,
                              c.Image,
                              b.Quantity
                          };


        return Ok(queryResult);
    }


    [HttpPost]
    public async Task<IActionResult> Add(CartInsertModel request)
    {
        var simpleModel = new Cart()
        {
            CartUniqueId = request.CartUniqueId,
            UserName = request.UserName,
        };
        _context.TblCart?.Add(simpleModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblCart);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> update(int id, CartUpdateModel cartUpdateModel)
    {
        if (_context.TblCart == null) return NotFound();
        var entitiy = _context.TblCart.FirstOrDefault(item => item.CartId == id);

        if (entitiy != null)
        {
            entitiy.CartUniqueId = cartUpdateModel.CartUniqueId;
            entitiy.UserName = cartUpdateModel.UserName;
            await _context.SaveChangesAsync();
        }
        return Ok(_context.TblCart);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        //  var entitiy = _context.TblCart?.FirstOrDefault(item => item.CartId == id);

        // if (entitiy == null) return NotFound();
        // var entity1 = _context.TblCartDetails?.FirstOrDefault(item => item.CartDetailsId == id);
        // var deleteFromCartdetails = new CartDetails() { CartUniqueId = entitiy.CartUniqueId };

        // if (_context.TblCartDetails == null) return NotFound();
        // _context.TblCartDetails.Remove(deleteFromCartdetails);

        // var deleteFromCart = new Cart() { CartUniqueId = entitiy.CartUniqueId };
        // if (_context.TblCart == null) return NotFound();

        // _context.TblCart.Remove(deleteFromCart);

        // await _context.SaveChangesAsync();


        var entityId = new SqlParameter("@CartId", id);

        await _context.Database.ExecuteSqlRawAsync("EXEC deleteCartById @CartId", entityId);

        // var res =  (bool)result.Value;
        return Ok(_context.TblCart);
    }
}
