using System;
using System.Collections.Generic;
namespace API{
    public class Helpers{
        
        private static Random _rand = new Random();

        private static string GetRandom(IList<string> items){
            return items[_rand.Next(items.Count)];
        }

        internal static string MakeUniqueCustomerName(List<string> names){
            var maxNames = bizPrefix.Count + bizSuffix.Count;

            if(names.Count >= maxNames){
                throw new System.InvalidOperationException("Maximum possible combination of names reached");
            }
            var prefix = GetRandom(bizPrefix);
            var suffix = GetRandom(bizSuffix);
            var bizName = prefix + suffix;
            
            if(names.Contains(bizName)){
                MakeUniqueCustomerName(names);
            }

            return bizName; 
        }

        internal static string MakeCustomerEmail(string custName){
            return $"contact@{custName.ToLower()}.com"; 
        }

        internal static string GetRandomState(){
            return GetRandom(usStates);
        }

        private static readonly List<string> usStates = new List<string>(){
            "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC",
            "DE","FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN",
            "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO",
            "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV",
            "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD",
            "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"
        };

        internal static decimal GetRandomOrderTotal(){
            return _rand.Next(100, 10000);
        }

        internal static DateTime GetRandomOrderPlaced(){
            var end = DateTime.Now;
            var start = end.AddDays(-90);

            TimeSpan possibleSpan = end-start;
            TimeSpan newSpan = new TimeSpan(0, _rand.Next(0, (int)possibleSpan.TotalMinutes), 0);

            return start+newSpan;
        }

        internal static DateTime GetRandomOrderCompleted(DateTime orderPlaced){

            var now =DateTime.Now;
            var minLeadTime = TimeSpan.FromDays(7);
            var timePassed = now - orderPlaced;

            if(timePassed < minLeadTime){
                return orderPlaced;
            }

            return orderPlaced.AddDays(_rand.Next(7,14));
        }

        private static readonly List<string> bizPrefix = new List<string>(){
            "ABC",
            "XYZ",
            "MainSt",
            "Enterprise",
            "Ready",
            "Quick",
            "Budget",
            "Peak",
            "Magic",
            "Family",
            "Comfort"
        };

        private static readonly List<string> bizSuffix = new List<string>(){
            "Croporation",
            "Co",
            "Logistics",
            "Transit",
            "Bakery",
            "Goods",
            "Foods",
            "Cleaners",
            "Hotels",
            "Planners",
            "Automotive",
            "Books"
        };
    }
}