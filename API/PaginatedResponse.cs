using System.Collections.Generic;
using System.Linq;
namespace API
{
    public class PaginatedResponse<T>
    {   

        public int Total {get; set;}

        public IEnumerable<T> Data {get;set;}

        public PaginatedResponse(IEnumerable<T> data, int i, int len){
            Data = data.Skip((i-1) * len).Take(len).ToList();
            Total = data.Count();
        }
    }
}