using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiCoreLocal.Model
{
    public class User
    {
        public int id { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string password { get; set; }

        public string country { get; set; }

        public string token { get; set; }

    }
}
