-- SQLBook: Code
-- Verify meeto_ll_musical:init on pg

BEGIN;

SELECT id FROM "users" WHERE false;

SELECT id FROM "event" WHERE false;

SELECT id FROM "musical_type" WHERE false;

SELECT id FROM "momer_type" WHERE false;

SELECT id FROM "candidate_status" WHERE false;

SELECT id FROM "candidate_per_event" WHERE false;

SELECT id FROM "musical_type_per_users" WHERE false;

ROLLBACK;
