exports.up = knex => (
    knex.schema
        .raw(`
            create table asi (
                asi_id uuid default uuid_generate_v4(),
                long varchar(25),
                short varchar(5)
            );
           
            ALTER TABLE asi ENABLE ROW LEVEL SECURITY;
            
            CREATE POLICY asi_policy ON asi 
                FOR SELECT
                TO role_minion
                USING (true);

            GRANT SELECT ON asi TO role_minion;
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)