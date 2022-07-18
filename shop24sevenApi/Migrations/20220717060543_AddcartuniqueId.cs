using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace shop24sevenApi.Migrations
{
    public partial class AddcartuniqueId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CartId",
                table: "TblCartDetails");

            migrationBuilder.AddColumn<string>(
                name: "CartUniqueId",
                table: "TblCartDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CartUniqueId",
                table: "TblCart",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CartUniqueId",
                table: "TblCartDetails");

            migrationBuilder.DropColumn(
                name: "CartUniqueId",
                table: "TblCart");

            migrationBuilder.AddColumn<int>(
                name: "CartId",
                table: "TblCartDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
