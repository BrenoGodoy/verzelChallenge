using BackEnd.Context;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Interfaces;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context) {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> AddUsers(User user) {
            // Aqui a senha seria criptografada normalmente, para ser salva no BD //
            _context.Add(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }
    }
}
