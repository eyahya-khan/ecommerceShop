// using Microsoft.EntityFrameworkCore;

// namespace shop24sevenApi.Data;

// public static class SeedData
// {
//     public static void Initialize(IServiceProvider serviceProvider)
//     {
//         using (var context = new ProductsContext(
//         serviceProvider.GetRequiredService<DbContextOptions<ProductsContext>>()))
//         {
//             // Look for any movies.
//             //if (context.TableProducts.Any()) { return; }
//             context.TableProducts?.AddRange(
//             new Models.Products
//             {
//                 Id = 1,
//                 Name = "When Harry Met Sally",
//                 Description = "This is products description"
//             },
//             new Models.Products
//             {
//                 Id = 2,
//                 Name = "When Harry Met Sally",
//                 Description = "This is products description"
//             },
//             new Models.Products
//             {
//                 Id = 3,
//                 Name = "When Harry Met Sally",
//                 Description = "This is products description"
//             },
//             new Models.Products
//             {
//                Id = 4,
//                 Name = "When Harry Met Sally",
//                 Description = "This is products description"
//             },
//             new Models.Products
//             {
//                 Id = 5,
//                 Name = "When Harry Met Sally",
//                 Description = "This is products description"
//             },
//             new Models.Products
//             {
//                 Id = 6,
//                 Name = "When Harry Met Sally",
//                 Description = "This is products description"
//             }
//             );
//             context.SaveChanges();
//         }
//     }
// }