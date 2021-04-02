using System;
namespace API.Models
{
    public class Order
    {
        public int id{get; set;}
        public Customer Customer{get;set;}
        public decimal total{get; set;}
        public DateTime placed{get;set;}
        public DateTime completed{get; set;}
    }
}