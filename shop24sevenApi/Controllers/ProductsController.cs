using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shop24sevenApi.Data;
using shop24sevenApi.Models;
using shop24sevenApi.Models.Products;

namespace shop24sevenApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductsContext _context;
    public ProductsController(ProductsContext context) => _context = context;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.TblProducts);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        if (_context.TblProducts == null) return Ok();
        var getDataById = _context.TblProducts.Find(id);
        return Ok(getDataById);
    }

    [HttpPost]
    public async Task<IActionResult> Add(InsertModel request)
    {
        var simpleModel = new Products()
        {
            ProductName = request.ProductName,
            Description = request.Description,
            Price = request.Price,
            Category = request.Category,
            Image = request.Image
        };
        _context.TblProducts?.Add(simpleModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblProducts);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> update(int id, UpdateModel updateModel)
    {
        if (_context.TblProducts == null) return NotFound();
        var entitiy = _context.TblProducts.FirstOrDefault(item => item.ProductId == id);

        if (entitiy != null)
        {
            entitiy.ProductName = updateModel.ProductName;
            entitiy.Description = updateModel.Description;
            entitiy.Price = updateModel.Price;
            entitiy.Category = updateModel.Category;
            entitiy.Image = updateModel.Image;
            await _context.SaveChangesAsync();
        }
        return Ok(_context.TblProducts);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleteModel = new Products() { ProductId = id };
        if (_context.TblProducts == null) return NotFound();
        _context.TblProducts.Remove(deleteModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblProducts);
    }
}