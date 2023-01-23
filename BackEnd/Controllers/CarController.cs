using BackEnd.Context;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class CarController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CarController(AppDbContext context) {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAllCars() {
            return Ok(_context.Cars);
        }
        [HttpPost]
        public async Task<IActionResult> AddCars(Car car) {
            _context.Add(car);
            await _context.SaveChangesAsync();
            return Ok(car);
        }
        [HttpPut]
        public async Task<IActionResult> EditCar(Car car) {
            var itemToAdd = _context.Cars.SingleOrDefault(x => x.id == car.id);
            if (itemToAdd != null) {
                    itemToAdd.name = car.name;
                
    
                    itemToAdd.brand = car.brand;
                
    
                    itemToAdd.model = car.model;
                
    
                    itemToAdd.image = car.image;
                
    
                    itemToAdd.value = car.value;
                
             
                    itemToAdd.description = car.description;
            }
            await _context.SaveChangesAsync();
            return Ok(car);
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteCars(int id) {
            var itemToRemove = _context.Cars.SingleOrDefault(x => x.id == id);
            if (itemToRemove != null) {
                _context.Cars.Remove(itemToRemove);
                await _context.SaveChangesAsync();
                return Ok('1');
            }
            return BadRequest('2');
        }
    }
}
