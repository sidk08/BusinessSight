using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class APIdbContext : DbContext
    {
        public APIdbContext(DbContextOptions<APIdbContext> options): base(options){}

        public DbSet<Customer> Customers{get; set;}
        public DbSet<Order> Orders{get;set;}

        public DbSet<Server> Servers{get;set;}
    }
}