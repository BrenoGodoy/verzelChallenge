using BackEnd.Context;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet]
        public IActionResult GetByIdUser(int id) {
            var user = _context.Users.SingleOrDefault(x => x.id == id);
            return Ok(user);
        }
        [HttpPost]
        public async Task<IActionResult> AddUsers(User user) {
            _context.Add(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }
        // [HttpPut]
        // public async Task<IActionResult> EditUser(Car car) {
        //     var itemToAdd = _context.Cars.SingleOrDefault(x => x.id == car.id);
        //     if (itemToAdd != null) {
        //             itemToAdd.name = car.name;
                
    
        //             itemToAdd.brand = car.brand;
                
    
        //             itemToAdd.model = car.model;
                
    
        //             itemToAdd.image = car.image;
                
    
        //             itemToAdd.value = car.value;
                
             
        //             itemToAdd.description = car.description;
        //     }
        //     await _context.SaveChangesAsync();
        //     return Ok(car);
        // }
        // [HttpDelete]
        // public async Task<IActionResult> DeleteUsers(int id) {
        //     var itemToRemove = _context.Users.SingleOrDefault(x => x.id == id);
        //     if (itemToRemove != null) {
        //         _context.Users.Remove(itemToRemove);
        //         await _context.SaveChangesAsync();
        //         return Ok('1');
        //     }
        //     return BadRequest('2');
        // }
    }
}
