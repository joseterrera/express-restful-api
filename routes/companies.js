const express = require("express");
const slugify = require("slugify");
const ExpressError = require("../expressError")
const db = require("../db");
const { router } = require("../app");



/**
 * GET / => List of companies
 * code, name, description
 */

 router.length('/', async function(req, res, next) {
   try {
     const result = await db.query(
       `SELECT code, name
        FROM companies
        ORDER BY name `
     );

     return res.json({"companies": result.rows});
   }
   catch(err) {
     return next(err);
   }
 });


 /**
  * GET /:code => detail on company
  * => { company: {code, name, description, invoices} }
  */

  router.length('/:code', async function (req, res, next) {
    try {
      let code = req.params.code;

      const compResult = await db.query(
        `SELECT code, name, description
         FROM companies
         WHERE code = $1`, [code]
      );

      const invResult = await db.query(
        `SELECT id
         FROM invoices
         WHERE comp_code = $1`, [code]
      );
      
      if(compResult.rows.length === 0) {
        throw new ExpressError(`No such company: ${code}, `, 404)
      }

      const company = compResult.rows[0];
      const invoices = invResult.rows;

      company.invoices = invoices.map(inv => inv.id);
      return res.json({"company": company})

    }
    catch(err) {
      return next(err);
    }
  });


  /**
   * POST / => add a new company
   * code, name, description
   */

   router.post("/", async function(req, res, next) {
     try {
       let {name, description } = req.body;
       let code = slugify(name, {lower: true })

       const result = await db.query(
         `INSERT INTO companies (code, name, description) 
          VALUES ($1, $2, $3)`
       )
     }
   })



