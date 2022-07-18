using Microsoft.AspNetCore.Mvc;
using shop24sevenApi.Data;
using shop24sevenApi.Models.Category;

namespace shop24sevenApi.Controllers;

[ApiController]
[Route("[controller]")]
public class CategoryController : ControllerBase
{
    private readonly ProductsContext _context;
    public CategoryController(ProductsContext context) => _context = context;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.TblCategory);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        if (_context.TblCategory == null) return Ok();
        var getDataById = _context.TblCategory.Find(id);
        return Ok(getDataById);
    }

    [HttpPost]
    public async Task<IActionResult> Add(InsertModel request)
    {
        var categoryModel = new Category()
        {
            CategoryName = request.Category,
            Image = request.Image
        };
        _context.TblCategory?.Add(categoryModel);
        await _context.SaveChangesAsync();
        return Ok(_context.TblCategory);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> update(int id, UpdateModel updateModel)
    {
        if (_context.TblCategory == null) return NotFound();
        var entitiy = _context.TblCategory?.FirstOrDefault(item => item.Id == id);

        if (entitiy != null)
        {
            entitiy.CategoryName = updateModel.Category;
            entitiy.Image = updateModel.Image;
            await _context.SaveChangesAsync();
        }
        return Ok(_context.TblCategory);
    }
}