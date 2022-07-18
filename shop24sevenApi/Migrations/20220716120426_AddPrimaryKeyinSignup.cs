using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace shop24sevenApi.Migrations
{
    public partial class AddPrimaryKeyinSignup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "TblSignup",
                newName: "SigninId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SigninId",
                table: "TblSignup",
                newName: "Id");
        }
    }
}
