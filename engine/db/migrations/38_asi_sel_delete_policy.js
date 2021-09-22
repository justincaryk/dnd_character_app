exports.up = knex => (
    knex.schema
        .raw(`
            CREATE POLICY delete_asi_selected ON app_character.asi_selected
            FOR DELETE
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);
    
            GRANT DELETE ON app_character.asi_selected TO role_minion; 
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)
