using API.Models;
using System.Linq;
using System.Collections.Generic;
using System;
namespace API
{
    public class DataSeed
    {
        private readonly APIdbContext _ctx;

        public DataSeed(APIdbContext ctx){
            _ctx = ctx;
        }

        public void SeedData(int nCust, int nOrders){
            if(!_ctx.Customers.Any()){
                SeedCustomers(nCust);
                _ctx.SaveChanges();
            }        
            if(!_ctx.Orders.Any()){
                SeedOrders(nOrders);
                _ctx.SaveChanges();
            }        
            if(!_ctx.Servers.Any()){
                SeedServers();
                _ctx.SaveChanges();
            }        
        }

        private void SeedCustomers(int n){
            List<Customer> customers = BuildCustomerList(n);

            foreach (var customer in customers)
            {
                _ctx.Customers.Add(customer);
            }
        }
        private void SeedOrders(int n){
            List<Order> orders = BuildOrderList(n);

            foreach (var order in orders)
            {
                _ctx.Orders.Add(order);
            }
        }

        private void SeedServers(){
            List<Server> servers = BuildServerList();

            foreach (var server in servers)
            {
                _ctx.Servers.Add(server);
            }
        }

        private List<Customer> BuildCustomerList(int nCust){
            var customers = new List<Customer>();
            var names = new List<string>();
            for(var i = 1; i<=nCust; i++){

                var name = Helpers.MakeUniqueCustomerName(names);
                names.Add(name);
                customers.Add(new Customer{
                    id =i,
                    Name = name,
                    Email = Helpers.MakeCustomerEmail(name),
                    State = Helpers.GetRandomState()
                });
            }

            return customers;
        }

        private List<Order> BuildOrderList(int nOrders){

            var orders = new List<Order>();
            var rand = new Random();

            for(var i =1; i<= nOrders; i++){

                var randCustId = rand.Next(1,_ctx.Customers.Count());
                var placed = Helpers.GetRandomOrderPlaced();
                var completed = Helpers.GetRandomOrderCompleted(placed);
                var customers = _ctx.Customers.ToList();

                orders.Add(new Order{
                    id =i,
                    Customer = customers.First(c => c.id == randCustId),
                    total = Helpers.GetRandomOrderTotal(),
                    placed = placed,
                    completed = completed 
                });
            }

            return orders;
        }

        private List<Server> BuildServerList(){
            
            return new List<Server>(){
                new Server{
                    id=1,
                    name="Dev-Web",
                    isOnline=true
                },
                new Server{
                    id=2,
                    name="Dev-Mail",
                    isOnline=false
                },
                new Server{
                    id=3,
                    name="Dev-Services",
                    isOnline=true
                },
                new Server{
                    id=4,
                    name="QA-Web",
                    isOnline=false
                },
                new Server{
                    id=5,
                    name="Prod-web",
                    isOnline=true
                },
                new Server{
                    id=6,
                    name="Prod-Mail",
                    isOnline=true
                },
                new Server{
                    id=7,
                    name="Prod-Services",
                    isOnline=true
                },
                new Server{
                    id=8,
                    name="QA-Services",
                    isOnline=false
                },
                new Server{
                    id=9,
                    name="QA-Services",
                    isOnline=true
                },
            };
        } 
    }
}