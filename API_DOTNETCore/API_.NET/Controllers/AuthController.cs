﻿using API_.NET.Models;
using Microsoft.AspNetCore.Mvc;
using System;
namespace API_.NET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // POST: api/Account
        [HttpPost("signup")]
        public IActionResult CreateAccount([FromBody] Account account)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    account.Password = BCrypt.Net.BCrypt.HashPassword(account.Password, Constants.Constants.PW_SALT);
                    context.Account.Add(account);
                    context.SaveChanges();
                    return Ok("Success");
                }
            } catch(Exception ex)
            {
                return BadRequest(ex);
            }          
        }

    }
}