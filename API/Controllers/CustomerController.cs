using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Linq;
namespace API.Controllers
{   
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly APIdbContext ctx;

        public CustomerController(APIdbContext context){
            ctx = context;
        }

        [HttpGet("{id}", Name="GetCustomer")]
        public IActionResult Get(int id){
            var customer = ctx.Customers.Find(id);
            return Ok(customer);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Customer customer){
            if(customer == null){
                return BadRequest();
            }

            ctx.Customers.Add(customer);
            ctx.SaveChanges();

            return CreatedAtAction("GetCustomer", new Customer{id = customer.id}, customer);
        }
    }
}