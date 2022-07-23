using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace shop24sevenApi.Migrations
{
    public partial class Modify_cartdisplay_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "TblCartDisplay");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "TblCartDisplay",
                newName: "userName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "userName",
                table: "TblCartDisplay",
                newName: "Description");

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "TblCartDisplay",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
