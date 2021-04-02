using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Linq;
namespace API
{
    [Route("api/[controller]")]
    public class ServerController:Controller
    {
        private readonly APIdbContext ctx;

        public ServerController(APIdbContext context)
        {
            ctx = context;
        }

        [HttpGet]
        public IActionResult Get(){
            var response = ctx.Servers.OrderBy(s => s.id).ToList();

            return Ok(response);
        }

        [HttpGet("{id}", Name = "GetServer")]
        public IActionResult Get(int id){
            var response = ctx.Servers.Find(id);
            return Ok(response);
        }

        [HttpPut("{id}")]
        public IActionResult Message(int id, [FromBody] ServerMessage msg){
            var server = ctx.Servers.Find(id);

            if(server == null){
                return NotFound();
            }

            if(msg.payLoad == "activate"){
                server.isOnline = true;
                ctx.SaveChanges();
            }

            if(msg.payLoad == "deactivate"){
                server.isOnline = false;
                ctx.SaveChanges();
            }

            return new NoContentResult();
        }


    }
}