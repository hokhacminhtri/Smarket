﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_.NET.DTO;
using API_.NET.Models;
using Microsoft.EntityFrameworkCore;

namespace API_.NET.DAO
{
    public class DAO_Store
    {
        // Get amount product of a store with storeId
        public static ProductOfStore GetAmountProduct(int storeId)
        {
            using (var context = new SmarketContext())
            {
                return context.ProductOfStore.FromSql(DAO_Queries.CountProductOfStore(storeId)).FirstOrDefault();
            }
        }
    }
}