using BackEnd.Context;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Interfaces;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LoginController(AppDbContext context) {
            _context = context;
        }

        [HttpPost]
        public IActionResult GetByIdUser(User user) {
            var userToGet = _context.Users.SingleOrDefault(x => x.email == user.email && x.password == user.password);
            return Ok(userToGet);
        }
    }
}
