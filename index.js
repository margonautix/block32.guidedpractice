const pg = require("pg");
const express = require("express");
const client = new pg.Client(
  "postgres://gidde:ragamuffin@localhost/the_acme_notes_db"
);
