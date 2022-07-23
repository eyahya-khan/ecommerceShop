using Microsoft.EntityFrameworkCore;
using shop24sevenApi.Models;
using shop24sevenApi.Models.Cart;
using shop24sevenApi.Models.Category;
using shop24sevenApi.Models.Order;
using shop24sevenApi.Models.Products;
using shop24sevenApi.Models.Signup;

namespace shop24sevenApi.Data;
public class ProductsContext : DbContext
    {
public ProductsContext(DbContextOptions<ProductsContext> options) : base(options)
  {
  }
        public DbSet<Products>? TblProducts { get; set; }        
        public DbSet<Category>? TblCategory { get; set; }
        public DbSet<Order>? TblOrder { get; set; }        
        public DbSet<OrderDetails>? TblOrderDetails { get; set; }        
        public DbSet<Signup>? TblSignup { get; set; }              
        public DbSet<Cart>? TblCart { get; set; }        
        public DbSet<CartDetails>? TblCartDetails { get; set; }      
        public DbSet<CartDisplay>? TblCartDisplay { get; set; }      
    }